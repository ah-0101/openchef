const SET_CHEF_REVIEWS = 'chef_reviews/setChefReviews'

const setChefReviews = (reviews) => {
  return {
    type: SET_CHEF_REVIEWS,
    payload: reviews
  }
}

export const getChefReviews = (chefId) => async(dispatch) => {
  const response = await fetch(`/api/reviews/chef/${chefId}/`)

  const data = await response.json()
  await dispatch(setChefReviews(data))
  return response
}


const ChefReviewsReducer = (state ={}, action) => {
  let newState;
  switch(action.type) {
    case SET_CHEF_REVIEWS:
      newState={}
      action.payload.reviews.forEach(review => {
        newState[review.id] = review
      })
      return newState
    default:
      return state
  }
}

export default ChefReviewsReducer