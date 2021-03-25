import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
// import { updateUser } from '../../store/session';


const Account = ({ isSelected, setIsSelected }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [city, setCity] = useState(user.city);
    const [errors, setErrors] = useState([]);

    // useEffect(() => {
    //     // dispatch(updateUser(user.id))
    // }, [dispatch])

    // if (isSelected) {

    // }

    const handleAccountView = (e) => {
        setIsSelected("Account")
    }

    const handleFirstName = (e) => {
        // dispatch(updateUser())
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleCity = (e) => {
        setCity(e.target.value)
    }

    const handleUpdateAccount = (e) => {
        e.preventDefault();

        const error = []
        if (user.firstName === firstName &&
            user.lastName === lastName &&
            user.city === city) {
            error.push("No changes have been made! Please make an update.")
        }
        if (user.firstName === "" ||
            user.lastName === "" ||
            user.city === "") {
            error.push("Please fill out all fields");
        }
        setErrors(error)
    }

    let view;
    if (isSelected === "Account") {
        view = (
            <div className="inner-account-info-container">
                <ul>
                    {errors.map((error, idx) => <li className="error-li" key={idx}>{error}</li>)}
                </ul>
                <div className="input-wrapper">
                    <div className="profile-label">
                        <label>First Name</label>
                    </div>
                    <div className="profile-input">
                        <input
                            name="first_name"
                            value={firstName}
                            onChange={handleFirstName}
                        />
                    </div>
                </div>
                <div className="input-wrapper">
                    <div className="profile-label">
                        <label>Last Name</label>
                    </div>
                    <div className="profile-input">
                        <input
                            name="last_name"
                            value={lastName}
                            onChange={handleLastName}
                        />
                    </div>
                </div>
                <div className="input-wrapper">
                    <div className="profile-label">
                        <label>City</label>
                    </div>
                    <div>
                        <div className="profile-input">
                            <input
                                name="city"
                                value={city}
                                onChange={handleCity}
                            />
                        </div>
                    </div>
                </div>
                <button type="button" onClick={handleUpdateAccount}>Update</button>
            </div>
        )
    }


    return (
        <div className="outer-account-info-container">
            <button className="account-btn" type="button" onClick={handleAccountView}>Account Info</button>
            {view}
        </div>
    )
}

export default Account;