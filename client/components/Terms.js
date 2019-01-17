import React from 'react'
import Nav from './Nav'
import { Col, Row } from 'react-materialize';

const Terms = () => (
    <div id="top" className="mobileContainer">
        <Nav />
        {
            /Mobi/.test(navigator.userAgent) && (
                <Col s={12} m={4} offset='m4' style={{ marginTop: '5%', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '20%', fontSize: '25px' }}>
                    by using our website, you agree to our terms of use. terms are subject to change without notice.
                <br /> <br />
                    return policy
                <br /> <br />
                    all sales are final, returns are not accepted. in case of damaged or missing products, we offer full refunds or exchanges for items of equal value. we reserve the right to refuse return requests at any time.
                <br /> <br />
                    payment
                <br /> <br />
                    prices are listed in USD. we accept Visa, MasterCard, Discover, and American Express credit card payments. we also accept payments via Paypal.
                <br /> <br />
                    shipping
                <br /> <br />
                    playtodie ships all orders via USPS. domestic (US) orders are shipped via first class ground shipping. international orders are shipped via USPS priority mail.
            </Col>
            )
        }
        {
            !/Mobi/.test(navigator.userAgent) && (
                <div className='desktopContainer'>
                    <Row style={{ marginTop: '17%', marginBottom: '5%' }}>
                        <Col m={8} offset='m2' style={{ fontSize: '35px' }}>
                            by using our website, you agree to our terms of use. terms are subject to change without notice.
                <br /> <br />
                            return policy
                <br /> <br />
                            all sales are final, returns are not accepted. in case of damaged or missing products, we offer full refunds or exchanges for items of equal value. we reserve the right to refuse return requests at any time.
                <br /> <br />
                            payment
                <br /> <br />
                            prices are listed in USD. we accept Visa, MasterCard, Discover, and American Express credit card payments. we also accept payments via Paypal.
                <br /> <br />
                            shipping
                <br /> <br />
                            playtodie ships all orders via USPS. domestic (US) orders are shipped via first class ground shipping. international orders are shipped via USPS priority mail.
                    </Col>
                    </Row>
                </div>
            )
        }
    </div>
)

export default Terms