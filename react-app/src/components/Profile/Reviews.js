import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


function Reviews({ isSelected, setIsSelected }) {
    const dispatch = useDispatch();

    const handleAccountView = (e) => {
        setIsSelected("Reviews")
    }

    let view;
    if (isSelected === "Reviews") {
        view = (
            <>
                <p>Testing for Chef Reservations</p>
            </>
        )
    }

    return (
        <>
            <button type="button" onClick={handleAccountView}>Reviews</button>
            {view}
        </>
    )
}

export default Reviews;