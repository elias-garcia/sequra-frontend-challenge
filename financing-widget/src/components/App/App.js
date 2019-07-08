import React, { useEffect, useState } from 'react';
import creditAgreementsApi from '../../api/credit-agreements-api';
import eventsApi from '../../api/events-api';
import eventType from '../../enums/event-type';
import messageType from '../../enums/message-type';
import messenger from '../../utils/messenger';
import Financing from '../Financing/Financing';
import './App.css';

function App() {
  const [state, setState] = useState({
    creditAgreements: null,
    selectedCreditAgreement: null,
  });

  useEffect(() => {
    function getCreditAgreements(price) {
      creditAgreementsApi.getCreditAgreements(price)
        .then(res => setState({
          ...state,
          creditAgreements: res.data,
          selectedCreditAgreement: res.data[0],
        }));
    }

    function listenToPriceChangeFromParent() {
      window.addEventListener('message', (event) => {
        if (event.data.type === messageType.SEQURA_WIDGETS_LIB_PRICE) {
          getCreditAgreements(event.data.payload);
        }
      }, false);
    }

    function sendReadyMessageToParent() {
      messenger.send(window.parent, messageType.FINANCING_WIDGET_READY, {});
    }

    listenToPriceChangeFromParent();
    sendReadyMessageToParent();
  }, []);

  function sendMoreInfoClickEvent() {
    eventsApi.recordEvent(eventType.MORE_INFO_BUTTON_CLICK);
  }

  function handleMoreInfoClick() {
    messenger.send(
      window.parent,
      messageType.FINANCING_WIDGET_OPEN_MODAL,
      state.selectedCreditAgreement,
    );
    sendMoreInfoClickEvent();
  }

  function sendCreditAgreementChangeEvent(instalmentCount) {
    eventsApi.recordEvent(
      eventType.SIMULATOR_INSTALMENT_CHANGE,
      { value: instalmentCount },
    );
  }

  function handleSelectedCreditAgreementChange(selectedCreditAgreement) {
    setState({
      ...state,
      selectedCreditAgreement,
    });
    sendCreditAgreementChangeEvent(selectedCreditAgreement.instalment_count);
  }

  return (
    <div className="App">
      <Financing
        creditAgreements={state.creditAgreements}
        selectedCreditAgreement={state.selectedCreditAgreement}
        onSelectedCreditAgreementChange={handleSelectedCreditAgreementChange}
        onMoreInfoClick={handleMoreInfoClick}
      />
    </div>
  );
}

export default App;
