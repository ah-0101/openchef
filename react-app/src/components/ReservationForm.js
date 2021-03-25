import  React from 'react'
import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import { postReservation } from '../store/reservations';

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

export default function ReservationForm({chef_id, price}) {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()
  const history = useHistory()

  const [event_date, setEventDate] = useState("")
  const [event_time, setEventTime] = useState("")
  const [duration, setDuration] = useState(0)

  const userid = user.id
  const chefid = Number(chef_id)
  const completeReservation = async(e) => {
    e.preventDefault()

    const startingReservation = {
      user_id: userid,
      chef_id: chefid,
      event_date: event_date,
      event_time: event_time,
      duration: Number(duration)
    
    }
    // check reservation date to be later than today
    await dispatch(postReservation(startingReservation))
    history.push('/profile')
  }

  return (
    <>
      <form onSubmit={completeReservation}>
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
          <p>Total - {price*duration}</p>
        </div>
        <button> Complete your Reservation</button>
      </form>

    </>
  )
}