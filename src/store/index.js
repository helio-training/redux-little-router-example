import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import reducers from '../reducers'
import { routerForBrowser } from 'redux-little-router'

const routes = {
  '/': {
    title: 'Me Home Page',

    '/about': {
      // title: 'About Us'
    },

    '/contact': {
      // title: 'Contact'
    }
  }
}

const initialState = window.__INITIAL_STATE || {}

const { reducer, middleware, enhancer } = routerForBrowser({
  // The configured routes. Required.
  routes,
})

const store = createStore(
  combineReducers({ router: reducer, reducers }),
  initialState,
  compose(enhancer, applyMiddleware(middleware))
)

export default store
