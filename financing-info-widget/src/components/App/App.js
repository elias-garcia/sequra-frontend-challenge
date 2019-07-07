import React, { useState } from 'react';
import FinancingInfo from '../FinancingInfo/financing-info';
import Modal from '../Modal/modal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleModalClose() {
    setShowModal(false);
  }

  return (
    <div className="App">
      <Modal show={showModal}>
        <FinancingInfo onClose={handleModalClose} />
      </Modal>
    </div>
  );
}

export default App;
