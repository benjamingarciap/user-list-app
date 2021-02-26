import React from 'react'
import PropTypes from 'prop-types'

import { routes } from './routes/index'
import { Route, Switch, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route { ...rest } render={props => (localStorage.getItem('loginToken') !== null
    ? (<Component { ...props } />)
    : (<Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}
      />
      )
  )}
  />
)

function AppRoutes () {
  return (
    <Switch>
      {
        routes.map((route, key) => {
          if (!route.private) {
            return <Route
                    key={key}
                    exact
                    path={route.url}
                    component={route.component}
                   />
          } else {
            return <PrivateRoute
                    key={key}
                    path={route.url}
                    component={route.component}
                   />
          }
        })
      }
    </Switch>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any
}

export default AppRoutes
