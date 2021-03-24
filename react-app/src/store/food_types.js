
const GET_FOOD_TYPES = 'food_types/getFood'

const getFood = (food_types) => {
  return {
    type: GET_FOOD_TYPES,
    payload: food_types
  }
}

export const getFoodTypes = () => async(dispatch) => {
  const response = await fetch('/api/foods/')

  const data = await response.json()
  
  await dispatch(getFood(data))
  return response
}

const FoodsReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case GET_FOOD_TYPES:
      newState = {}
      action.payload.food_types.forEach(food => {
        newState[food.id] = food
      })
      return newState
    default:
      return state
  }
}

export default FoodsReducer