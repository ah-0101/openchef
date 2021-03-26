import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Account from './Account';
import ChefAccount from './ChefAccount';
import Reservations from './Reservations';
import ChefReservations from './ChefReservations';
import Reviews from './Reviews';
import './profile.css';
// import { getChefReservation } from '../../store/chef_reservations'


function MyProfile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [chefReservations, setChefReservations] = useState(false)
  const history = useHistory();
  const [isSelected, setIsSelected] = useState("Account")

  if (user === null) {
    history.push('/login')
  }

  useEffect(() => {
    if (user.chef_id) {
      setChefReservations(true)
    } else {
      setChefReservations(false)
    }
  }, [chefReservations])

  let profileNav;

  // console.log("USER-----------", user)

  return (
    user &&
    <div className="outer-profile-container">
      <div className="account">
        <Account isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
      {/* <div>
        <ChefReservations isSelected={isSelected} setIsSelected={setIsSelected} />
      </div> */}
      <div>
        <Reservations chefReservations={chefReservations} setChefReservations={setChefReservations} isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
      <div>
        <Reviews isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
    </div>
  )
}

export default MyProfile;
