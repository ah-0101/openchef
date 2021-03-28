import React from 'react';

export default function UserReviewsBtn({ setIsSelected }) {

    const handleAccountView = (e) => {
        e.preventDefault();
        setIsSelected("Reviews")
    }

    return (
        <div className="res-btn-p">
            <button className="profile-nav-btn-p" type="button" onClick={handleAccountView}>Reviews</button>
        </div>
    )
}