import React from 'react';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { allChefs } from '../store/chefs';

export default function ChefDetailPage({id}) {
  const user = useSelector(state => state.session.user)
  const chef = useSelector(state => state?.chefs[2])
  const cuisine = useSelector(state => state?.food_types[2])
  const reviews = useSelector(state => state?.reviews)

  const history = useHistory()
  const dispatch = useDispatch()


  return (
    chef &&
      <>
        <img src={`${chef.chef.profile_image}`} />
        <p>{chef.first_name} {chef.last_name} - {chef.city}</p>
        <p>{chef.chef.price}</p>
        <p>{chef.chef.bio}</p>
        <p>{cuisine.name}</p>

      </>
  
  )
  }
