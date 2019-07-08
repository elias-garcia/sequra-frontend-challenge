import React, { useEffect, useState } from 'react';
import message from '../../utils/message';
import FinancingInfo from '../FinancingInfo/financing-info';
import Modal from '../Modal/modal';
import './App.css';

function App() {
  const [state, setState] = useState({
    showModal: false,
    creditAgreement: null,
  });

  function sendCloseMessageToParent() {
    message.send(window.parent, message.types.FINANCING_INFO_WIDGET_CLOSE_MODAL, {});
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
        if (event.data.type === message.types.SEQURA_WIDGETS_LIB_OPEN_MODAL) {
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
