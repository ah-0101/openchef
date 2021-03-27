import React from 'react'
import {useSelector} from 'react-redux'
import './ChefDetailsReviews.css'

export default function ChefReviews() {
  const reviews = useSelector(state => state?.chef_reviews);
  // const users = useSelector(state => state.)
  const chefReviews = Object.values(reviews)
  

  return (
    <div className='all-reviews'>
      <h3 className='chef-reviews-title-r'>What People Are Saying</h3>
      {chefReviews.map(review => (
        <div key={review.id} className='review-container-r'>
          <div className='review-profile-holder'> </div>
          <div className='review-rating-r'>{review.rating}</div>
          <div className='review-comment-r'>{review.comment}</div>
        </div>
      ))}
    </div>
  )
}