import React from 'react';
import {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'


export default function HomePage() {
const history = useHistory()
const dispatch = useDispatch()

    return (
        <>
            <h1>
            hello
            </h1>
        </>
    )
}

