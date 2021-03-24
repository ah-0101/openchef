import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getChefReservation } from '../store/chef_reservations'

export default function MyProfile(){
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(getChefReservation(user.id))
  })
}