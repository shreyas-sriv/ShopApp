import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-credit-cards/es/styles-compiled.css';
import ShopApp from './ShopApp';
import {Provider} from 'react-redux'
import { store } from './state/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ShopApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);