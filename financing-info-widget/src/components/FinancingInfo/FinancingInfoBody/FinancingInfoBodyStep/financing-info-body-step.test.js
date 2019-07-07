import React from 'react';
import ReactDOM from 'react-dom';
import financingInfoStepsData from '../../../../data/financing-info-steps-data.json';
import FinancingInfoBodyStep from './financing-info-body-step';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FinancingInfoBodyStep step={financingInfoStepsData[0]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
