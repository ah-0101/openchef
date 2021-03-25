import React from 'react';
import { useEffect, useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from './SearchBar'
import ChefsContainer from './ChefsContainer'
import { allChefs } from '../store/chefs';
import { getFoodTypes } from '../store/food_types';
import { getAllReviews } from '../store/reviews';
import ChefDetailPage from './ChefDetailPage';
import { getChefReviews } from '../store/chef_reviews';

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

    const chefInfo = async (e) => {
        e.preventDefault()
        setChefId(e.target.id)
        await dispatch(getChefReviews(e.target.id))
    }
    

    const chefArr = Object.values(chefs)
    
    //fix this later
    if(user == null || user.errors){
        history.push('/login')
    }

    const searchStuff = (
        <>
            <h1>here is the chefs</h1>
            {chefArr[0]?.email
                // <img src="image" alt=""/>
            }
            <SearchBar />
            <div id={2} onClick={chefInfo}>Chef number 2</div>
            <ChefsContainer />
        </>)

    const indivdualChef = (
        <>
            <ChefDetailPage id={chefId} />
            <button onClick={e => setChefId(null)}>Back button test</button>
        </>
    )
    return (

        <>
            {chefId ? indivdualChef : searchStuff}
            
        </>

    )
}

