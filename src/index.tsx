// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import store from '@/reducers/store';
import App from '@/App';
=======
import store from './reducers/store';
// import "./assets/fonts/font.css";
import App from './App';
>>>>>>> feature-main

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
