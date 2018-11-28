import React from 'react'
import { connect } from 'react-redux'

const Prefs = props => {
    const getDistance = code => {
        switch(code){
            case 0:
                return "< 1 mile"
            case 1:
                return "1 - 3 miles"
            case 2:
                return "3+ miles"
        }
    }
    if (props.user.settings){
        return (
            <div> 
                <h3> Preferences: </h3>
                <p> Zipcode: {props.user.settings.zipcode} </p>
                <p> Cuisines: {Array.from(props.user.settings.cuisineTypes).join(', ')} </p>
                <p> Max Distance: {getDistance(props.user.settings.distanceCode)} </p>
            </div>
        )
    }
    return null
}

const mapState = ({user}) => ({
    user
})

export default connect(mapState, null)(Prefs)