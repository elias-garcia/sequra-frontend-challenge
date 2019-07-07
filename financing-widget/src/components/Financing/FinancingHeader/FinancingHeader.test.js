import React from 'react';
import ReactDOM from 'react-dom';
import FinancingHeader from './FinancingHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FinancingHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
