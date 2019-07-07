import PropTypes from 'prop-types';
import React from 'react';
import './financing-info.css';
import FinancingInfoBody from './FinancingInfoBody/financing-info-body';
import FinancingInfoHeader from './FinancingInfoHeader/financing-info-header';

function FinancingInfo({ onClose }) {
  return (
    <div className="FinancingInfo">
      <FinancingInfoHeader onClose={onClose} />
      <FinancingInfoBody />
    </div>
  );
}

FinancingInfo.propTypes = {
  onClose: PropTypes.func,
};

FinancingInfo.defaultProps = {
  onClose: () => { },
};

export default FinancingInfo;
