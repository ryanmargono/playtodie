import React from 'react'
import { Redirect } from 'react-router-dom'
import Nav from './common/Nav'
import { connect } from 'react-redux'

const Dashboard = props => {
    if (!props.user.username) return <Redirect to='/login' />
    return (
        <div>
            <Nav />
            <div> dahsboard </div>
        </div>
    )
}

const mapState = ({ user }) => ({
    user
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(Dashboard)