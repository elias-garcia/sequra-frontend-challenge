import PropTypes from 'prop-types';
import React from 'react';
import FinancingInfoBodyStep from '../FinancingInfoBodyStep/financing-info-body-step';
import './financing-info-body-step-list.css';

function FinancingInfoBodyStepList({ steps }) {
  return (
    <ol className="FinancingInfoBodyStepList">
      {steps.map(step => <FinancingInfoBodyStep step={step} key={step.id} />)}
    </ol>
  );
}

FinancingInfoBodyStepList.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default FinancingInfoBodyStepList;
