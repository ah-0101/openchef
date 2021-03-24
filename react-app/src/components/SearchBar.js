import React from 'react';
import DatePicker from 'react-datepicker'

import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'


export default function SearchBar() {

    return (
        <>
            <h1>hello from search</h1>
            <div>
                <DatePicker selected={new Date()} />

            </div>
        </>
    )
}