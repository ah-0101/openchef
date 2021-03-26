import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


function UserReservations({ isSelected, setIsSelected, chefReservations, setChefReservations }) {
    const user = useSelector(state => state.session.user);
    // const reviews = useSelector(state => state.)
    const dispatch = useDispatch();

    // set a state for either chef or user reservations. 

    // useEffect(() => {
    //   dispatch(getChefReservation(user.chef_id))
    // })

    const handleAccountView = (e) => {
        e.preventDefault();
        setIsSelected("Reservations")
        // setChefReservations(false)
        // if (isSelected === "Reservations") {
        // }
    }

    let view;
    if (isSelected === "Reservations") {
        view = (
            <>
                <p>Testing for USER Reservations</p>
            </>
        )
    }

    return (
        <>
            <button type="button" onClick={handleAccountView}>Reservations</button>
            <div>
                {view}
            </div>
        </>
    )
}

export default UserReservations;