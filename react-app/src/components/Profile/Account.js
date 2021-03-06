import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../ChefReviews.css';
import './Account.css';
import { updateUser } from '../../store/session';
import ChefAccount from './ChefAccount';


const Account = ({ isSelected, setIsSelected }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [first_name, setFirstName] = useState(user.first_name);
    const [last_name, setLastName] = useState(user.last_name);
    const [city, setCity] = useState(user.city);
    // const [email, setEmail] = useState(user.email);
    const [errors, setErrors] = useState([]);
    const id = user.id;

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleCity = (e) => {
        setCity(e.target.value)
    }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    const handleUpdateAccount = async (e) => {
        e.preventDefault();

        const error = []
        if (user.first_name === first_name &&
            user.last_name === last_name &&
            user.city === city) {
            error.push("No changes have been made! Please make an update.")
        }
        if (first_name === "" ||
            last_name === "" ||
            city === "" /*||
        email === ""*/) {
            error.push("Please fill out all fields");
        }
        setErrors(error)

        if (!error.length) {
            const data = {
                id: id,
                first_name: first_name,
                last_name: last_name,
                city: city,
            }
            await dispatch(updateUser(data))
            alert("Your profile was updated successfully")
        }
    }

    let view;
    if (isSelected === "Account" && user.chef_id === null) {
        view = (
            <form className="inner-account-info-container">
                <ul>
                    {errors.map((error, idx) => <li className="error-li" key={idx}>{error}</li>)}
                </ul>
                <div className="input-wrapper">
                    <div className="profile-label">
                        <label>First Name</label>
                    </div>
                    <input
                        className="profile-input"
                        name="first_name"
                        value={first_name}
                        onChange={handleFirstName}
                    />
                </div>
                <div className="input-wrapper">
                    <label className="profile-label">Last Name</label>
                    <input
                        className="profile-input"
                        name="last_name"
                        value={last_name}
                        onChange={handleLastName}
                    />
                </div>
                <div className="input-wrapper">
                    <label className="profile-label">City</label>
                    <input
                        className="profile-input"
                        name="city"
                        value={city}
                        onChange={handleCity}
                    />
                </div>
                {/* <div className="input-wrapper">
                    <div className="profile-label">
                        <label>Email</label>
                    </div>
                    <div>
                        <div className="profile-input">
                            <input
                                name="email"
                                value={email}
                                onChange={handleEmail}
                            />
                        </div>
                    </div>
                </div> */}
                <button className="btn-style-profile" type="button" onClick={handleUpdateAccount}>Update</button>
            </form>
        )
    } else if (isSelected === "Account" && user.chef_id) {
        view = (
            <form className="inner-account-info-container">
                <ul>
                    {errors.map((error, idx) => <li className="error-li" key={idx}>{error}</li>)}
                </ul>
                <div className="input-wrapper">
                    <label className="profile-label">First Name</label>
                    <input
                        className="profile-input"
                        name="first_name"
                        value={first_name}
                        onChange={handleFirstName}
                    />
                </div>
                <div className="input-wrapper">
                    <label className="profile-label">Last Name</label>
                    <input
                        className="profile-input"
                        name="last_name"
                        value={last_name}
                        onChange={handleLastName}
                    />
                </div>
                <div className="input-wrapper">
                    <label className="profile-label">City</label>
                    <input
                        className="profile-input"
                        name="city"
                        value={city}
                        onChange={handleCity}
                    />
                </div>
                {/* <div className="input-wrapper">
                    <div className="profile-label">
                        <label>Email</label>
                    </div>
                    <div>
                        <div className="profile-input">
                            <input
                                name="email"
                                value={email}
                                onChange={handleEmail}
                            />
                        </div>
                    </div>
                </div> */}
                <ChefAccount first_name={first_name} last_name={last_name} city={city} />
            </form>
        )
    }


    return (
        <div className="account">
            {view}
        </div>
    )
}

export default Account;