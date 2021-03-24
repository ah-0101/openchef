import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


const Account = ({ isSelected, setIsSelected }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [city, setCity] = useState(user.city);

    useEffect(() => {
        // dispatch()
        setIsSelected(true)
    }, [dispatch])

    if (isSelected) {

    }

    const handleAccountView = (e) => {
        setIsSelected("Account")
    }

    const handleFirstName = (e) => {
        //dispatch()
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleCity = (e) => {
        setCity(e.target.value)
    }

    let view;
    if (isSelected === "Account") {
        view = (
            <>
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
            </>
        )
    }


    return (
        <>
            <button type="button" onClick={handleAccountView}>Account</button>
            {view}
        </>
    )
}

export default Account;