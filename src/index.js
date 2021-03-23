import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
>>>>>>> 01220b31a9f49dc346f02226a3be0d429eb3835d
