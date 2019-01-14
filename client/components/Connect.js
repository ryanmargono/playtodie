import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { Col } from 'react-materialize'

const Connect = () => (
    <div id="top" className="mobileContainer">
        <Nav />
        {
            /Mobi/.test(navigator.userAgent) && (
                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '5%', paddingRight: '5%', fontSize: '25px' }}>
                    <div>

                        <Col style={{ minWidth: '100%' }}>
                            <a href='mailto: playtodie2000@gmail.com'> <p> for all email inquiries </p> </a>
                        </Col>
                        <Col style={{ minWidth: '100%' }}>
                            <a href="https://www.instagram.com/playtodie_/" target='_bank'> <p>instagram</p>  </a>
                        </Col>
                        <Col style={{ minWidth: '100%' }}>
                            <Link to='/subscribe'>  subscribe to our mailing list </Link>

                        </Col>
                    </div>
                </div>
            )
        }
        {
            !/Mobi/.test(navigator.userAgent) && (
                <div className='desktopContainer'>

                    <Col m={4} offset='m4' style={{ paddingTop: '20%', fontSize: '35px' }}>
                        <a href='mailto: playtodie2000@gmail.com'> <p> for all email inquiries </p> </a>
                        <a href="https://www.instagram.com/playtodie_/" target='_bank'> <p>instagram</p>  </a>
                        <Link to='/subscribe'>  <p> subscribe to our mailing list </p> </Link>
                    </Col>
                </div>
            )
        }
    </div>
)

export default Connect