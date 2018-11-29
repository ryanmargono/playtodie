import Axios from "axios"

const USER_AUTH = 'USER_AUTH'
const USER_LOGOUT = 'USER_LOGOUT'
const UPDATE_USER = 'UPDATE_USER'
const ADD_REST = 'ADD_REST'

const addRest = rest => ({
    type: ADD_REST,
    rest
})

const userAuth = user => ({
    type: USER_AUTH,
    user
})

export const userLogout = () => ({
    type: USER_LOGOUT
})

const updateUser = user => ({
    type: UPDATE_USER,
    user
})

export const saveRest = (data, id) => dispatch =>
    Promise.all([
        Axios.post('/api/restaurant', data, {headers: {auth: id}}),
        Axios.put(`/api/user/${id}`, {rest: data.name}, {headers: {auth: id}})
    ])
        .then(res => dispatch(addRest(data.name)))


export const userAuthReq = user => dispatch =>
    Axios.post('/api/user', user)
        .then(({ data }) => {
            if (data.error) dispatch(userAuth({ error: data.error }))
            else dispatch(userAuth(data))
        })

export const updateSettingsReq = (id, settings) => dispatch =>
    Axios.put(`/api/user/${id}`, settings, {headers: {auth: id}})
        .then(({ data }) => {
            if (data.error) dispatch(updateUser({ error: data.error }))
            else dispatch(updateUser(data))
        })

export default function userReducer(user = {}, action) {
    switch (action.type) {
        case ADD_REST:
            return {...user, visited: [action.rest, ...user.visited]}
        case USER_AUTH:
            return action.user
        case USER_LOGOUT:
            return {}
        case UPDATE_USER:
            return action.user
        default:
            return user
    }
}