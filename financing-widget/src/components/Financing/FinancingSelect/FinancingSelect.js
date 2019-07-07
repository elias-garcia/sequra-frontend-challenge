import PropTypes from 'prop-types';
import React from 'react';
import './FinancingSelect.css';

function FinancingSelect({ creditAgreements }) {
  function getOptions() {
    return creditAgreements.map(creditAgreement => (
      <option
        value={creditAgreement.instalment_count}
        key={creditAgreement.instalment_count}
      >
        {creditAgreement.instalment_count}
        {' '}
        cuotas de
        {' '}
        {creditAgreement.instalment_amount.string}
        {' '}
        /mes
      </option>
    ));
  }

  return (
    <select className="FinancingSelect">
      {creditAgreements && getOptions()}
    </select>
  );
}

FinancingSelect.propTypes = {
  creditAgreements: PropTypes.object,
};

FinancingSelect.defaultProps = {
  creditAgreements: null,
};

export default FinancingSelect;
