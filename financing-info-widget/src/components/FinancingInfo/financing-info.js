import PropTypes from 'prop-types';
import React from 'react';
import './financing-info.css';
import FinancingInfoBody from './FinancingInfoBody/financing-info-body';
import FinancingInfoHeader from './FinancingInfoHeader/financing-info-header';

function FinancingInfo({ creditAgreement, onClose }) {
  return (
    <div className="FinancingInfo">
      <div className="FinancingInfo__header">
        <FinancingInfoHeader onClose={onClose} />
      </div>
      <hr className="FinancingInfo__separator" />
      <div className="FinancingInfo__body">
        <FinancingInfoBody creditAgreement={creditAgreement} />
      </div>
    </div>
  );
}

FinancingInfo.propTypes = {
  creditAgreement: PropTypes.object,
  onClose: PropTypes.func,
};

FinancingInfo.defaultProps = {
  creditAgreement: null,
  onClose: () => { },
};

export default FinancingInfo;
