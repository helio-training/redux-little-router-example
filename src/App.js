import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Fragment as RouteFragment, Link } from 'redux-little-router'

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'

// <Route path="/cart" component={CartPage} />

class App extends Component {
  render() {

    const { router } = this.props
    const { title } = router.result

    return (
      <React.Fragment>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <RouteFragment forRoute="/">
          <div>
            <RouteFragment forRoute="/">
              <HomePage title={ title } />
            </RouteFragment>
            <RouteFragment forRoute="/about">
              <AboutPage />
            </RouteFragment>
            <RouteFragment forRoute="/contact">
              <ContactPage />
            </RouteFragment>
          </div>
        </RouteFragment>
      </React.Fragment>
    )
  }
}

export default connect(state => ({
  router: state.router,
  location: state.router
}))(App)
