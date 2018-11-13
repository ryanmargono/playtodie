import Axios from "axios";

const USER_AUTH = 'USER_AUTH'
const USER_LOGOUT = 'USER_LOGOUT'

const userAuth = user => ({
    type: USER_AUTH,
    user
})

export const userLogout = () => ({
    type: USER_LOGOUT
})

export const userAuthReq = user => dispatch =>
    Axios.post('/api/user', user)
        .then(({ data }) => {
            if (data.error) dispatch(userAuth({ error: data.error }))
            else dispatch(userAuth(data))
        })


export default function userReducer(user = {}, action) {
    switch (action.type) {
        case USER_AUTH:
            return action.user
        case USER_LOGOUT:
            return {}
        default:
            return user
    }
}