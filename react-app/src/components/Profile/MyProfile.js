import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Account from './Account';
import UserReservations from './UserReservations';
import ChefReservations from './ChefReservations';
import Reviews from './Reviews';
// import { getChefReservation } from '../../store/chef_reservations'


function MyProfile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const history = useHistory();
  const [isSelected, setIsSelected] = useState("Account")

  if (!user.id) {
    history.push('/login')
  }

  let profileNav;

  console.log("USER-----------", user)

  return (
    <div className="outer-profile-container">
      <div>
        <Account isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
      <div>
        <ChefReservations isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
      <div>
        <UserReservations isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
      <div>
        <Reviews isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
    </div>
  )
}

export default MyProfile;
