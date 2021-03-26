import React from 'react'
import { useSelector } from 'react-redux'

export default function ChefReviews() {
  const reviews = useSelector(state => state?.chef_reviews);
  const chefReviews = Object.values(reviews)

  return (
    <>
      <p>Reviews</p>
      {chefReviews.map(review => (
        <div key={review.id}>
          <div>{review.rating}</div>
          <div>{review.comment}</div>
        </div>
      ))}
    </>
  )
}