import React from 'react'
import { Col, Row } from 'react-materialize'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobile: false,
            drawer: false,
        }
    }
    componentDidMount() {
        if (/Mobi/.test(navigator.userAgent)) this.setState({ mobile: true })
    }

    toggleDrawer = () => {
        document.getElementById('top').scrollTop = 0
        this.setState({ drawer: !this.state.drawer })
    }

    back = () => window.history.back()

    render() {
        if (this.state.mobile) return (
            <div>
                <div style={{position: 'fixed'}}>
                    <Row style={{ height: 'auto', overflow: 'auto', display: 'flex', alignItems: 'center', paddingTop: '5%', }}>
                        <Col s={4}>
                            <i className="material-icons" onClick={this.back}> arrow_back </i>
                        </Col>
                        <Col s={4}>
                            <Link to='/'><img src='/logo.png' style={{ height: 'auto', transform: 'scale(0.6)' }}></img></Link>
                        </Col>
                        <Col s={4}>
                            <i className="material-icons" onClick={this.toggleDrawer}> menu </i>
                        </Col>
                    </Row>
                </div>
                <div style={{paddingTop: '35%', paddingBottom: '5%'}}>
                    {
                        this.state.drawer && ['shop', 'thoughts', 'about', 'connect'].map((page, i) => {
                            return (
                                <div key={page} className="mobileNav">
                                    <hr />
                                    {page === 'shop' && (
                                        <a href='https://www.playtodie.com/products' target='_blank'>
                                            <button> {page} </button>
                                        </a>
                                    )
                                    }
                                    {page !== 'shop' && (
                                        <Link to={`/${page}`}>
                                            <button> {page} </button>
                                        </Link>
                                    )}
                                    {page == 'connect' && <hr />}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        )
        return (
            <Row style={{ paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%', display: 'flex', alignItems: 'center', position: 'fixed', fontSize: '30px' }}>
                <Col s={2} style={{ marginLeft: 0 }}> <a href='https://www.playtodie.com/products' target='_blank'> shop </a> </Col>
                <Col s={2}> <Link to='/thoughts'> thoughts </Link> </Col>
                <Col s={2}> <Link to='/'> <img src='/logo.png' style={{ transform: 'scale(0.7)' }}></img> </Link> </Col>
                <Col s={2}> <Link to='/about'> about </Link> </Col>
                <Col s={2}> <Link to='/connect'> connect </Link> </Col>
            </Row>
        )
    }
}

export default Nav