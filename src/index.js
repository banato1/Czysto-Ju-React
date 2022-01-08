import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Sprztanieporemoncie from './views/sprztanieporemoncie'
import LandingPage from './views/landing-page'
import Kontakt from './views/kontakt'
import Cennik from './views/cennik'
import Onas from './views/onas'
import Sprztaniemieszkania from './views/sprztaniemieszkania'
import Blog from './views/blog'
import Sprztaniebiura from './views/sprztaniebiura'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          exact
          component={Sprztanieporemoncie}
          path="/sprztanieporemoncie"
        />
        <Route exact component={LandingPage} path="/" />
        <Route exact component={Kontakt} path="/kontakt" />
        <Route exact component={Cennik} path="/cennik" />
        <Route exact component={Onas} path="/onas" />
        <Route
          exact
          component={Sprztaniemieszkania}
          path="/sprztaniemieszkania"
        />
        <Route exact component={Blog} path="/blog" />
        <Route exact component={Sprztaniebiura} path="/sprztaniebiura" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
