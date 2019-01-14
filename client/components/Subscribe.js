import React from 'react'
import Nav from './Nav'
import { Col } from 'react-materialize'

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
                        <div style={{ paddingTop:'5%', display: 'flex', alignItems: 'center', paddingLeft: '5%', paddingRight: '5%', fontSize: '25px' }}>
                            <div>
                                <Col style={{ minWidth: '100%' }}>
                                    <div style={{ height: '30px', fontSize: '20px' }}>
                                        email: <input onChange={this.onChange} style={{ width: '50%' }} />
                                    </div>
                                </Col>
                                <Col style={{ minWidth: '100%' }}>
                                    <div style={{ paddingTop: '4%' }}>
                                        <button onClick={this.submit} className='noStyleButton' style={{ fontSize: '15px' }}> subscribe </button>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    )
                }
                {
                    !/Mobi/.test(navigator.userAgent) && (
                        <div className='desktopContainer'>

                            <div style={{ marginTop: '20%', }}>
                                <div style={{ height: '40px', fontSize: '20px' }}>
                                    email: <input onChange={this.onChange} style={{ width: '15%' }} />
                                </div>
                                <div style={{ paddingTop: '2%' }}>
                                    <button onClick={this.submit} className='noStyleButton' style={{ fontSize: '20px' }}> subscribe </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Subscribe