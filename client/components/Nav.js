import React from 'react'
import { Col, Row } from 'react-materialize'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mobile: false,
            drawer: false,
            margin: '45%'
        }
    }
    componentDidMount() {
        if (/Mobi/.test(navigator.userAgent)) this.setState({ mobile: true })
    }

    toggleDrawer = () => {
        document.getElementById('top').scrollTop = 0
        this.setState({ drawer: !this.state.drawer }, ()=>{
            if (this.state.drawer) this.setState({margin: '15%'})
            else this.setState({margin:'45%'})
        })
    }

    back = () => window.history.back()

    render() {
        if (this.state.mobile) return (
            <div style={{marginBottom: this.state.margin}}>
                <div className='mobileBackground'>
                    <div className='mobileHeader'>
                        <Row style={{ height: 'auto', overflow: 'auto', display: 'flex', alignItems: 'center', paddingTop: '5%', }}>
                            <Col s={4}>
                                <i className="material-icons" onClick={this.back}> arrow_back </i>
                            </Col>
                            <Col s={4}>
                                <Link to='/'><img className='image' src='/logo.png' style={{ height: 'auto', transform: 'scale(0.6)' }}></img></Link>
                            </Col>
                            <Col s={4}>
                                <i className="material-icons" onClick={this.toggleDrawer}> menu </i>
                            </Col>
                        </Row>
                    </div>
                    {
                        this.state.drawer &&
                        <div style={{ paddingTop: '35%' }}>
                            {
                                ['shop', 'thoughts', 'about', 'connect'].map((page, i) => {
                                    return (
                                        <div key={page} className="mobileNav">
                                            <hr />
                                                <Link to={`/${page}`}>
                                                    <button> {page} </button>
                                                </Link>
                                            {page == 'connect' && <hr />}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        )
        return (
            <Row className="desktopHeader" style={{ paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%', display: 'flex', alignItems: 'center', position: 'fixed', fontSize: '30px' }}>
                <Col s={2} style={{ marginLeft: 0 }}> <Link to='/shop'> shop </Link></Col>
                <Col s={2}> <Link to='/thoughts'> thoughts </Link> </Col>
                <Col s={2}> <Link to='/'> <img className='image' src='/logo.png' style={{ transform: 'scale(0.7)' }}></img> </Link> </Col>
                <Col s={2}> <Link to='/about'> about </Link> </Col>
                <Col s={2}> <Link to='/connect'> connect </Link> </Col>
            </Row>
        )
    }
}

export default Nav