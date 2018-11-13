import React from 'react'
import { Redirect } from 'react-router-dom'

const Dashboard = props => {
    if (!props.user) return <Redirect to='/login' />
    return (
        <div> dahsboard </div>
    )
}

export default Dashboard