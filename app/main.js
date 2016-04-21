import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from './components/layouts/main-layout';

let el = document.createElement('div');
document.body.appendChild(el);
ReactDOM.render(<MainLayout />, el);
