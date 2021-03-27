import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { allChefs } from '../../store/chefs';
import { getFoodTypes } from '../../store/food_types';
import { allUserReservations, deleteReservation } from '../../store/reservations';

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
    const dispatch = useDispatch();
    const [event_date, setEventDate] = useState("")
    const [event_time, setEventTime] = useState("")
    const [duration, setDuration] = useState(0)
    const [editSelected, setEditSelected] = useState(0)
    const [updateBtn, setUpdateBtn] = useState(false)

    const reservationArr = Object.values(reservations);

    let reserveId;

    useEffect(() => {
        dispatch(allChefs())
        // dispatch(getFoodTypes())
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
            setUpdateBtn(true)
        }
    }

    const handleDeleteReservation = async (e) => {
        e.preventDefault();
        if (reservations[e.target.id].id == e.target.id) {
            await dispatch(deleteReservation(e.target.id))
            await dispatch(allUserReservations(user.id))
        }
    }

    let view;
    if (isSelected === "Reservations") {
        view = (
            <div className="outer-profile-div-p">
                {reservationArr?.map((reservation) => (
                    <span className="profile-single-container" key={nanoid()} >
                        {chefsArr?.map(chef => (
                            <div key={nanoid()} className="test--div">
                                <div className="none">
                                    {reserveId = reservation.chef_id}
                                </div>
                                <div className="outer-user-info-p">
                                    <div className="chef-profile-image-p">
                                        <p>{reserveId == chef.chef.id ? <img className="image-profile-p" src={chef.chef.profile_image} /> : ""}</p>
                                    </div>
                                    <div className="user-fields-p">
                                        <div>
                                            <span>{reserveId == chef.chef.id ? chef.first_name : ""} {reserveId == chef.chef.id ? chef.last_name : ""}</span>
                                        </div>
                                        <div>
                                            <p>{reserveId == chef.chef.id ? chef.city : ""}</p>
                                        </div>
                                        <div>
                                            <p>{reserveId == chef.chef.id ? "$" + chef.chef.price + ".00/hr" : ""}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div>
                            <div className="label-field-container">
                                <div>
                                    <li className="profile-label-p">Date</li>
                                </div>
                                <div>
                                    {reservation.id == editSelected ? <input value={reservation.event_date} onChange={e => setEventDate(e.target.value)} /> : <li>{reservation.event_date}</li>}
                                </div>
                            </div>
                            <div className="label-field-container">
                                <div>
                                    <li className="profile-label-p">Time</li>
                                </div>
                                <div>
                                    {reservation.id == editSelected ? <select name="event_time" onChange={e => setEventTime(e.target.value)}>
                                        <option value={reservation.event_time}>{reservation.event_time}</option>
                                        {TIMES.map(time => (
                                            <option key={nanoid()} value={reservation.event_time}>{time}</option>
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
                                    {reservation.id == editSelected ?
                                        <select value={reservations[editSelected].duration} onChange={e => setDuration(e.target.value)}>
                                            {DURATIONS.map(duration => (
                                                <option key={nanoid()} value={duration}>{duration}</option>
                                            ))}
                                        </select>
                                        : <li>{reservation.duration} hour(s)</li>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <button id={reservation.id} type="button" onClick={handleEditReservation}>Edit</button>
                        </div>
                        <div>
                            <button id={reservation.id} type="button" onClick={handleDeleteReservation}>Cancel Reservation</button>
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