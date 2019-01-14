import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-materialize'

const About = () => (
    <div id="top" className="desktopContainer">
    <Nav />
        {
            /Mobi/.test(navigator.userAgent) && (
                <div>
                    <Row style={{ marginTop: '20%' }}>
                        <Col s={12} m={4} offset='m4' className='text' style={{fontSize: '25px'}}>
                            playtodie uses open source information to discover a deeper meaning of the world and the self.
                        <br /> <br />
                            conceptualized by jason seidman
                    </Col>
                    </Row>
                    <br />
                    <Link to='/terms' style={{fontSize: '15px'}}> terms and conditions </Link>
                </div>
            )
        }
        {
            !/Mobi/.test(navigator.userAgent) && (
                <div>
                    <Row style={{ marginTop: '20%' }}>
                        <Col s={12} m={4} offset='m4' className='text'>
                            playtodie uses open source information to discover a deeper meaning of the world and the self.
                            <br /> <br />
                            conceptualized by jason seidman
                        </Col>
                    </Row>
                    <br />
                    <Link to='/terms' style={{fontSize: '25px'}}> terms and conditions </Link>
                </div>
            )
        }

    </div>
)

export default About