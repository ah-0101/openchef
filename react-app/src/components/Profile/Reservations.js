import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid'
import { allChefs } from '../../store/chefs';
import { getFoodTypes } from '../../store/food_types';
import { allUserReservations, deleteReservation, editReservation } from '../../store/reservations';
import { Form } from 'react-bootstrap';
import '../ChefReviews.css'

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

function UserReservations({ isSelected, setIsSelected }) {
    const user = useSelector(state => state.session.user);
    const chefs = useSelector(state => state.chefs)
    const reservations = useSelector(state => state.reservations)
    const [event_date, setEventDate] = useState("")
    const [event_time, setEventTime] = useState("")
    const [duration, setDuration] = useState(0)
    const [editSelected, setEditSelected] = useState(0)
    const [chef_id, setChefId] = useState(0)
    const [user_id, setUserId] = useState(0)
    const [reservationId, setReservationId] = useState(0)
    const dispatch = useDispatch();
    const history = useHistory();


    const reservationArr = Object.values(reservations);

    useEffect(() => {
        dispatch(allChefs())
        // dispatch(getFoodTypes())
    }, [dispatch])

    useEffect(() => {
        dispatch(allUserReservations(user.id))
    }, [dispatch])


    const handleEditReservation = (e) => {
        e.preventDefault()
        if (reservations[e.target.id].id == e.target.id) {
            setEditSelected(e.target.id)
            setEventDate(reservations[e.target.id].event_date)
            setEventTime(reservations[e.target.id].event_time)
            setDuration(reservations[e.target.id].duration)
            setChefId(reservations[e.target.id].chef_id)
            setUserId(reservations[e.target.id].user_id)
            setReservationId(reservations[e.target.id].id)
        }
    }

    const handleDeleteReservation = async (e) => {
        e.preventDefault();
        if (reservations[e.target.id].id == e.target.id) {
            await dispatch(deleteReservation(e.target.id))
            await dispatch(allUserReservations(user.id))
        }
    }

    const updateReservation = async (e) => {
        e.preventDefault()
        const data = {
            id: reservationId,
            user_id: user_id,
            chef_id: chef_id,
            event_date: event_date,
            event_time: event_time,
            duration: Number(duration)
        }
        // check reservation date to be later than today
        await dispatch(editReservation(data))
        // history.push('/profile')
    }

    let view;
    if (isSelected === "Reservations") {
        view = (
            chefs && reservations &&
            <div className="outer-profile-div-p">
                {reservationArr?.map((reservation) => (
                    <span className="profile-single-container" key={nanoid()} >
                        <div className="chef-profile-image-p">
                            <img className="image-profile-p" src={chefs && chefs?.[reservation.chef_id].chef?.profile_image} />
                        </div>
                        <div className="text-container-p">
                            <div className="outer-user-info-p">
                                <div className="main-text-profile-p">
                                    You have a reservation with Chef {chefs && chefs?.[reservation.chef_id].first_name} {chefs && chefs?.[reservation.chef_id].last_name}
                                </div>
                                <div className="sub-text-profile-p">
                                    Your chef lives in {chefs && chefs?.[reservation.chef_id].city}!
                                </div>
                                <div className="sub-text-profile-p">${chefs && chefs?.[reservation.chef_id].chef?.price}/hr</div>
                            </div>
                            <div className="input-label-field-container-p">
                                <div>
                                    <div className="label-field-container">
                                        <div>
                                            <li className="profile-label-p">Date</li>
                                        </div>
                                        <div>
                                            {chefs && reservation.id == editSelected ? <Form.Control value={event_date} className='calender-form' type="date" name="dob"
                                                onChange={e => setEventDate(e.target.value)} /> :
                                                <ul className="profile-label-p">
                                                    <li>{reservation.event_date}</li>
                                                </ul>}
                                        </div>
                                    </div>
                                    <div className="label-field-container">
                                        <div>
                                            <li className="profile-label-p">Time</li>
                                        </div>
                                        <div className="placeholder-div-p">
                                            {chefs && reservation.id == editSelected ?
                                                <select name="event_time" onChange={e => setEventTime(e.target.value)}>
                                                    <option value={event_time}>{event_time}</option>
                                                    {TIMES.map(time => (
                                                        <option key={nanoid()} value={event_time}>{time}</option>
                                                    ))}
                                                </select> : <ul className="profile-label-p">
                                                    <li>{reservation.event_time}</li>
                                                </ul>}
                                        </div>
                                    </div>
                                    <div className="label-field-container">
                                        <ul className="profile-label-p">
                                            <li>Duration</li>
                                        </ul>
                                        <div className="placeholder-div-p">
                                            {chefs && reservation.id == editSelected ?
                                                <select name="duration" onChange={e => setDuration(e.target.value)}>
                                                    {DURATIONS.map(duration => (
                                                        <option key={nanoid()} value={duration}>{duration}</option>
                                                    ))}
                                                </select>
                                                : <ul className="profile-label-p">
                                                    <li>{reservation.duration} hour(s)</li>
                                                </ul>}
                                        </div>
                                    </div>
                                </div>
                                <ul className="profile-label-p">
                                    {chefs && reservation.id == editSelected ? "" :
                                        <button id={reservation.id} type="button" onClick={handleEditReservation}>Edit Reservation</button>}
                                </ul>
                                <div className="placeholder-div-p">
                                    {chefs && reservation.id == editSelected ?
                                        <button id={reservation.id} type="button" onClick={updateReservation}>Update Reservation</button> :
                                        ""}
                                </div>
                                <div>
                                    <button id={reservation.id} type="button" onClick={handleDeleteReservation}>Cancel Reservation</button>
                                </div>
                            </div>
                        </div>
                    </span>
                ))
                }
            </div>
        )
    }

    return (
        reservations && chefs &&
        <div className="res-btn-form-p">
            {view}
        </div>
    )
}

export default UserReservations;