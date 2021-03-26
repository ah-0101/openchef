import React from 'react'
import {useSelector} from 'react-redux'
import './ChefReviews.css'

export default function ChefReviews() {
  const reviews = useSelector(state => state?.chef_reviews);
  // const users = useSelector(state => state.)
  const chefReviews = Object.values(reviews)
  

  return (
    <>
      <h2 className='chef-reviews-title'>What People Are Saying</h2>
      {chefReviews.map(review => (
        <div key={review.id}>
          <div>{review.rating}</div>
          <div>{review.comment}</div>
        </div>
      ))}
    </>
  )
}