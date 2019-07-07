import React from 'react';
import ReactDOM from 'react-dom';
import Financing from './Financing';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Financing />, div);
  ReactDOM.unmountComponentAtNode(div);
});
