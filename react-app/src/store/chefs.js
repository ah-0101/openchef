const GET_CHEFS = 'chefs/getChefs'
const GET_ONE_CHEF = 'chefs/getOneChef'

const getChefs = (chefs) => {
    return {
        type: GET_CHEFS,
        payload: chefs
    }
}

const getAChef = (chef) => {
    return {
        type: GET_ONE_CHEF,
        payload: chef,
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

export const getOneChef = (id) => async (dispatch) => {
    const response = await fetch(`/api/chefs/${id}/`)

    if (response.ok) {
        const data = await response.json();
        await dispatch(getAChef(data))
        return response;
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
        case GET_ONE_CHEF:
            newState = {};
            newState.chef = action.payload;
            return newState
        default:
            return state
    }
}


export default ChefsReducer

