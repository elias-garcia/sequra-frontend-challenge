import React from 'react';
import ReactDOM from 'react-dom';
import FinancingInfo from './financing-info';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FinancingInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
