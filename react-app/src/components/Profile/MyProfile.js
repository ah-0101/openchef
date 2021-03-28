import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Account from './Account';
import ChefAccount from './ChefAccount';
import Reservations from './Reservations';
import ChefReservations from './ChefReservations';
import Reviews from './Reviews';
import ChefReviews from './ChefReviews';
import ReservationForm from '../Reservations/ReservationForm';
import './profile.css';
import UpdateReservation from '../Reservations/UpdateReservationContainer';
import { allUserReservations } from '../../store/reservations';
import ReservationBtn from './ResComponents/ReservBtn';

function MyProfile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [chefReservations, setChefReservations] = useState(false)
  const history = useHistory();
  const [isSelected, setIsSelected] = useState("Reservations")

  if (user === null) {
    history.push('/login')
  }

  useEffect(async () => {
    await dispatch(allUserReservations(user.id))
  }, [])

  // useEffect(() => {
  //   if (user.chef_id) {
  //     setChefReservations(true)
  //   } else {
  //     setChefReservations(false)
  //   }
  // }, [chefReservations])

  const chefComponents = (
    <>
      <div>
        <ChefReservations isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
      <div>
        <ChefReviews isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
    </>
  )

  return (
    user &&
    <div className="outer-profile-container">
      <ReservationBtn setIsSelected={setIsSelected} />
      <div>
        <Reservations chefReservations={chefReservations} setChefReservations={setChefReservations} isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
      <div className="account">
        <Account isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
      {/* <div>
        <ChefReservations isSelected={isSelected} setIsSelected={setIsSelected} />
      </div> */}
      {/* <div>
        <UpdateReservation chefReservations={chefReservations} setChefReservations={setChefReservations} isSelected={isSelected} setIsSelected={setIsSelected} />
      </div> */}
      {/* <div>
        <ChefReviews isSelected={isSelected} setIsSelected={setIsSelected} />
      </div> */}
      {user.chef_id ? chefComponents : ""}
      <div>
        <Reviews isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
    </div>
  )
}

export default MyProfile;
