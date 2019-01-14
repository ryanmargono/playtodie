import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import { Col } from 'react-materialize'

const Connect = () => (
    <div id="top" className="desktopContainer">
    <Nav />
        {
            /Mobi/.test(navigator.userAgent) && (
                <Col style={{fontSize: '25px', paddingTop: '35%'}}>
                    <a href='mailto: '> <p> for all email inquiries </p> </a>
                    <a href="https://www.instagram.com/playtodie_/" target='_bank'> <p>instagram</p>  </a>
                    <Link to='/subscribe'>  <p> subscribe to our mailing list </p> </Link>
                </Col>
            )
        }
        {
            !/Mobi/.test(navigator.userAgent) && (
                <Col m={4} offset='m4' style={{paddingTop: '20%', fontSize:'35px'}}>
                    <a href='mailto: '> <p> for all email inquiries </p> </a>
                    <a href="https://www.instagram.com/playtodie_/" target='_bank'> <p>instagram</p>  </a>
                    <Link to='/subscribe'>  <p> subscribe to our mailing list </p> </Link>
                </Col>
            )
        }
    </div>
)

export default Connect