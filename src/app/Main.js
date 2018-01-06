import React from 'react'
import { Route } from 'react-router-dom'

import Example from './pages/Example'
import Home from './pages/Home'

export default class Main extends React.Component {
  render () {
    return (
      <div className="wrapper">
        <nav>
          <ul>
            <li>
              <a href="/">Home page</a>

              <a href="/example">Example page</a>
            </li>
          </ul>
        </nav>

        <Route exact={true} path="/" component={Home}/>
        <Route path="/example" component={Example}/>
      </div>
    )
  }
}
