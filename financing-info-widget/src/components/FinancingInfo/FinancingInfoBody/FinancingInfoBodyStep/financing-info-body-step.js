import PropTypes from 'prop-types';
import React from 'react';
import './financing-info-body-step.css';

function FinancingInfoBodyStep({ step }) {
  return <li className="FinancingInfoBodyStep">{step.text}</li>;
}

FinancingInfoBodyStep.propTypes = {
  step: PropTypes.object.isRequired,
};

export default FinancingInfoBodyStep;
