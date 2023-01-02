import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';//for bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import store from './components/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);