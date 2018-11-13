import React from 'react'
import { Redirect } from 'react-router-dom'
import Nav from './common/Nav'
import { connect } from 'react-redux'
import { Row, Button, Col, Input } from 'react-materialize'

class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            zipcode: '',
            cuisineTypes: new Set(),
            distanceCode: 0,
            checked: {
                chinese: false,
                mexican: false,
                american: false,
            },
            message:'',
        }
    }

    onCheckboxChange = ({ target }, selected) => {
        const updatedSet = this.state.cuisineTypes
        const cuisineType = target.value
        if (selected) updatedSet.add(cuisineType)
        else {
            if (updatedSet.has(cuisineType)) {
                updatedSet.delete(cuisineType)
            }
        }
        const updatedCheckState = this.state.checked;
        updatedCheckState[cuisineType] = selected;
        this.setState({ cuisineType: updatedSet, checked: updatedCheckState })
    }

    onSelectChange = ({ target }) => {
        const select = target.value
        let code
        switch (select) {
            case "< 1 mile":
                code = 0
                break
            case "1 - 3 miles":
                code = 1
                break
            case "3+ miles":
                code = 2
                break
        }
        this.setState({ distanceCode: code })
    }

    onInputChange = ({ target }) => {
        this.setState({ zipcode: target.value }, ()=> console.log(this.state.zipcode))
    }

    onSave = () => {
        // updateUserSettings(this.state);
        // this.setState({message: 'saved'})
    }

    render() {
        if (!this.props.user.username) return <Redirect to='/login' />
        return (
            <div>
                <Nav />
                <Row>
                    <Col s={4} offset='s4'>
                        <Row>
                            <p> Zip Code: </p>
                            <Input onChange={this.onInputChange} s={12} placeholder="10003" value={this.state.zipcode}/>
                            <p> Cuisine Type: </p>
                            <br />
                            <Row>
                                <Input onChange={this.onCheckboxChange} type='checkbox' value='chinese' label='Chinese' checked={this.state.checked.chinese} />
                                <Input onChange={this.onCheckboxChange} type='checkbox' value='american' label='American' checked={this.state.checked.american} />
                                <Input onChange={this.onCheckboxChange} type='checkbox' value='mexican' label='Mexican' checked={this.state.checked.mexican} />
                            </Row>
                            <p> Maximum Distance: </p>
                            <Input type='select' s={12} onChange={this.onSelectChange}>
                                <option> {"< 1 mile"} </option>
                                <option> {"1 - 3 miles"}</option>
                                <option> {"3+ miles"} </option>
                            </Input>

                            <Button onClick={this.onSave}> Save </Button>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapState = ({ user }) => ({
    user
})

const mapDispatch = dispatch => ({
    
})
export default connect(mapState, mapDispatch)(Settings)