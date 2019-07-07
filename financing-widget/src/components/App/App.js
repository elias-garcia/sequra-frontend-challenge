import React, { useEffect, useState } from 'react';
import message from '../../utils/message';
import Financing from '../Financing/Financing';
import './App.css';

function App() {
  const [price, setPrice] = useState(null);
  const sendReadyMessageToParent = () => {
    message.send(window.parent, message.types.READY, {});
  };
  const listenToPriceChangeFromParent = () => {
    window.addEventListener('message', (event) => {
      setPrice(event.data.payload);
    }, false);
  };

  useEffect(() => {
    listenToPriceChangeFromParent();
    sendReadyMessageToParent();
  }, []);

  return (
    <div className="App">
      <Financing price={price} />
    </div>
  );
}

export default App;
