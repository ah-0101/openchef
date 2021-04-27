const GET_CHEFS = 'chefs/getChefs'
const GET_ONE_CHEF = 'chefs/getOneChef'
const UPDATE_CHEF = 'chefs/updateChef'

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

const updateChefInfo = (chef) => {
    return {
        type: UPDATE_CHEF,
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

export const updateChef = (data) => async dispatch => {
    const { id, userId } = data
    const res = await fetch(`/api/chefs/${id}/`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    if (res.ok) {
        const resData = await res.json();
        const data = { ...resData, userId };
        // debugger
        dispatch(updateChefInfo(data))
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
            console.log("CHEFS----", action.payload)
            action.payload.chefs.forEach(chef => {
                newState[chef.id] = chef;
            })
            return newState
        case GET_ONE_CHEF:
            newState = {};
            newState.chef = action.payload;
            return newState
        case UPDATE_CHEF:
            newState = { ...state };
            newState[action.payload.userId].chef.bio = action.payload.bio
            newState[action.payload.userId].chef.food_type_id = action.payload.food_type_id
            newState[action.payload.userId].chef.price = action.payload.price
            return newState;
        default:
            return state
    }
}


export default ChefsReducer

