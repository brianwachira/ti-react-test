import React from 'react';
import ReactDOM from 'react-dom';
//redux provider
import { Provider } from 'react-redux'
import store from './State/store'
import './Global.scss';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

