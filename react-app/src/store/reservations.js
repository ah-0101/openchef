const CONFIRM_RES = 'reservations/postRes'
const GET_USER_RESERVATIONS = 'reservations/getUserReservations'

const postRes = (reservation) => {
  return {
    type: CONFIRM_RES,
    payload: reservation
  }
}

const userReservations = (reservations) => {
  return {
    type: GET_USER_RESERVATIONS,
    reservations,
  }
}

export const postReservation = (reservationInfo) => async (dispatch) => {
  const response = await fetch('/api/reservations/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservationInfo)
  })
  if (response.ok) {
    const data = await response.json()
    dispatch(postRes(data))
  }
}

export const allUserReservations = (user_id) => async (dispatch) => {
  const response = await fetch(`/api/reservations/${user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (response.ok) {
    const data = await response.json()
    dispatch(userReservations(data))
  }
}


const ReservationsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case CONFIRM_RES:
      newState = JSON.parse(JSON.stringify(state))
      newState[action.payload.id] = action.payload
      return newState
    case GET_USER_RESERVATIONS:
      newState = JSON.parse(JSON.stringify(state))
      newState[action.reservations.id] = action.reservations
      return newState
    default:
      return state
  }
}
export default ReservationsReducer