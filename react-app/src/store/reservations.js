const CONFIRM_RES = 'reservations/postRes'
const GET_USER_RESERVATIONS = 'reservations/getUserReservations'
const EDIT_USER_RESERVATION = 'reservations/editUserReservation'

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

const editUserReservation = (reservation) => {
  return {
    type: EDIT_USER_RESERVATION,
    reservation,
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

export const editReservation = (user_id, chef_id, event_date, event_time, duration) => async dispatch => {
  const response = await fetch(`/api/reservations/${user_id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id,
      chef_id,
      event_date,
      event_time,
      duration
    })
  })
  if (response.ok) {
    const data = await response.json()
    await dispatch(postRes(data))
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
      action.reservations.reservations.forEach(reservation => {
        newState[reservation.id] = reservation
      })
      return newState
    default:
      return state
  }
}
export default ReservationsReducer