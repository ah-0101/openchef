import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { userSignUp, chefSignUp } from '../../store/session';
import { useDispatch } from "react-redux"

const SignUpForm = ({ }) => {
  const dispatch = useDispatch()
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChef, setIsChef] = useState(false)
  const [foodType, setFoodType] = useState("")
  const [price, setPrice] = useState(0)

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === confirmPassword && !isChef) {
      dispatch(userSignUp(first_name, last_name, city, email, password));
      // if (!user.errors) {
      //   setAuthenticated(true);
      // }
    }
    // else if (password === confirmPassword && isChef) {
      // dispatch(chefSignUp(foodType, price))
      // dispatch(userSignUp(first_name, last_name, city, email, password));
      // here we need to append (connect) the chef to its user
    // }
  }

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updateCity = (e) => {
    setCity(e.target.value)
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const updateIsChef = (e) => {
    setIsChef(!isChef)
  }

  const updateFoodType = (e) => {
    console.log("BEFORE--->>>", foodType)
    setFoodType(e.target.id)
    console.log("AFTER--->>>", foodType)
  }

  const updatePrice = (e) => {
    setPrice(e.target.value)
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
            onChange={updateFoodType}
            value={foodType}
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
            onChange={updatePrice}
            value={price}
          />
        </div>
      </>
    )
  }

  return (
    <form>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          onChange={updateFirstName}
          value={first_name}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          onChange={updateLastName}
          value={last_name}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          onChange={updateCity}
          value={city}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm_password"
          onChange={updateConfirmPassword}
          value={confirmPassword}
          required={true}
        ></input>
      </div>
      <div>
        <label>I'm a Chef!</label>
        <input
          type="checkbox"
          name="chef_id"
          onClick={updateIsChef}
          value={isChef}
        />
      </div>
      {result}
      <button onSubmit={onSignUp} type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
