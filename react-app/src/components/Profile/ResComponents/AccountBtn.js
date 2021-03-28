import React from 'react';

export default function AccountBtn({ setIsSelected }) {

    const handleAccountView = (e) => {
        e.preventDefault();
        setIsSelected("Account")
    }

    return (
        <div className="res-btn-p">
            <button className="profile-nav-btn-p" type="button" onClick={handleAccountView}>Account Info</button>
        </div>
    )
}