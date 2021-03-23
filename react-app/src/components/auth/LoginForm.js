import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch } from "react-redux"

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    // if (!user.errors) {
    //   setAuthenticated(true);
    // } else {
    //   setErrors(user.errors);
    // }

    history.push('/dashboard')
  };

  const handleDemoUser = e => {
    e.preventDefault()
    dispatch(login(email='demo@aa.io', password='password'))

    history.push('/dashboard')
  }
  const handleDemoChef = e => {
    e.preventDefault()
    dispatch(login(email='demo_chef@aa.io', password='password'))

    history.push('/dashboard')
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
        <button type="submit">Login</button>
        <button type="button" onClick={handleDemoUser}>Demo User</button>
        <button type="button" onClick={handleDemoChef}>Demo Chef</button>
      </div>
    </form>
  );
};

export default LoginForm;
