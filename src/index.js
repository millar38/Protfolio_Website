import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import AboutMe from './views/about-me'
import Portfolio from './views/portfolio'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={AboutMe} exact path="/about-me" />
        <Route component={Portfolio} exact path="/portfolio" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
