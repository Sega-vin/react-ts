import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'
import config from "./config";
import { Provider } from 'react-redux';
import {store} from './store'

// axios.defaults.baseURL = config.baseUrlApi;
// axios.defaults.headers.common['Content-Type'] = "application/json";
// const token = localStorage.getItem('token');
// if (token) {
//   axios.defaults.headers.common['Authorization'] = "Bearer " + token;
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

