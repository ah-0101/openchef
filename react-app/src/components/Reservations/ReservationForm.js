import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid'
import { Form } from 'react-bootstrap';
import './ReservationForm.css'

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

export default function ReservationForm({ chef_id, price, title, callbackReservation, buttonText, formData = { event_time: "6:00 PM", event_date: "", duration: 1 } }) {
  const user = useSelector(state => state.session.user);
  const [event_date, setEventDate] = useState(formData.event_date)
  const [event_time, setEventTime] = useState(formData.event_time)
  const [duration, setDuration] = useState(formData.duration)
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch();
  const history = useHistory();

  const userid = user.id
  const chefid = Number(chef_id)

  const completeReservation = async (e) => {
    e.preventDefault()
    let error = []
    if (!event_date || !event_time || !event_date || !duration) {
      error.push("Please fill out all the fields!")
      setErrors(error)
    } else {
      const startingReservation = {
        user_id: userid,
        chef_id: chefid,
        event_date: event_date,
        event_time: event_time,
        duration: Number(duration)
      }

      // check reservation date to be later than today
      await dispatch(callbackReservation(startingReservation))
      history.push('/profile')
    }
  }


  return (
    <>
      <div className='reservation-whole'>
        <h2 className='res-form-title'>{title}</h2>
        <form id="reservation-form-id" className='reservation-form' onSubmit={completeReservation}>
          <ul className="errors-res-form-p">
            {errors.map((error, idx) => <li className="error-li" key={idx}>{error}</li>)}
          </ul>
          <div className='res-form-duration'>
            <p className='res-labels'>Duration (hours)</p>
            <select className='res-form-select' value={duration} onChange={e => setDuration(e.target.value)}>
              {DURATIONS.map(duration => (
                <option key={nanoid()} value={duration}>{duration}</option>
              ))}
            </select> 
          </div>
          <div className='res-form-bottom-inputs'>
            <div className='res-calendar-date'>
              <p className='res-labels'>Date</p>
              <Form.Control type="date" name="dob"
                onChange={e => setEventDate(e.target.value)} />
            </div>
            <div className='res-time-input'>
              <p className='res-labels'>Time</p>
              <select value={event_time} onChange={e => setEventTime(e.target.value)}>
                {TIMES.map(time => (
                  <option key={nanoid()} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='reservation-total'>
            <p className='res-labels-total'>Reservation Total: </p>
            <p className='res-total'>${price * duration}</p>
          </div>
          <div className='button-div'>
            <button className='res-standard-button'>{buttonText}</button>
          </div>
        </form>
      </div>

    </>
  )
}
