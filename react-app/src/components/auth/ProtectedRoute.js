import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// feed if there is a user or not here instead of authenticated
const ProtectedRoute = props => {
  return (
    <Route {...props}>
      {(props.authenticated)? props.children  : <Redirect to="/login" />}
    </Route>
  )
};


export default ProtectedRoute;
