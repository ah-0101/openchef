import React from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ChefReviews from './ChefReviews';
import ReservationForm from './ReservationForm';
import './ChefDetailsPage.css'


export default function ChefDetailPage({id}) {
  const user = useSelector(state => state.session.user)
  const chef = useSelector(state => state?.chefs[id])
  const cuisine = useSelector(state => state?.food_types[chef.chef.food_type_id])
  const reviews = useSelector(state => state?.chef_reviews);

  const history = useHistory()
  const dispatch = useDispatch()
  

  return (
    reviews &&
      <>
        
        <div className='all-details'>
          <div className='profile-image'>
            <img src={`${chef.chef.profile_image}`} />
          </div>
          <div className='detail-rev-section-r'>
            <div className='details-only-r'>
              <div className='navigation-chef-div-r'>
                <ul className='navigation-bar-chef-details'>
                  <li className='list-elements-chef-detail'>Overview</li>
                  <li className='list-elements-chef-detail'>Reviews</li>
                </ul>
              </div>
              <div className='information-r'>
                <h1 className='chef-name-title-r'>Chef {chef.first_name} {chef.last_name}</h1>
                <div className='chef-short-info-r'>
                  <p className='chef-city-r'>City: {chef.city}</p>
                  <p className='chef-price-r'>Price: {chef.chef.price} per hour</p>
                  <p className='chef-cuisine-r'>Cuisine: {cuisine.name}</p>
                </div>
              </div>
              <div className='chef-bio-r'>
                <h2 className='chef-bio-title'>Chef Biography</h2>
                <p className='chef-bio-text-r'>{chef.chef.bio}</p>
              </div>
            </div>
            <div className='chef-reviews-r'>
            <ChefReviews/>
            </div>
          </div>
          
          <div className='reservation-r'>
            <ReservationForm chef_id={id}
                            price={chef.chef.price}
                                />
          </div>
        </div>
      </>
  
  )
  }
