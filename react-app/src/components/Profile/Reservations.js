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

    console.log("CHEFRES---", chefReservations)

    let view;
    const handleAccountView = (e) => {
        e.preventDefault();
        setIsSelected("Reservations")
        // setChefReservations(false)
        // if (isSelected === "Reservations") {
        view = (
            <>
                <p>Testing for USER Reservations</p>
            </>
        )
        // }
    }

    let chefView;
    const handleChefView = (e) => {
        e.preventDefault();
        console.log("TEST")
        setIsSelected("Reservations")
        // setChefReservations(true)
        chefView = (
            <>
                <p>Testing for CHEF Reservations</p>
            </>
        )
    }

    // let view;
    // if (isSelected === "Reservations" && !chefReservations) {
    //     view = (
    //         <>
    //             <p>Testing for USER Reservations</p>
    //         </>
    //     )
    // } else if (isSelected === "Reservations" && chefReservations) {
    //     view = (
    //         <>
    //             <p>Testing for CHEF Reservations</p>
    //         </>
    //     )
    // }

    let chefButton;
    if (chefReservations) {
        chefButton = (
            <>
                <button type="button" onClick={handleChefView}>Chef Reservations</button>
            </>
        )
    }

    return (
        <>
            <button type="button" onClick={handleAccountView}>Reservations</button>
            <div>
                {view}
            </div>
            <div>
                {chefView}
                {chefButton}
            </div>
        </>
    )
}

export default UserReservations;