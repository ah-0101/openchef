import React from 'react';
import ReservationForm from './ReservationForm';
import { useSelector } from 'react-redux'
import { editReservation } from '../../store/reservations';

export default function UpdateReservation({ isSelected, setIsSelected }) {
    const reservations = useSelector(state => state.reservations)

    return (
        <>
            <ReservationForm title="Update Reservation" callbackReservation={editReservation} formData={reservations} buttonText="Update your Reservation" />
        </>
    )
}