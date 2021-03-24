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

    useEffect(() => {
        // dispatch(updateUser(user.id))
    }, [dispatch])

    if (isSelected) {

    }

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
        if (user.firstName === firstName &&
            user.lastName === lastName &&
            user.city === city) {
            errors.push("No changes have been made! Please make an update.")
        }
        if (user.firstName === "" ||
            user.lastName === "" ||
            user.city === "") {
            errors.push("Please fill out all fields");
        }
    }

    let view;
    if (isSelected === "Account") {
        view = (
            <>
                <ul>
                    {errors.map((error, idx) => <li className="error-li" key={idx}>{error}</li>)}
                </ul>
                <div>
                    <label>First Name</label>
                    <input
                        name="first_name"
                        value={firstName}
                        onChange={handleFirstName}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        name="last_name"
                        value={lastName}
                        onChange={handleLastName}
                    />
                </div>
                <div>
                    <label>City</label>
                    <input
                        name="city"
                        value={city}
                        onChange={handleCity}
                    />
                </div>
                <button type="button" onClick={handleUpdateAccount}>Update</button>
            </>
        )
    }


    return (
        <>
            <button type="button" onClick={handleAccountView}>Account Info</button>
            {view}
        </>
    )
}

export default Account;