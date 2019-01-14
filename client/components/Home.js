import React from 'react'
import { Row, Col } from 'react-materialize'
import { Link } from 'react-router-dom'

const Home = () => {
    if (/Mobi/.test(navigator.userAgent)) return (
        <div id="top" className="desktopContainer">
            <Row style={{ paddingTop: '5%', marginBottom: '0' }}>
                <Col s={4}>
                    <div> playtodie </div>
                </Col>
                <Col s={4}>
                    <img className='image' src='/logo.png'></img>
                </Col>
            </Row>
            <Row style={{ paddingTop: '5%' }}>
                <div className="homeButtons" style={{ paddingLeft: '25%', paddingRight: '25%' }}>
                    {['shop', 'thoughts', 'about', 'connect'].map(page => (
                        <div style={{ height: '75px', marginBottom: '15%' }} key={page}>
                            {page === 'shop' && (
                                <a href='https://www.playtodie.com/' target='_blank'>
                                    <button> {page} </button>
                                </a>
                            )
                            }
                            {page !== 'shop' && (
                                <Link to={`/${page}`}>
                                    <button> {page} </button>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </Row>
            <Row style={{ paddingTop: '5%' }}>
                <div>
                    <a href="https://www.instagram.com/playtodie_/" target='_bank'>
                        <svg id='igIcon' viewBox="0 0 512.00096 512.00096" xmlns="http://www.w3.org/2000/svg"><path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0" /><path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0" /><path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0" /></svg>
                    </a>
                    <p> subscribe </p>
                </div>
            </Row>
        </div>
    )
    return (
        <div className="desktopContainer">
            <Row style={{ paddingTop: '5%', marginBottom: '0' }}>
                <Col s={4}>
                    <div style={{ alignItems: 'left' }}>
                        playtodie
                    </div>
                </Col>
                <Col s={4}>
                    <img  className='image' className='image' src='/logo.png'></img>
                </Col>
                <Col s={4}>
                </Col>
            </Row>
            <Row style={{ paddingTop: '7%' }}>
                <div className="homeButtons" style={{ paddingLeft: '13%', paddingRight: '13%' }}>
                    {['shop', 'thoughts', 'about', 'connect'].map(page => (
                        <Col m={3} key={page} style={{ height: '100px' }}>
                            {page === 'shop' && (
                                <a href='https://www.playtodie.com/' target='_blank'>
                                    <button> {page} </button>
                                </a>
                            )
                            }
                            {page !== 'shop' && (
                                <Link to={`/${page}`}>
                                    <button> {page} </button>
                                </Link>
                            )}
                        </Col>
                    ))}
                </div>
            </Row>
            <Row style={{ paddingTop: '5%' }}>
                <div>
                    <a href="https://www.instagram.com/playtodie_/" target='_bank'>
                        <svg id='igIcon' viewBox="0 0 512.00096 512.00096" xmlns="http://www.w3.org/2000/svg"><path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0" /><path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0" /><path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0" /></svg>
                    </a>
                    <p> subscribe </p>
                </div>
            </Row>
        </div >
    )
}

export default Home