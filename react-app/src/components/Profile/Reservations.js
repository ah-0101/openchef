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

function UserReservations({ isSelected, setIsSelected, chefReservations, setChefReservations }) {
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

    let reserveId;

    useEffect(() => {
        dispatch(allChefs())
        // dispatch(getFoodTypes())
    }, [dispatch])

    useEffect(() => {
        dispatch(allUserReservations(user.id))
    }, [dispatch])

    const chefsArr = Object.values(chefs);

    const handleAccountView = (e) => {
        e.preventDefault();
        setIsSelected("Reservations")
    }

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
        // console.log(
        //     "HELLLO",
        //     data.user_id,
        //     data.chef_id,
        //     "HELLLO"
        // )
        // check reservation date to be later than today
        await dispatch(editReservation(data))
        // history.push('/profile')
    }

    let view;
    if (isSelected === "Reservations") {
        view = (
            reservations && chefs &&
            <div className="outer-profile-div-p">
                {reservationArr?.map((reservation) => (
                    <span className="profile-single-container" key={nanoid()} >
                        {chefsArr?.map(chef => (
                            <div key={nanoid()} className="test--div">
                                <div className="new-container-p">
                                    <div className="none-2">
                                        {reserveId = reservation.chef_id}
                                    </div>
                                    <div className="outer-user-info-p">
                                        <div className="chef-profile-image-p">
                                            <p>{chefs && reserveId == chef.chef.id ? <img className="image-profile-p" src={chef.chef.profile_image} /> : ""}</p>
                                        </div>
                                        <div className="user-fields-p">
                                            <div className="main-text-profile-p">
                                                <span>{chefs && reserveId == chef.chef.id ? chef.first_name : ""} {reserveId == chef.chef.id ? chef.last_name : ""}</span>
                                            </div>
                                            <div className="main-text-profile-p">
                                                <span>{chefs && reserveId == chef.chef.id ? chef.city : ""}</span>
                                            </div>
                                            <div className="main-text-profile-p">
                                                <span>{chefs && reserveId == chef.chef.id ? "$" + chef.chef.price + ".00/hr" : ""}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="input-label-field-container-p">
                            <div>
                                <div className="label-field-container">
                                    <div>
                                        <li className="profile-label-p">Date</li>
                                    </div>
                                    <div>
                                        {chefs && reservation.id == editSelected ? <Form.Control value={event_date} className='calender-form' type="date" name="dob"
                                            onChange={e => setEventDate(e.target.value)} /> : <li>{reservation.event_date}</li>}
                                    </div>
                                </div>
                                <div className="label-field-container">
                                    <div>
                                        <li className="profile-label-p">Time</li>
                                    </div>
                                    <div>
                                        {chefs && reservation.id == editSelected ?
                                            <select name="event_time" onChange={e => setEventTime(e.target.value)}>
                                                <option value={event_time}>{event_time}</option>
                                                {TIMES.map(time => (
                                                    <option key={nanoid()} value={event_time}>{time}</option>
                                                ))}
                                            </select> :
                                            <li>{reservation.event_time}</li>}
                                    </div>
                                </div>
                                <div className="label-field-container">
                                    <div>
                                        <li className="profile-label-p">Duration</li>
                                    </div>
                                    <div>
                                        {chefs && reservation.id == editSelected ?
                                            <select name="duration" onChange={e => setDuration(e.target.value)}>
                                                {DURATIONS.map(duration => (
                                                    <option key={nanoid()} value={duration}>{duration}</option>
                                                ))}
                                            </select>
                                            : <li>{reservation.duration} hour(s)</li>}
                                    </div>
                                </div>
                            </div>
                            <div>
                                {chefs && reservation.id == editSelected ? "" :
                                    <button id={reservation.id} type="button" onClick={handleEditReservation}>Edit Reservation</button>}
                            </div>
                            <div>
                                {chefs && reservation.id == editSelected ?
                                    <button id={reservation.id} type="button" onClick={updateReservation}>Update Reservation</button> :
                                    ""}
                            </div>
                            <div>
                                <button id={reservation.id} type="button" onClick={handleDeleteReservation}>Cancel Reservation</button>
                            </div>
                        </div>
                    </span>
                ))
                }
            </div>
        )
    }

    return (
        reservations &&
        <div className="res-btn-form-p">
            <button type="button" onClick={handleAccountView}>Reservations</button>
            <div>
                {view}
            </div>
        </div>
    )
}

export default UserReservations;