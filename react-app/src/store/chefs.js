

const GET_CHEFS = 'chefs/getChefs'

const getChefs = (chefs) => {
  return {
    type: GET_CHEFS,
    payload: chefs
  }
}

export const allChefs = () => async (dispatch) => {
  const response = await fetch('/api/chefs/')

  if (response.ok){
    const data = await response.json()
    console.log(data)
    await dispatch(getChefs(data))
    return response
  }
}

const ChefsReducer = (state={}, action)=> {
  let newState;
  switch(action.type) {
    case GET_CHEFS:
      return newState
    default:
      return state
  }
}

export default ChefsReducer