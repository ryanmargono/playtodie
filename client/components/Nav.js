import React from 'react'
import { Col, Row } from 'react-materialize'
import { Link } from 'react-router-dom'

const Nav = () => (
    <Row style={{paddingTop: '75px', paddingLeft: '50px', paddingRight: '50px', display: 'flex', alignItems: 'center'}}>
        <Col s={2} style={{marginLeft: 0}}> <Link to='/shop'> shop </Link> </Col>
        <Col s={2}> <Link to='/thoughts'> thoughts </Link> </Col>
        <Col s={2}> <Link to='/'> <img src='/logo.png' style={{transform:'scale(0.7)'}}></img> </Link> </Col>
        <Col s={2}> <Link to='/about'> about </Link> </Col>
        <Col s={2}> <Link to='/connect'> connect </Link> </Col>
    </Row>

)

export default Nav