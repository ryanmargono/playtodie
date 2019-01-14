import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-materialize'

const About = () => (
    <div id="top" className="mobileContainer">
        <Nav />
        {
            /Mobi/.test(navigator.userAgent) && (
                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '5%', paddingRight: '5%' }}>
                    <div>
                        <Col className='text' style={{ fontSize: '25px', minWidth: '100%' }}>
                            playtodie uses open source information to discover a deeper meaning of the world and the self.
                        <br /> <br />
                            conceptualized by jason seidman
                    </Col>
                    < br /> <br />
                        <Col style={{ minWidth: '100%' }}>
                            <Link to='/terms' style={{ fontSize: '15px' }}> terms and conditions </Link>
                        </Col>
                    </div>
                </div>
            )
        }
        {
            !/Mobi/.test(navigator.userAgent) && (
                <div className="desktopContainer">
                    <Row style={{ marginTop: '20%' }}>
                        <Col s={12} m={4} offset='m4' className='text'>
                            playtodie uses open source information to discover a deeper meaning of the world and the self.
                            <br /> <br />
                            conceptualized by jason seidman
                        </Col>
                    </Row>
                    <br />
                    <Link to='/terms' style={{ fontSize: '25px' }}> terms and conditions </Link>
                </div>
            )
        }

    </div>
)

export default About