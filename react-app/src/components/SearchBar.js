import React from 'react';
import DatePicker from 'react-datepicker'

import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import "./SearchBar.css"



const TIMES = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM", 
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
];

const DURATIONS = [
    1, 2, 3, 4
]

export default function SearchBar() {

    const [event_date, setEventState] = useState('')
    const [event_time, setEventTime] = useState('')
    const [duration, setDuration] = useState('')
    const [search, setSearch] = useState('')

    const handleSearchType = async (e) => {
        // e.preventDefault()
        const keyword = e.target.value
        if (keyword === '') {
            setSearch('')
            return
        }
        const chefSearch = await fetch(`/api/search`);
        const jsonChefs = await chefSearch.json();
        jsonChefs.chefs.forEach(chef => {
                let chefName = chef.first_name.toLowerCase();
                for(let i = 0; i < chefName.length; i++){
    
                    if (chefName[i].includes(e.target.value)){
                        console.log(chef.first_name + ' ' + chef.last_name)
                        let chefName2 = chef.first_name + ' ' + chef.last_name
                        setSearch(chefName2)
                    }
                }
                
           })
           console.log(e.target.value)




        

    }

    return (
        <>
            <h1>hello from search</h1>
            <div>
                <DatePicker selected={new Date()} />
            </div>
            <div>
                <select value={event_time} onChange={e => setEventTime(e.target.value)}>
                    {TIMES.map(time => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select> 
            </div>
            <div>
                <select value={duration} onChange={e => setDuration(e.target.value)}>
                    {DURATIONS.map(duration => (
                        <option key={duration} value={duration}>{duration}</option>
                    ))}
                </select> <p>Hours</p>
            </div>
            <div>
                <input className='search-bar' onClick={handleSearchType} placeholder={"Search by Cuisine or Chef name!"}></input>
            </div>
            <div>
                <h1>{search}</h1>
            </div>
            <button>Find your Chef!</button>

        </>
    )
}