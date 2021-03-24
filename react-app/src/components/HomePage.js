import React from 'react';
import { useEffect, useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from './SearchBar'
import { allChefs } from '../store/chefs';
import { getFoodTypes } from '../store/food_types';
import { getAllReviews } from '../store/reviews';

export default function HomePage() {
    const user = useSelector(state => state.session.user)
    const chefs = useSelector(state => state.chefs)
    const [chefId, setChefId] = useState(0)
    
    const history = useHistory()
    const dispatch = useDispatch()
    
    // testing use effect for the chef detail page
    useEffect(() => {
        dispatch(getFoodTypes())
        dispatch(getAllReviews())
    
    }, [])
    
    const chefDetails = async (e) => {
        let id = 2
        await dispatch(allChefs());
        // return <Redirect to={`/chefs/${id}`} />
        history.push(`/chefs/${id}`)
    }

    const chefArr = Object.values(chefs)
    
    if(!user){
        history.push('/login')
    }

    return (
        <>
            <h1>here is the chefs</h1>
            {chefArr[0]?.email
                // <img src="image" alt=""/>
            }
            <SearchBar />
            <div id={chefId} onClick={chefDetails}>Chef number 2</div>
            
        </>

    )
}

