import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allChefs } from '../../store/chefs';
import { getFoodTypes } from '../../store/food_types';
import { allUserReservations } from '../../store/reservations';


function UserReservations({ isSelected, setIsSelected, chefReservations, setChefReservations }) {
    const user = useSelector(state => state.session.user);
    const chefs = useSelector(state => state.chefs)
    const reservations = useSelector(state => state.reservations)
    const dispatch = useDispatch();
    const [event_date, setEventDate] = useState("")
    const [event_time, setEventTime] = useState("")
    const [duration, setDuration] = useState(0)

    const reservationArr = Object.values(reservations);
    console.log("reservation array --->", reservationArr)

    let reserveId;
    console.log("reservIDIDID", reserveId)


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


    let view;
    if (isSelected === "Reservations") {
        view = (
            <div className="outer-profile-div-p">
                {reservationArr?.map((reservation) => (
                    <span className="profile-single-container" key={reservation.id} >
                        {chefsArr?.map(chef => (
                            <div className="test--div">
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
                                    <li>{reservation.event_date}</li>
                                </div>
                            </div>
                            <div className="label-field-container">
                                <div>
                                    <li className="profile-label-p">Time</li>
                                </div>
                                <div>
                                    <li>{reservation.event_time}</li>
                                </div>
                            </div>
                            <div className="label-field-container">
                                <div>
                                    <li className="profile-label-p">Duration</li>
                                </div>
                                <div>
                                    <li>{reservation.duration} hour(s)</li>
                                </div>
                            </div>
                        </div>
                        <>
                        </>
                    </span>
                ))
                }
            </div>
        )
    }

    return (
        reservations &&
        <>
            <button type="button" onClick={handleAccountView}>Reservations</button>
            <div>
                {view}
            </div>
        </>
    )
}

export default UserReservations;