import React from 'react'
import { connect } from 'react-redux'

const History = props => {
    if (props.user.visited.length){
        return (
            <div> 
                <h3> History: </h3>
                
            </div>
        )
    }
    return null
}

const mapState = ({user}) => ({
    user
})

export default connect(mapState, null)(History)