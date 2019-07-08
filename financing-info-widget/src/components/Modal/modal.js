import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const MODAL_ELEMENT_ID = 'modal-root';
const MODAL_OPENED_CLASS = 'modal--opened';

function Modal({ children, show }) {
  const modalRoot = document.getElementById(MODAL_ELEMENT_ID);

  function addOpenedClassToModal() {
    modalRoot.classList.add(MODAL_OPENED_CLASS);
  }

  function removeOpenedClassFromModal() {
    modalRoot.classList.remove(MODAL_OPENED_CLASS);
  }

  useEffect(() => {
    if (show) {
      addOpenedClassToModal();
    } else {
      removeOpenedClassFromModal();
    }
  });

  return (
    <>
      {show && children && ReactDOM.createPortal(children, modalRoot)}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  show: PropTypes.bool,
};

Modal.defaultProps = {
  children: null,
  show: false,
};

export default Modal;
