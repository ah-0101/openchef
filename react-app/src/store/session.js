import { Redirect } from 'react-router-dom'

const SET_USER = 'session/setUser'
const REMOVE_USER = 'session/removeUser'

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const login = (email, password) => async (dispatch) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })

    });
    const data = await response.json();
    await dispatch(setUser(data))
    return response
}

export const logout = async () => {
    const response = await fetch("/api/auth/logout", {
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await response.json();
};


export const userSignUp = (first_name, last_name, city, chef_id, email, hashed_password) => async (dispatch) => {
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            first_name,
            last_name,
            city,
            chef_id,
            email,
            hashed_password
        }),
    });
    const data = await response.json();
    return dispatch(setUser(data))
}

export const restoreUser = () => async (dispatch) => {
    const response = await fetch('/api/auth', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    // console.log("DOC", document.cookie)
    if (response.ok) {
        const data = await response.json()
        await dispatch(setUser(data))
        return response
    }
}


const initialState = { user: null }

const SessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state)
            newState.user = action.payload
            return newState
        default:
            return state
    }
}
export default SessionReducer