import React from 'react'
import Nav from './Nav'
import { Col } from 'react-materialize'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

class Subscribe extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }

    onChange = e => {
        this.setState({ email: e.target.value })
    }

    submit = () => {

    }

    render() {
        return (
            <div id="top" className="mobileContainer">
                <Nav />
                {
                    /Mobi/.test(navigator.userAgent) && (
                        <MailchimpSubscribe
                            url={"https://playtodie.us17.list-manage.com/subscribe/post?u=24ec1ce5897b00a3990d3e410&id=5d792baf4f"}
                            render={({ subscribe, status, message }) => (
                                <div style={{ paddingTop: '5%', display: 'flex', alignItems: 'center', paddingLeft: '5%', paddingRight: '5%', fontSize: '25px' }}>
                                    <div>
                                        <Col style={{ minWidth: '100%' }}>
                                            <div style={{ height: '30px', fontSize: '20px' }}>
                                                email: <input onChange={this.onChange} style={{ width: '50%', paddingLeft: '1%' }} />
                                            </div>
                                        </Col>
                                        <Col style={{ minWidth: '100%' }}>
                                            <div style={{ paddingTop: '4%' }}>
                                                <button onClick={() => subscribe({ EMAIL: this.state.email })} id='noStyleButton' style={{ fontSize: '15px' }}> subscribe </button>
                                            </div>
                                        </Col>
                                    </div>
                                </div>
                            )}
                        />
                    )
                }
                {
                    !/Mobi/.test(navigator.userAgent) && (
                        <MailchimpSubscribe
                            url={"https://playtodie.us17.list-manage.com/subscribe/post?u=24ec1ce5897b00a3990d3e410&id=5d792baf4f"}
                            render={({ subscribe, status, message }) => (
                                <div className='desktopContainer'>
                                    <div style={{ marginTop: '20%', }}>
                                        <div style={{ height: '40px', fontSize: '20px' }}>
                                            email: <input onChange={this.onChange} style={{ width: '15%', paddingLeft: '1%' }} />
                                        </div>
                                        <div style={{ paddingTop: '2%' }}>
                                            <button onClick={() => subscribe({ EMAIL: this.state.email })} id='noStyleButton' style={{ fontSize: '20px' }}> subscribe </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    )
                }
            </div>
        )
    }
}

export default Subscribe