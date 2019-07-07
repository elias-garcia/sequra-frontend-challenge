import React from 'react';
import ReactDOM from 'react-dom';
import financingInfoStepsData from '../../../../data/financing-info-steps-data.json';
import FinancingInfoBodyStepList from './financing-info-body-step-list';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FinancingInfoBodyStepList steps={financingInfoStepsData} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
