import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import HomePage from "./components/HomePage";
import { useDispatch } from "react-redux";
import { restoreUser } from "./store/session";

function App() {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(async () => {
    await dispatch(restoreUser())
    setLoaded(true)
  }, [dispatch])

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavBar />
      {loaded && (
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm
            />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/users" exact={true} >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true} >
            <User />
          </ProtectedRoute>
          <ProtectedRoute path="/" exact={true} >
            <HomePage />
          </ProtectedRoute>
        </Switch>
      )}
    </>

  );
}

export default App;
