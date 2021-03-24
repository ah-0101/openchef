import React from 'react';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from './SearchBar'
import { allChefs } from '../store/chefs';

export default function HomePage() {
    const user = useSelector(state => state.session.user)
    const chefs = useSelector(state => state.chefs)
    
    const history = useHistory()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(allChefs())
    
    }, [])

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
        </>
    )
}

