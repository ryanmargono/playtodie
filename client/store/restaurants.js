import Axios from 'axios'

const GET_REST = 'GET_REST'
const CLEAR_REST = 'CLEAR_REST'
const GET_RESTS = 'GET_RESTS'

const addRest = rest => ({
    type: GET_REST,
    rest
})

const getRests = rests => ({
    type: GET_RESTS,
    rests
})

export const clearRest = () => ({
    type: CLEAR_REST,
})

export const retrieveRests = () => dispatch =>
    Axios.get('/api/restaurant')
        .then(res => dispatch(getRests(res.data)))

export const fetchRest = settings => dispatch =>
    Axios.post('/api/yelp', settings)
        .then(({ data }) => dispatch(addRest({
            image_url: data.image_url,
            name: data.name,
            rating: data.rating,
            price: data.price,
            url: data.url,
            location: data.location.display_address.join(','),
            cuisineTypes: data.cuisineTypes
        })))

export default function restReducer(rest = { current: {}, feed: [] }, action) {
    switch (action.type) {
        case CLEAR_REST:
            return { current: {}, feed: [] }
        case GET_REST:
            return { ...rest, current: action.rest }
        case GET_RESTS:
            return { ...rest, feed: action.rests }
        default:
            return rest
    }
}