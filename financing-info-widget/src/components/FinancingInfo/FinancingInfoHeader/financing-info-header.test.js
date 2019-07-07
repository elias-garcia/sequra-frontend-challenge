import React from 'react';
import ReactDOM from 'react-dom';
import FinancingInfoHeader from './financing-info-header';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FinancingInfoHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
