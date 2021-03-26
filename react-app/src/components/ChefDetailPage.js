import React from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ChefReviews from './ChefReviews';
import ReservationForm from './ReservationForm';
import Favorites from './Favorites'


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
        <img src={`${chef.chef.profile_image}`} />
        <p>{chef.first_name} {chef.last_name} - {chef.city}</p>
        <p>{chef.chef.price}</p>
        <p>{chef.chef.bio}</p>
        <p>{cuisine.name}</p>


        <ChefReviews/>
        <Favorites chef_id={id} />
        <ReservationForm chef_id={id}
                        price={chef.chef.price}
                            />
      </>

  )
  }
