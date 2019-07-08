import React, { useEffect, useState } from 'react';
import creditAgreementsApi from '../../api/credit-agreements-api';
import message from '../../utils/message';
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
        if (event.data.type === message.types.SEQURA_WIDGETS_LIB_PRICE) {
          getCreditAgreements(event.data.payload);
        }
      }, false);
    }

    function sendReadyMessageToParent() {
      message.send(window.parent, message.types.FINANCING_WIDGET_OPEN_MODAL, state.selectedCreditAgreement);
    }

    listenToPriceChangeFromParent();
    sendReadyMessageToParent();
  }, []);

  function handleMoreInfoClick() {
    message.send(window.parent, message.types.)
  }

  function handleSelectedCreditAgreementChange(selectedCreditAgreement) {
    setState({
      ...state,
      selectedCreditAgreement,
    });
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
