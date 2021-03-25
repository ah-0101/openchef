import React from 'react';
import { useEffect, useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from './SearchBar'
import { allChefs } from '../store/chefs';
import { getFoodTypes } from '../store/food_types';
import { getAllReviews } from '../store/reviews';
import ChefDetailPage from './ChefDetailPage';

export default function HomePage() {
    const user = useSelector(state => state.session.user)
    const chefs = useSelector(state => state.chefs)
    const [chefId, setChefId] = useState()
    
    const history = useHistory()
    const dispatch = useDispatch()
    
    // testing use effect for the chef detail page
    useEffect(() => {
        dispatch(getFoodTypes())
        dispatch(getAllReviews())
        dispatch(allChefs())
    
    }, [])
    
    const chefDetails = async (e) => {
        let id = e.target.id
        await dispatch(allChefs());
        // return <Redirect to={`/chefs/${id}`} />
        history.push(`/chefs`)
    }

    const chefArr = Object.values(chefs)
    
    if(user.errors){
        history.push('/login')
    }

    const searchStuff = (
        <>
            <h1>here is the chefs</h1>
            {chefArr[0]?.email
                // <img src="image" alt=""/>
            }
            <SearchBar />
            <div id={2} onClick={e => setChefId(e.target.id)}>Chef number 2</div>
        </>)

    const indivdualChef = (
        <>
            <ChefDetailPage id={chefId} />
        </>
    )
    return (


        <>
            {chefId ? indivdualChef : searchStuff}
        </>

    )
}

