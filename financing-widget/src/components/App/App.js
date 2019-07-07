import React, { useEffect, useState } from 'react';
import creditAgreementsApi from '../../api/credit-agreements-api';
import message from '../../utils/message';
import Financing from '../Financing/Financing';
import './App.css';

function App() {
  const [creditAgreements, setCreditAgreements] = useState(null);

  useEffect(() => {
    function getCreditAgreements(price) {
      creditAgreementsApi.getCreditAgreements(price)
        .then(res => setCreditAgreements(res.data));
    }

    function listenToPriceChangeFromParent() {
      window.addEventListener('message', (event) => {
        if (event.data.type === message.types.SEQURA_WIDGETS_LIB_PRICE) {
          getCreditAgreements(event.data.payload);
        }
      }, false);
    }

    function sendReadyMessageToParent() {
      message.send(window.parent, message.types.FINANCING_WIDGET_READY, {});
    }

    listenToPriceChangeFromParent();
    sendReadyMessageToParent();
  }, []);

  return (
    <div className="App">
      <Financing creditAgreements={creditAgreements} />
    </div>
  );
}

export default App;
