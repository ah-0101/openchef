

const GET_RESERVATIONS = 'chef_reservation/getReservations'

const getReservations = (reservations) => {
  return {
    type: GET_RESERVATIONS,
    payload: reservations
  }
}