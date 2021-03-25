const CONFIRM_RES = 'reservations/postRes'

const postRes = (reservation) => {
  return {
    type: CONFIRM_RES,
    payload: reservation
  }
}

export const postReservation = (reservationInfo) => async(dispatch) => {
  const response = await fetch('/api/reservations/', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(reservationInfo)
  })
  if(response.ok){
    const data = await response.json()
    dispatch(postRes(data))
  }
}

//gets route


const ReservationsReducer = (state={}, action) => {
  let newState;
  switch(action.type){
    case CONFIRM_RES:
      newState = JSON.parse(JSON.stringify(state))
      newState[action.payload.id] = action.payload
      return newState
    default:
      return state
  }
}
export default ReservationsReducer