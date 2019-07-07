import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_ELEMENT_ID = 'modal-root';

function Modal({ children, show, }) {
  return (
    <>
      {
        show
        && ReactDOM.createPortal(
          children,
          document.getElementById(MODAL_ELEMENT_ID),
        )
      }
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Modal;
