import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import Store from './store'
import { initializeCurrentLocation } from 'redux-little-router'

const initialLocation = Store.getState().router
// console.log(initialLocation)

if (initialLocation) {
  const location = initializeCurrentLocation(initialLocation)
  Store.dispatch(location)
}

const Wrapped = (
  <Provider store={ Store }>
    <App />
  </Provider>
)

ReactDOM.render(Wrapped, document.getElementById('root'))
registerServiceWorker()
