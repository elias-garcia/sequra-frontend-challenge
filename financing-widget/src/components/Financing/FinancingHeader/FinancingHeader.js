import PropTypes from 'prop-types';
import React from 'react';
import './FinancingHeader.css';

function FinancingHeader({ onMoreInfoClick }) {
  return (
    <div className="FinancingHeader">
      <p>Págalo en</p>
      <button
        className="FinancingHeader__button"
        type="button"
        onClick={onMoreInfoClick}
      >
        Más info
      </button>
    </div>
  );
}

FinancingHeader.propTypes = {
  onMoreInfoClick: PropTypes.func,
};

FinancingHeader.defaultProps = {
  onMoreInfoClick: () => { },
};

export default FinancingHeader;
