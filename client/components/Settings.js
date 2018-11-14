import React from 'react'
import { Redirect } from 'react-router-dom'
import Nav from './common/Nav'
import { connect } from 'react-redux'
import { Row, Button, Col, Input } from 'react-materialize'
import { updateSettingsReq } from '../store/user'

class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            settings: {
                zipcode: '',
                cuisineTypes: new Set(),
                distanceCode: 0,
            },
            checked: {
                chinese: false,
                mexican: false,
                american: false,
            },
            load: false
        }
    }

    componentDidMount(){
        if (this.props.user.settings) {
            const defaultSettings = this.props.user.settings
            const defaultChecked = this.state.checked
            defaultSettings.cuisineTypes.forEach(type => defaultChecked[type] = true)
            defaultSettings.cuisineTypes = new Set(defaultSettings.cuisineTypes)
            this.setState({settings: defaultSettings, checked: defaultChecked})
        }
        this.setState({load: true})
    }

    onCheckboxChange = ({ target }, selected) => {
        const updatedCuisines = this.state.settings.cuisineTypes
        const cuisineType = target.value
        if (selected) updatedCuisines.add(cuisineType)
        else {
            if (updatedCuisines.has(cuisineType)) {
                updatedCuisines.delete(cuisineType)
            }
        }
        const updatedChecks = this.state.checked
        updatedChecks[cuisineType] = selected
        const updatedSettings = this.state.settings
        updatedSettings.cuisineTypes = updatedCuisines
        this.setState({ settings: updatedSettings, checked: updatedChecks })
    }

    onSelectChange = ({ target }) => {
        const updatedSettings = this.state.settings
        updatedSettings.distanceCode = target.value
        this.setState({ settings: updatedSettings })
    }

    onInputChange = ({ target }) => {
        const updatedSettings = this.state.settings
        updatedSettings.zipcode = target.value
        this.setState({ settings: updatedSettings })
    }

    onSave = e => {
        e.preventDefault()
        const settings = this.state.settings
        settings.cuisineTypes = Array.from(settings.cuisineTypes)
        this.props.updateSettingsReq(this.props.user._id, settings)
    }

    render() {
        console.log(this.state)
        if (!this.props.user.username) return <Redirect to='/login' />
        if (this.state.load) return (
            <div>
                <Nav />
                <Row>
                    <Col s={4} offset='s4'>
                        <Row>
                            <p> Zip Code: </p>
                            <Input onChange={this.onInputChange} s={12} placeholder="10003" value={this.state.zipcode} defaultValue={this.state.settings.zipcode}/>
                            <p> Cuisine Type: </p>
                            <br />
                            <Row>
                                <Input onChange={this.onCheckboxChange} type='checkbox' value='chinese' label='Chinese' checked={this.state.checked.chinese} />
                                <Input onChange={this.onCheckboxChange} type='checkbox' value='american' label='American' checked={this.state.checked.american} />
                                <Input onChange={this.onCheckboxChange} type='checkbox' value='mexican' label='Mexican' checked={this.state.checked.mexican} />
                            </Row>
                            <p> Maximum Distance: </p>
                            <Input type='select' s={12} onChange={this.onSelectChange} defaultValue={this.state.settings.distanceCode.toString()}>
                                <option value="0"> {"< 1 mile"} </option>
                                <option value="1"> {"1 - 3 miles"}</option>
                                <option value="2"> {"3+ miles"} </option>
                            </Input>

                            <Button onClick={this.onSave}> Save </Button>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
        else return null
    }
}

const mapState = ({ user }) => ({
    user
})

const mapDispatch = dispatch => ({
    updateSettingsReq: (id, settings) => dispatch(updateSettingsReq(id, settings))
})
export default connect(mapState, mapDispatch)(Settings)