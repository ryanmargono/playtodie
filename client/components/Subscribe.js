import React from 'react'
import Nav from './Nav'

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
            <div id="top" className="desktopContainer">
                <Nav />
                {
                    /Mobi/.test(navigator.userAgent) && (
                        <div style={{ paddingTop: '35%' }}>
                            <div style={{ height: '30px', fontSize: '20px' }}>
                                email: <input onChange={this.onChange} style={{ width: '50%' }} />
                            </div>
                            <div style={{ paddingTop: '4%' }}>
                                <button onClick = {this.submit} className='noStyleButton' style={{ fontSize: '15px' }}> subscribe </button>
                            </div>
                        </div>
                    )
                }
                {
                    !/Mobi/.test(navigator.userAgent) && (
                        <div style={{ marginTop: '20%', }}>
                            <div style={{ height: '40px', fontSize: '20px' }}>
                                email: <input onChange={this.onChange} style={{ width: '15%' }} />
                            </div>
                            <div style={{ paddingTop: '2%' }}>
                                <button onClick = {this.submit} className='noStyleButton' style={{ fontSize: '20px' }}> subscribe </button>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Subscribe