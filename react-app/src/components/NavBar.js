import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector, useDispatch } from 'react-redux'
import { getChefReviews } from '../store/chef_reviews';
import { getAllReviews } from '../store/reviews';
import { getChefReservations } from '../store/chef_reservations';
import { allUserReservations } from '../store/reservations';
import "./NavBar.css";

const NavBar = ({ setAuthenticated }) => {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const history = useHistory();


  const getDetails = async (e) => {
    await dispatch(allUserReservations(user.id))
    await dispatch(getAllReviews(user.id))
    if (user.chef_id) {
      await dispatch(getChefReviews(user.id))
      await dispatch(getChefReservations(user.id))
    }

    history.push('/profile')
  }
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
            <a className="navbar-profile" onClick={getDetails} className="active">
              My Profile
          </a>
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
