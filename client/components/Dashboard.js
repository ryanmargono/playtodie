import React from 'react'
import { Redirect } from 'react-router-dom'
import Nav from './common/Nav'
import { connect } from 'react-redux'
import { Col, Row } from 'react-materialize'
import styles from './common/styles'
import Prefs from './Prefs'
import History from './History'

const Dashboard = props => {
    if (!props.user.username) return <Redirect to='/login' />
    return (
        <div>
            <Nav />
            <Row>
                <Col offset='s1' s={5} style={styles.login}>
                    <Row>
                    </Row>
                </Col>
                <Col offset='s1's={4} style={styles.login}>
                    <Row>
                        <Prefs />
                    </Row>
                    <Row>
                        <History />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

const mapState = ({ user }) => ({
    user
})

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(Dashboard)