import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux'
import "./NavBar.css"

const NavBar = ({ setAuthenticated }) => {
  const user = useSelector(state => state.session.user)

  return (
    <nav className="nav-bar">
      <ul className="nav-stuff">
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        {user &&
          <li>
            <NavLink to="/profile" exact={true} activeClassName="active">
              My Profile
          </NavLink>
          </li>
        }
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
