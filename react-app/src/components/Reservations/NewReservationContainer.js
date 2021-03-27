import React from 'react';
import ReservationForm from './ReservationForm';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { postReservation } from '../../store/reservations';

export default function NewReservation({ chef_id, price }) {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory()




    return (
        <>
            <ReservationForm title="Make a Reservation" callbackReservation={postReservation} buttonText="Complete your Reservation" />
        </>
    )
}