import PropTypes from 'prop-types';
import React from 'react';
import './Financing.css';
import FinancingHeader from './FinancingHeader/FinancingHeader';
import FinancingSelect from './FinancingSelect/FinancingSelect';

function Financing({ creditAgreements }) {
  return (
    <div className="Financing">
      <FinancingHeader />
      <FinancingSelect creditAgreements={creditAgreements} />
    </div>
  );
}

Financing.propTypes = {
  creditAgreements: PropTypes.object,
};

Financing.defaultProps = {
  creditAgreements: null,
};

export default Financing;
