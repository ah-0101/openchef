import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { userSignUp } from '../../store/session';
import { useDispatch } from "react-redux";
import { allChefs, chefSignUp } from "../../store/chefs";

const SignUpForm = ({ }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChef, setIsChef] = useState(false)
  const [foodType, setFoodType] = useState("")
  const [price, setPrice] = useState(10)

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === confirmPassword && !isChef) {
      await dispatch(allChefs())
      await dispatch(userSignUp(first_name, last_name, city, email, password));
      history.push('/')
      // if (!user.errors) {
      //   setAuthenticated(true);
      // }
    } //else if (password === confirmPassword && isChef) {
    //   dispatch(chefSignUp(foodType, price))
    //   dispatch(userSignUp(first_name, last_name, city, email, password));
    //   // here we need to append (connect) the chef to its user
    // return <Redirect to="/" />
    // }
  }

  // if chef button is selected,
  // render additional form fields
  // 1. Add button
  // 2. Create function to handle select isChef
  // 3.

  // if (authenticated) {
  //   return <Redirect to="/" />;
  // }

  let result;
  if (isChef) {
    result = (
      <>
        <div>
          <label>Food Type</label>
          <select
            onChange={e => setFoodType(e.target.id)}
            value={foodType}
          // className="form_text"
          >
            <option hidden disabled>Select one...</option>
            <option value="Italian">Italian</option>
            <option value="American">American</option>
            <option value="Middle Eastern">Middle Eastern</option>
          </select>
        </div>
        <div>
          <label>Price $</label>
          <input
            type="number"
            name="price"
            className="form_text"
            min={10}
            max={300}
            step={5}
            onChange={e => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </>
    )
  }

  return (
    <>
      <h2>Welcome to OpenChef!</h2>
      <form className="login-sign-up">
        <div>
          <input
            type="text"
            name="first_name"
            className="form_text"
            placeholder="First Name"
            onChange={e => setFirstName(e.target.value)}
            value={first_name}
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="last_name"
            className="form_text"
            placeholder="Last Name"
            onChange={e => setLastName(e.target.value)}
            value={last_name}
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            className="form_text"
            onChange= {e => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="city"
            placeholder="City"
            className="form_text"
            onChange={e => setCity(e.target.value)}
            value={city}
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="password"
            className="form_text"
            placeholder="Enter Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          ></input>
        </div>
        <div>
          <input
            type="password"
            name="confirm_password"
            className="form_text"
            placeholder="Re-enter Password"
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required={true}
          ></input>
        </div>
        <div>
          <label>I'm a Chef!</label>
          <input
            type="checkbox"
            name="chef_id"
            className="form_text"
            onClick={e => setIsChef(!isChef)}
            value={isChef}
          />
        </div>
        {result}
        <button className="mainButton" onClick={onSignUp} type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUpForm;
