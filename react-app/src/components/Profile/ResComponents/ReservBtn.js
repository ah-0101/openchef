import React from 'react';

export default function ReservationBtn({ setIsSelected }) {

    const handleAccountView = (e) => {
        e.preventDefault();
        setIsSelected("Reservations")
    }

    return (
        <div className="res-btn-p">
            <button className="profile-nav-btn-p" type="button" onClick={handleAccountView}>Reservations</button>
        </div>
    )
}