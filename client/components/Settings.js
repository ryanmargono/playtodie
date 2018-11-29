import React from 'react'
import { Redirect } from 'react-router-dom'
import Nav from './common/Nav'
import { connect } from 'react-redux'
import { Row, Button, Col, Input, CardPanel } from 'react-materialize'
import { updateSettingsReq } from '../store/user'
import styles from './common/styles'

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
            load: false,
            redirect: false,
            disabled: true,
        }
    }

    componentDidMount() {
        if (this.props.user.settings) {
            const defaultSettings = this.props.user.settings
            const defaultChecked = this.state.checked
            defaultSettings.cuisineTypes.forEach(type => defaultChecked[type] = true)
            defaultSettings.cuisineTypes = new Set(defaultSettings.cuisineTypes)
            this.setState({ settings: defaultSettings, checked: defaultChecked },
                () => {
                    if (this.state.settings.zipcode && this.state.settings.cuisineTypes.size && this.state.settings.distanceCode !== null) this.setState({ disabled: false })
                })
        }
        this.setState({ load: true })
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
        this.setState({ settings: updatedSettings, checked: updatedChecks, disabled: false },
            () => {
                if (!this.state.settings.zipcode || !this.state.settings.cuisineTypes.size || this.state.settings.distanceCode === null) this.setState({ disabled: true })
            })
    }

    onSelectChange = ({ target }) => {
        const updatedSettings = this.state.settings
        updatedSettings.distanceCode = target.value
        this.setState({ settings: updatedSettings, disabled: false },
            () => {
                if (!this.state.settings.zipcode || !this.state.settings.cuisineTypes.size || this.state.settings.distanceCode === null) this.setState({ disabled: true })
            })
    }

    onInputChange = ({ target }) => {
        const updatedSettings = this.state.settings
        let value = target.value;
        if (value.length > 5 || value.length < 5) {
            value = value.substring(0, 5)
            const toast = document.querySelector('#toast-container>.toast');
            if ((toast && !toast.innerHTML === 'the zipcode has to be 5 numbers!') || !toast) window.Materialize.toast('the zipcode has to be 5 numbers!', 3000)
            this.setState({ disabled: true })
        }
        else {
            updatedSettings.zipcode = value
            this.setState({ settings: updatedSettings, disabled: false },
                () => {
                    if (!this.state.settings.zipcode || !this.state.settings.cuisineTypes.size || this.state.settings.distanceCode === null) this.setState({ disabled: true })
                })
        }
    }

    onSave = e => {
        e.preventDefault()
        const settings = this.state.settings
        settings.cuisineTypes = Array.from(settings.cuisineTypes)
        this.props.updateSettingsReq(this.props.user._id, settings)
            .then(() => {
                if (!this.props.user.settings.error) {
                    window.Materialize.toast('Settings have been successfully saved!', 3000)
                }
                else {
                    window.Materialize.toast('Error!', 3000)
                }
                this.setState({ redirect: true })
            })

    }

    render() {
        if (this.state.redirect) return <Redirect to='/' />
        if (!this.props.user.username) return <Redirect to='/login' />
        if (this.state.load) return (
            <div>
                <Nav />
                <div className='center'>
                    <Row>
                        <Col s={4} offset='s4' style={styles.settings}>
                            <Row>
                                <p> <b> Zip Code: </b></p>
                                <Input type='number' onInput={this.onInputChange} pattern='[0-9]' limit="5" s={12} placeholder="10003" value={this.state.zipcode} defaultValue={this.state.settings.zipcode} />
                                <p> <b> Cuisine Type: </b> </p>
                                <br />
                                <Row>
                                    <Input onChange={this.onCheckboxChange} type='checkbox' value='chinese' label='Chinese' checked={this.state.checked.chinese} />
                                    <Input onChange={this.onCheckboxChange} type='checkbox' value='american' label='American' checked={this.state.checked.american} />
                                    <Input onChange={this.onCheckboxChange} type='checkbox' value='mexican' label='Mexican' checked={this.state.checked.mexican} />
                                </Row>
                                <p> <b> Maximum Distance: </b> </p>
                                <Input type='select' s={12} onChange={this.onSelectChange} defaultValue={this.state.settings.distanceCode.toString()}>
                                    <option value="0"> {"< 1 mile"} </option>
                                    <option value="1"> {"1 - 3 miles"}</option>
                                    <option value="2"> {"3+ miles"} </option>
                                </Input>

                                <Button disabled={this.state.disabled} onClick={this.onSave}> Save </Button>
                            </Row>
                        </Col>
                    </Row>
                </div>
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