import PropTypes from 'prop-types';
import React from 'react';
import './FinancingSelect.css';

function FinancingSelect({ creditAgreements, selectedCreditAgreement, onCreditAgreementChanges }) {
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

  function getSelectedCreditAgreement(value) {
    const findPredicate = creditAgreement => creditAgreement.instalment_count.toString() === value;

    return creditAgreements.find(findPredicate);
  }

  function handleChange(event) {
    const newSelectedCreditAgreement = getSelectedCreditAgreement(event.target.value);

    onCreditAgreementChanges(newSelectedCreditAgreement);
  }

  return (
    <select
      className="FinancingSelect"
      onChange={handleChange}
      value={selectedCreditAgreement.instalment_count}
    >
      {getOptions()}
    </select>
  );
}

FinancingSelect.propTypes = {
  creditAgreements: PropTypes.object,
  selectedCreditAgreement: PropTypes.object,
  onCreditAgreementChanges: PropTypes.func,
};

FinancingSelect.defaultProps = {
  creditAgreements: null,
  selectedCreditAgreement: null,
  onCreditAgreementChanges: () => { },
};

export default FinancingSelect;
