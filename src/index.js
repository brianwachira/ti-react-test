import React from 'react'
import ReactDOM from 'react-dom'
//redux provider
import { Provider } from 'react-redux'
import store from './State/store'
import './Global.scss'
// import bootstrap
import 'bootstrap/dist/js/bootstrap.js'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
    </Provider>,
  document.getElementById('root')
)

