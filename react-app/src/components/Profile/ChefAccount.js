import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './profile.css';
import { updateUser } from '../../store/session';
import { getOneChef } from '../../store/chefs';


function ChefAccount() {
    const user = useSelector(state => state.session.user);
    const chefs = useSelector(state => state.chefs)
    const foodType = useSelector(state => state.food_types)
    // const [food_type, setFoodType] = useState(chef.food_types);
    const dispatch = useDispatch();
    const [price, setPrice] = useState()
    const id = user.chef_id


    useEffect(async () => {
        await dispatch(getOneChef(id))
    }, [dispatch])

    return (
        <>
            <h1>CHEF ACCOUNT</h1>
        </>
    )
}


export default ChefAccount;