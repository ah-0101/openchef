import React from 'react';
import ReservationForm from './ReservationForm';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

export default function UpdateReservation({ isSelected, setIsSelected }) {
    const reservations = useSelector(state => state.reservations)

    console.log("RESERVATIONS", reservations)

    // const updateReservation = (e) => {
    //     e.preventDefault()
    // }

    return (
        <>
            <ReservationForm title="Update Reservation" callbackReservation={putReservation} formData={formData} buttonText="Update your Reservation" submitForm={updateReservation} />
        </>
    )
}