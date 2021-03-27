import React from 'react';
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Form } from 'react-bootstrap';
import { getChefReviews } from '../store/chef_reviews';
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


export default function SearchBar({search,setSearch,setBarId,barId,setChefId}) {


    const [event_date, setEventState] = useState(new Date())
    const [event_time, setEventTime] = useState('')
    const [duration, setDuration] = useState('')
    const [classHandler, setClassHandler] = useState("search-icon")
    const [classHandler2, setClassHandler2] = useState("search-ind-none")
    const [event, setEvent] = useState('')
    const dispatch = useDispatch()
    
    const handleSearchType = async (e) => {

        const keyword = e.target.value
        if (keyword === '') {
            setClassHandler('search-icon')
            setClassHandler2('search-ind-none')
            return
        }else{
            setClassHandler('search-icon-none')
            setClassHandler2('')

        }
        setEvent(e.target.value)
        const chefSearch = await fetch(`/api/search/${keyword}`);
        let jsonChefs = await chefSearch.json();
        setTimeout(() => {
            setSearch(jsonChefs)
        }, 200);
    }
    const chefInfoDisplay = async (e) => {
        e.preventDefault()
        setChefId(e.target.id)
       
        await dispatch(getChefReviews(e.target.id))
        
    }

    return (
        <>
            <nav className="nav-search-bar">

                <div className="border-calender">

                    <Form.Control className='calender-form' type="date"
                         onChange={date => setEventState(date)} />


                    <select className='time-form' value={event_time} onChange={e => setEventTime(e.target.value)}>
                        {TIMES.map(time => (
                            <option key={time} value={time}>⏲ {time}</option>
                        ))}
                    </select>


                    <select className='duration-form' value={duration} onChange={e => setDuration(e.target.value)}>
                        {DURATIONS.map(duration => (
                            <option key={duration} value={duration}>⌚ {duration}</option>
                        ))}
                    </select>



                </div>

            <div>
                <div className='chef-welcome'>Find your Chef for any occasion</div>
                {/* <span>ss</span> */}
                <div>
                <input className={`search-bar ${classHandler}`} onChange={handleSearchType} placeholder={"         Search by Cuisine or Chef name!"}></input>
                <div className='classRender'>

                    {
                        search?.map(chef=> (
                            <>

                        <div className={classHandler2} id={chef.id} >
                        {event === '' ? '':(<p className='search-ind'  id={chef.id} onClick={chefInfoDisplay}>
                         <span className='colon'>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; </span> 
                             {chef.first_name} {chef.last_name}                             
                        <br/>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{chef.city}</p>)}
                        </div>
                        </>
                    ))
                }
                </div>
                </div>
                </div>
                        </nav>
                        <div>
                       
                        </div>
        </>
    )
}