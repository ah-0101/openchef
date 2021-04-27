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
import '../ChefReviews.css'
import UpdateReservation from '../Reservations/UpdateReservationContainer';
import { allUserReservations } from '../../store/reservations';
import ReservationBtn from './ResComponents/ReservBtn';
import AccountBtn from './ResComponents/AccountBtn';
// import ChefReservationBtn from './ResComponents/ChefReservBtn';
// import ChefReviewsBtn from './ResComponents/ChefReviewsBtn';
// import UserReviewsBtn from './ResComponents/UserReviewsBtn';

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
    <div className="profile-btn-details-container-p" >
      <div className="outer-profile-container">
        <ReservationBtn setIsSelected={setIsSelected} />
        <AccountBtn setIsSelected={setIsSelected} />
        {/* <ChefReservationBtn setIsSelected={setIsSelected} />
        <ChefReviewsBtn setIsSelected={setIsSelected} />
        <UserReviewsBtn setIsSelected={setIsSelected} /> */}
      </div>
      <div className="reservation-component-p">
        <Reservations chefReservations={chefReservations} setChefReservations={setChefReservations} isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
      <div>
        <Account isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
      {user.chef_id ? chefComponents : ""}
      {/* <div>
        <Reviews isSelected={isSelected} setIsSelected={setIsSelected} />
      </div> */}
      {/* <div>
        <ChefReservations isSelected={isSelected} setIsSelected={setIsSelected} />
      </div> */}
      {/* <div>
        <UpdateReservation chefReservations={chefReservations} setChefReservations={setChefReservations} isSelected={isSelected} setIsSelected={setIsSelected} />
      </div> */}
      {/* <div>
        <ChefReviews isSelected={isSelected} setIsSelected={setIsSelected} />
      </div> */}
    </div>
  )
}

export default MyProfile;
