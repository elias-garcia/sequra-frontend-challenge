import PropTypes from 'prop-types';
import React from 'react';
import './financing-info-header.css';

function FinancingInfoHeader({ onClose }) {
  return (
    <div className="FinancingInfoHeader">
      <p>Fracciona tu pago con Sequra</p>
      <button
        className="FinancingInfoHeader__close-button"
        type="button"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
}

FinancingInfoHeader.propTypes = {
  onClose: PropTypes.func,
};

FinancingInfoHeader.defaultProps = {
  onClose: () => { },
};

export default FinancingInfoHeader;
