import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const body = global.document.querySelector('body');

  div.setAttribute('id', 'modal-root');
  body.appendChild(div);

  ReactDOM.render(<Modal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
