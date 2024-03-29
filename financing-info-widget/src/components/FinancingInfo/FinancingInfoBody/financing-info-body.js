import PropTypes from 'prop-types';
import React from 'react';
import financingInfoStepsData from '../../../data/financing-info-steps-data.json';
import './financing-info-body.css';
import FinancingInfoBodyStepList from './FinancingInfoBodyStepList/financing-info-body-step-list';

function FinancingInfoBody({ creditAgreement }) {
  return (
    <div className="FinancingInfoBody">
      <div className="FinancingInfoBody__block">
        <FinancingInfoBodyStepList steps={financingInfoStepsData} />
      </div>
      <p className="FinancingInfoBody__block">¡Así de simple!</p>
      <p className="FinancingInfoBody__block">
        Además, en el importe ya se incluye la cuota única mensual de&nbsp;
        {
          creditAgreement
          && creditAgreement.instalment_fee.string
        }
        /mes
      , por lo que no tendrás ninguna sorpresa.
      </p>
    </div>
  );
}

FinancingInfoBody.propTypes = {
  creditAgreement: PropTypes.object,
};

FinancingInfoBody.defaultProps = {
  creditAgreement: null,
};

export default FinancingInfoBody;
