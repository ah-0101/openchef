const GET_CHEFS = 'chefs/getChefs'

const getChefs = (chefs) => {
    return {
        type: GET_CHEFS,
        payload: chefs
    }
}

export const allChefs = () => async (dispatch) => {
    const response = await fetch('/api/chefs/')

    if (response.ok) {
        const data = await response.json()
        await dispatch(getChefs(data))
        return response
    }
}

// // export const chefSignUp = () => async (dispatch) => {
// //     const response = await fetch('/api/chefs/')

// // }

const ChefsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case GET_CHEFS:
            newState = {};
            action.payload.chefs.forEach(chef => {
                newState[chef.id] = chef;
            })
            return newState
        default:
            return state
    }
}

export default ChefsReducer