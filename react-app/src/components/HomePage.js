import React from 'react';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from './SearchBar'

export default function HomePage() {
    const chefs = useSelector(state => state.chefs)
    const history = useHistory()
    const dispatch = useDispatch()

    const chefArr = Object.values(chefs)
    console.log(chefs)
    return (
        <>
            <h1>here is the chefs ''''''</h1>
            {chefArr[0]?.email
                // <img src="image" alt=""/>
            }
            <SearchBar />
        </>
    )
}

