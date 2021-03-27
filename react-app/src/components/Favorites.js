import React from 'react';
import { useEffect, useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {createFavorites} from '../store/favorites'
import { getFavorite } from '../store/favorites'
import { allChefs } from '../store/chefs'

export default function Favorites ({chef_id}){
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const favorites = useSelector(state => state.favorites)
  const [isSelected , setIsSelected] = useState(false)
  const user_id = user.id


  const  handleFavorite = async (e) => {
    setIsSelected(!isSelected)
    if (!isSelected){
      const data = {
        chef_id: chef_id,
        user_id: user_id
    }
      await dispatch(createFavorites(data))

    }else {

    }
 }

return (
  <>
  <button onClick={handleFavorite}>Favorites❤❤</button>
  </>
)
}
