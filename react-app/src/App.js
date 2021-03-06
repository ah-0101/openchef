import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useParams } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import UsersList from "./components/UsersList";
import User from "./components/User";
import HomePage from "./components/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { restoreUser } from "./store/session";
import ChefDetailPage from "./components/ChefDetailPage";
import MyProfile from "./components/Profile/MyProfile";

function App() {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);
  const user = useSelector((state) => state.session.user)
  const [id, setId] = useState(0)

  useEffect(async () => {
    await dispatch(restoreUser())
    setLoaded(true)
  }, [dispatch])

  if (!loaded) {
    return null;
  }

  if (!user) {
    //THIS IS CAUSING ISSUES
    // return <Redirect to='/login' />
  }

  return (
    <>
      <NavBar /> {
        loaded && (
          <Switch >
            <Route path="/login" exact={true} >
              <LoginForm />
            </Route>
            <Route path="/sign-up"
              exact={true} >
              <SignUpForm />
            </Route>
            <Route path="/" exact={true} >
              <HomePage />
            </Route>
            <Route path="/chef" exact={true}>
              <ChefDetailPage />
            </Route>
            <Route path="/profile" exact={true}>
              <MyProfile />
            </Route>
          </Switch>
        )
      }
    </>
  );
}

export default App;