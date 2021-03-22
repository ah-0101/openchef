import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { useDispatch } from "react-redux";
import {restoreUser} from "./store/session.js"

function App() {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);
  useEffect( () => {
   dispatch(restoreUser())
   setLoaded(true)
  }, [dispatch])

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavBar  />
      {loaded && (
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm
            />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm   />
          </Route>
          <ProtectedRoute path="/users" exact={true} >
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true} >
            <User />
          </ProtectedRoute>
          <ProtectedRoute path="/" exact={true} >
            <h1>My Home Page</h1>
          </ProtectedRoute>
        </Switch>
        )}
    </>
    
  );
}

export default App;
