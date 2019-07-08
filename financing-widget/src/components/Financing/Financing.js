import PropTypes from 'prop-types';
import React from 'react';
import './Financing.css';
import FinancingHeader from './FinancingHeader/FinancingHeader';
import FinancingSelect from './FinancingSelect/FinancingSelect';

function Financing({
  creditAgreements,
  selectedCreditAgreement,
  onSelectedCreditAgreementChange,
  onMoreInfoClick,
}) {
  function handleMoreInfoClick() {
    onMoreInfoClick();
  }

  function handleCreditAgreementChanges(creditAgreement) {
    onSelectedCreditAgreementChange(creditAgreement);
  }

  return (
    <div className="Financing">
      <FinancingHeader onMoreInfoClick={handleMoreInfoClick} />
      {
        creditAgreements
        && selectedCreditAgreement
        && (
          <FinancingSelect
            creditAgreements={creditAgreements}
            selectedCreditAgreement={selectedCreditAgreement}
            onCreditAgreementChanges={handleCreditAgreementChanges}
          />
        )
      }
    </div>
  );
}

Financing.propTypes = {
  creditAgreements: PropTypes.object,
  selectedCreditAgreement: PropTypes.object,
  onSelectedCreditAgreementChange: PropTypes.func,
  onMoreInfoClick: PropTypes.func,
};

Financing.defaultProps = {
  creditAgreements: null,
  selectedCreditAgreement: null,
  onSelectedCreditAgreementChange: () => { },
  onMoreInfoClick: () => { },
};

export default Financing;
