import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


function UserReservations({ isSelected, setIsSelected, chefReservations, setChefReservations }) {
    const user = useSelector(state => state.session.user);
    // const reviews = useSelector(state => state.)
    const dispatch = useDispatch();
    const [event_date, setEventDate] = useState("")
    const [event_time, setEventTime] = useState("")
    const [duration, setDuration] = useState(0)

    // set a state for either chef or user reservations. 

    // useEffect(() => {
    //   dispatch(getChefReservation(user.chef_id))
    // })

    const handleAccountView = (e) => {
        e.preventDefault();
        setIsSelected("Reservations")
        // setChefReservations(false)
        // if (isSelected === "Reservations") {
        // }
    }


    let view;
    if (isSelected === "Reservations") {
        view = (
            <>
                <p>Testing for USER Reservations</p>
                {/* <form onSubmit={completeReservation}>
                    <h2>Make a Reservation</h2>
                    <div>
                        <input onChange={e => setEventDate(e.target.value)} />
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
                        <p>Total - {price * duration}</p>
                    </div>
                    <button> Complete your Reservation</button>
                </form> */}
            </>
        )
    }

    return (
        <>
            <button type="button" onClick={handleAccountView}>Reservations</button>
            <div>
                {view}
            </div>
        </>
    )
}

export default UserReservations;