const SET_RESERVATIONS = 'chef_reservation/getReservations'

const setChefReservations = (reservations) => {
    return {
        type: SET_RESERVATIONS,
        payload: reservations
    }
}

export const getChefReservations = (chefReservationId) => async(dispatch) => {
    const response = await fetch(`/api/reservations/chef-reservation/${chefReservationId}/`)

    const jsonChefReservation = await response.json()
    await dispatch(setChefReservations(jsonChefReservation))
    return response

}



const ChefReservationReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case SET_RESERVATIONS:
            newState = JSON.parse(JSON.stringify(state))
                //utilize the data first and see whats the outcome.
            action.payload.reservations.forEach(reservation => {
                newState[reservation.id] = reservation
            })
            return newState
        default:
            return state
    }
}

export default ChefReservationReducer