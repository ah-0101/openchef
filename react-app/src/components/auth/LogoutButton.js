import React from "react";
import {useDispatch} from "react-redux"
import { logout } from "../../store/session";
import { Redirect } from 'react-router-dom'
import "./LogoutButton.css"

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {


    await dispatch(logout())
    return <Redirect to="/login"/>
  };

  return <button className="logout_Button" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
