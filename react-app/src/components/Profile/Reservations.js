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
    const [reservationId, setReservationId] = useState(0)
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

    const handleReservationId = () => {
        setReservationId()
    }


    let view;
    if (isSelected === "Reservations") {
        view = (
            <>
                {reservationArr?.map((reservation) => (
                    <div key={reservation.id} >
                        <div>
                            <li>{reservation.event_date}</li>
                            <li>{reservation.event_time}</li>
                            <li>{reservation.duration}</li>
                        </div>
                        <>
                        </>
                        {chefsArr?.map(chef => (
                            <>
                                <div className="none">
                                    {reserveId = reservation.chef_id}
                                </div>
                                <div>
                                    <p>{reserveId == chef.chef.id ? chef.first_name : ""}</p>
                                </div>
                                <div>
                                    <p>{reserveId == chef.chef.id ? chef.last_name : ""}</p>
                                </div>
                                <div>
                                    <p>{reserveId == chef.chef.id ? chef.city : ""}</p>
                                </div>
                                <div>
                                    <p>{reserveId == chef.chef.id ? chef.chef.price : ""}</p>
                                </div>
                                <div>
                                    <p>{reserveId == chef.chef.id ? <img className="image-profile-p" src={chef.chef.profile_image} /> : ""}</p>
                                </div>
                            </>
                        ))}
                    </div>
                ))
                }
            </>
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