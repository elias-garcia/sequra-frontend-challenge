import React from 'react';
import ReactDOM from 'react-dom';
import FinancingInfoBody from './financing-info-body';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FinancingInfoBody />, div);
  ReactDOM.unmountComponentAtNode(div);
});
