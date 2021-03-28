import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


function Reviews({ isSelected, setIsSelected }) {
    const dispatch = useDispatch();

    let view;
    if (isSelected === "Reviews") {
        view = (
            <>
                <p>Testing for USER Reviews</p>
            </>
        )
    }

    return (
        <>
            {view}
        </>
    )
}

export default Reviews;