const GET_RESERVATIONS = 'chef_reservation/getReservations'

const getReservations = (reservations) => {
    return {
        type: GET_RESERVATIONS,
        payload: reservations
    }
}


export const getChefReservation = (id) => async(dispatch) => {
    const res = await fetch(`/api/reservations/${id}/`)

}


const ChefReservationReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case GET_RESERVATIONS:
            newState = JSON.parse(JSON.stringify(state))
                //utilize the data first and see whats the outcome.
            return newState
        default:
            return state
    }
}

export default ChefReservationReducer