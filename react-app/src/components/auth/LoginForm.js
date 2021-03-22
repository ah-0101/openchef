import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import {useDispatch} from "react-redux"

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const onLogin = async (e) => {
    e.preventDefault();
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>');
    await dispatch(login(email, password));
    // if (!user.errors) {
    //   setAuthenticated(true);
    // } else {
    //   setErrors(user.errors);
    // }
    
    return <Redirect to="/peter"/>
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">PETER</button>
      </div>
    </form>
  );
};

export default LoginForm;
