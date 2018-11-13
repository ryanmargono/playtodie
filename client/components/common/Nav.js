import React from 'react'
import { Navbar, NavItem } from 'react-materialize'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { userLogout } from '../../store/user'

const Nav = props => {
    if (props.user.username) {
        return (
            <Navbar brand='Random Eats' right>
                <li><NavLink to='/'> Dashboard </NavLink> </li>
                <li><NavLink to='/settings'> Settings </NavLink> </li>
                <NavItem onClick={props.userLogout}> Logout </NavItem>
            </Navbar>
        )
    }
    return (
        <Navbar brand='Random Eats' right>
        </Navbar>
    )
}

const mapState = ({ user }) => ({
    user
})

const mapDispatch = dispatch => ({
    userLogout: () => dispatch(userLogout())
})

export default connect(mapState, mapDispatch)(Nav)