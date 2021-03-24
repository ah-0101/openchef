import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

const ChefReservations = ({ isSelected, setIsSelected }) => {
    const dispatch = useDispatch();

    const handleAccountView = (e) => {
        setIsSelected("ChefReservations")
    }

    let view;
    if (isSelected === "ChefReservations") {
        view = (
            <>
                <p>Testing for Chef Reservations</p>
            </>
        )
    }

    return (
        <>
            <button type="button" onClick={handleAccountView}>Chef Reservations</button>
            {view}
        </>
    )
}

export default ChefReservations;