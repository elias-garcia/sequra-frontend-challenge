import React, { useEffect, useState } from 'react';
import messageType from '../../enums/message-type';
import messenger from '../../utils/messenger';
import FinancingInfo from '../FinancingInfo/financing-info';
import Modal from '../Modal/modal';
import './App.css';

function App() {
  const [state, setState] = useState({
    showModal: false,
    creditAgreement: null,
  });

  function sendCloseMessageToParent() {
    messenger.send(window.parent, messageType.FINANCING_INFO_WIDGET_CLOSE_MODAL, {});
  }

  function handleModalClose() {
    setState({
      ...state,
      showModal: false,
    });
    sendCloseMessageToParent();
  }

  useEffect(() => {
    function listenToShowFromParent() {
      window.addEventListener('message', (event) => {
        if (event.data.type === messageType.SEQURA_WIDGETS_LIB_OPEN_MODAL) {
          setState({
            showModal: true,
            creditAgreement: event.data.payload,
          });
        }
      }, false);
    }

    listenToShowFromParent();
  }, []);

  return (
    <div className="App">
      {
        state.creditAgreement
        && (
          <Modal show={state.showModal}>
            <FinancingInfo
              creditAgreement={state.creditAgreement}
              onClose={handleModalClose}
            />
          </Modal>
        )
      }
    </div>
  );
}

export default App;
