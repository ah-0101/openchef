import React from 'react';

export default function ChefReservationBtn({ setIsSelected }) {

    const handleAccountView = (e) => {
        e.preventDefault();
        setIsSelected("ChefReservations")
    }

    return (
        <div className="res-btn-p">
            <button className="profile-nav-btn-p" type="button" onClick={handleAccountView}>Chef's Reservations</button>
        </div>
    )
}