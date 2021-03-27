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


export default function SearchBar({ search, setSearch, setBarId, barId, setChefId }) {


    const [event_date, setEventState] = useState(new Date())
    const [event_time, setEventTime] = useState('')
    const [duration, setDuration] = useState('')
<<<<<<< HEAD
    const [searchSecondField, setSearchSecondField] = useState([])
    const [classHandler, setClassHandler] = useState("search-toggle-none")
    const [classHandler2, setClassHandler2] = useState("search-toggle2-none")
    const [inId, setInId] = useState(0)
=======
    const [classHandler, setClassHandler] = useState("search-icon")
    const [classHandler2, setClassHandler2] = useState("search-ind-none")
    const [event, setEvent] = useState('')
>>>>>>> main
    const dispatch = useDispatch()

    const handleSearchType = async (e) => {

        const keyword = e.target.value
        if (keyword === '') {
            setClassHandler('search-icon')
            setClassHandler2('search-ind-none')
            return
<<<<<<< HEAD
        } else {
            setClassHandler('search-toggle')
            setClassHandler2('search-toggle2')
=======
        }else{
            setClassHandler('search-icon-none')
            setClassHandler2('')
>>>>>>> main

        }
        setEvent(e.target.value)
        const chefSearch = await fetch(`/api/search/${keyword}`);
        let jsonChefs = await chefSearch.json();
<<<<<<< HEAD
        setSearch(jsonChefs)


=======
        setTimeout(() => {
            setSearch(jsonChefs)
        }, 200);
>>>>>>> main
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

<<<<<<< HEAD
                <div>
                    <div className='chef-welcome'>Find your Chef for any occasion</div>
                    <input className='search-bar' onClick={handleSearchType} placeholder={" 🔍 Search by Cuisine or Chef name!"}></input>
                    <div className={classHandler} id={barId} onClick={chefInfoDisplay}>
                        <p className='search-toggle-content' id={barId} onClick={chefInfoDisplay}>


                            {/* {search} */}
=======
            <div>
                <div className='chef-welcome'>Find your Chef for any occasion</div>
                {/* <span>ss</span> */}
                <div>
                <input className={`search-bar ${classHandler}`} onChange={handleSearchType} placeholder={"         Search by Cuisine or Chef name!"}></input>
                <div className='classRender'>
>>>>>>> main

                    {
                        search?.map(chef=> (
                            <>

<<<<<<< HEAD

                        </p>
                    </div>
                    {/* <div className={classHandler2} id={barId} onClick={chefInfoDisplay}><p className='search-toggle-content'  id={inId}  onClick={chefInfoDisplay}>{searchSecondField}</p></div> */}
                </div>

                {/* <button className='btn-style-find' >Find a Chef!</button> */}

            </nav>
            <div>
                {

                    search?.map(chef => (
                        <>

                            <h1 id={chef.id} onClick={chefInfoDisplay}>{chef.first_name}</h1>
                            <h1 >{chef.last_name}</h1>
                        </>
                    ))
                }
            </div>
=======
                        <div className={classHandler2} id={chef.id} >{event === '' ? '':(<p className='search-ind'  id={chef.id} onClick={chefInfoDisplay}>  {chef.first_name} {chef.last_name}</p>)}
                        </div>
                        {/* <div className='classRender' >{chef.last_name}</div> */}
                        </>
                    ))
                }
                </div>
                </div>
                {/* <div className={classHandler} id={barId} onClick={chefInfoDisplay}> */}
                     {/* <p className='search-toggle-content' id={barId} onClick={chefInfoDisplay}> */}
                        {/* {search} */}
                    {/* </p> */}
                {/* </div> */}
                {/* <div className={classHandler2} id={barId} onClick={chefInfoDisplay}><p className='search-toggle-content'  id={inId}  onClick={chefInfoDisplay}>{searchSecondField}</p></div> */}
            </div>
                        </nav>
                        <div>
                       
                        </div>
>>>>>>> main
        </>
    )
}