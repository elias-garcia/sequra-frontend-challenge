import React from 'react';
import ReactDOM from 'react-dom';
import FinancingSelect from './FinancingSelect';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<FinancingSelect />, div);
  ReactDOM.unmountComponentAtNode(div);
});
