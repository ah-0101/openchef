
const GET_REVIEWS = 'reviews/getReviews'

const getReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    payload: reviews
  }
}

// pass in id
export const getAllReviews = (id) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${id}/`)

  if (response.ok) {
    const data = await response.json()
    await dispatch(getReviews(data))
    return response
  }
}

const ReviewsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = {}
      action.payload.reviews.forEach(review => {
        newState[review.id] = review
      })
      return newState
    default:
      return state
  }
}

export default ReviewsReducer