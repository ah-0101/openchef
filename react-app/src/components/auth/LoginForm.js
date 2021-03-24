import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch } from "react-redux"
import { allChefs } from "../../store/chefs";
import "./LoginForm.css"

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogin = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
    await dispatch(allChefs())
    // if (!user.errors) {
    //   setAuthenticated(true);
    // } else {
    //   setErrors(user.errors);
    // }

    history.push('/')
  };

  const handleDemoUser = async (e) => {
    e.preventDefault()

    await dispatch(login(email ='demo@aa.io', password = 'password'))

    await dispatch(allChefs())


    history.push('/')
  }
  const handleDemoChef = async (e) => {
    e.preventDefault()

    await dispatch(login(email = 'demo_chef@aa.io', password = 'password'))

    await dispatch(allChefs())

    history.push('/')
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  // if (authenticated) {
  //   return <Redirect to="/" />;
  // }

  return (
    <>
    <h2>log-in</h2>
    <form className="login-sign-up" onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        {/* <label htmlFor="email">Email</label> */}
        <input
          name="email"
          type="text"
          className="form_text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        {/* <label htmlFor="password">Password</label> */}
        <input
          name="password"
          type="password"
          className="form_text"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit" className="mainButton" >Log In</button>
        <button type="button" className="mainButton"  onClick={handleDemoUser}>Demo User</button>
        <button type="button" className="mainButton" onClick={handleDemoChef}>Demo Chef</button>
      </div>
    </form>
    </>
  );
};

export default LoginForm;
