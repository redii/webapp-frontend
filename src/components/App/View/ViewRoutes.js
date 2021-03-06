import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import viewsArray from './ViewsArray.js'

class ViewRoutes extends Component {
  render() {
    return viewsArray.map((route) => {
      if (route.subs.length > 0) {
        return route.subs.map((subroute) => {
          return (
            <Route
              key={subroute.key}
              path={subroute.path}
              exact={subroute.exact}
              component={() => <subroute.component key={subroute.key} path={subroute.path} name={subroute.name} />}
            />
          )
        })
      } else {
        return (
          <Route
            key={route.key}
            path={route.path}
            exact={route.exact}
            component={() => <route.component key={route.key} path={route.path} name={route.name} />}
          />
        )
      }
    })
  }
}

export default ViewRoutes
