import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import MainLayout from './components/layouts/main-layout';

const el = document.createElement('div');
document.body.appendChild(el);
ReactDOM.render(
  <Provider store={store}><MainLayout /></Provider>,
  el
);
