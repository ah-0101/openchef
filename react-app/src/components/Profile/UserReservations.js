import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


function UserReservations({ isSelected, setIsSelected }) {
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(getChefReservation(user.chef_id))
    // })

    const handleAccountView = (e) => {
        setIsSelected("UserReservations")
    }

    let view;
    if (isSelected === "UserReservations") {
        view = (
            <>
                <p>Testing for Chef Reservations</p>
            </>
        )
    }

    return (
        <>
            <button type="button" onClick={handleAccountView}>Reservations</button>
            {view}
        </>
    )
}

export default UserReservations;