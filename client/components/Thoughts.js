import React from 'react'
import Nav from './Nav'
import { Col } from 'react-materialize'
const images = require.context('../../public/images', false)

class Thoughts extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            thoughts: []
        }
    }
    render(){
        return (
            <div id="top" className="desktopContainer">
            <Nav />
            {
                /Mobi/.test(navigator.userAgent) && (
                    <Col style={{fontSize: '25px', paddingTop: '35%'}}>
                    </Col>
                )
            }
                    {
                !/Mobi/.test(navigator.userAgent) && (
                    <Col style={{fontSize: '25px', paddingTop: '35%'}}>
                    </Col>
                )
            }
        </div>
        )
    }
}

export default Thoughts