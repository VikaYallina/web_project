import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import { history } from './history';
import axios from 'axios';

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

const responseSuccessHandler = response => {
  return response;
};

const responseErrorHandler = (error,history) => {
  const err = error.response.status;
  if ( err === 401 || err === 403 || err === 400) {
    // Add your logic to
    //  1. Redirect user to LOGIN
    //  2. Reset authentication from localstorage/sessionstorage
    history.push('/login');
    window.location.reload();
    localStorage.removeItem('user');
  }
  if(err === 500){
    history.push('/404');
    window.location.reload();
  }

  return Promise.reject(error);
}

axios.interceptors.response.use(
  response => responseSuccessHandler(response),
  error => responseErrorHandler(error,history)
);