import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import ChefReservations from './ChefReservations';


function ChefReviews({ isSelected, setIsSelected }) {
    const reviews = useSelector(state => state?.chef_reviews)

    const chefReviews = Object.values(reviews)

    const handleChefReviewsView = (e) => {
        setIsSelected("ChefReviews")
    }

    let view;
    if (isSelected === "ChefReviews") {
        view = (
            <>
                <p>Testing for CHEF Reviews</p>
                {chefReviews.map(review => (
                    <div key={review.id}>
                        <div>{review.rating}</div>
                        <div>{review.comment}</div>
                    </div>
                ))}
            </>
        )
    }

    return (
        <div className="account">
            {view}
        </div>
    )
}


export default ChefReviews;