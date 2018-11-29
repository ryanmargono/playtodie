import React from 'react'
import Nav from './common/Nav'
import { Row, Col, Input, Button } from 'react-materialize'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { userAuthReq } from '../store/user'
import styles from '../components/common/styles'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                username: '',
                password: '',
            },
            showError: false,
            disabled: true
        }
    }

    componentDidMount(){
        window.Materialize.toast('please log in, if you dont have an account one will be made for you!', 6000)
    }

    onSubmit = event => {
        event.preventDefault();
        this.setState({showError: false}, 
            ()=> this.props.userAuthReq(this.state.user)
                    .then(()=> this.setState({showError: true})))
    }

    onInputChange = ({ target }) => {
        const { name, value } = target
        const updatedState = this.state.user
        updatedState[name] = value
        this.setState({ showError: false, user: updatedState }, 
            ()=>{
                if (this.state.user.username && this.state.user.password) this.setState({disabled: false})
                else {
                    const toast = document.querySelector('#toast-container>.toast');
                    if (toast) toast.remove();
                    window.Materialize.toast('please enter a username and password!', 3000)
                    this.setState({disabled: true})
                }
            })
    }

    render() {
        if ((!this.state.user.username.length || !this.state.user.password.length) && this.state.showError) {
            const toast = document.querySelector('#toast-container>.toast');
            if (toast) toast.remove();
            window.Materialize.toast('please enter a username and password!', 3000)
        }
        else if (this.props.user.error && this.state.showError) {
            const toast = document.querySelector('#toast-container>.toast');
            if (toast) toast.remove();
            window.Materialize.toast(this.props.user.error, 3000)
        }
        if (this.props.user.username) {
            const toast = document.querySelector('#toast-container>.toast');
            if (toast) toast.remove();
            window.Materialize.toast('log in success!', 3000)
            return <Redirect to='/' />
        }
        return (
            <div>
                <Nav />
                    <Row>
                        <Col s={4} offset='s4' style={styles.login}>
                            <Row>
                                <Input onChange={this.onInputChange} name='username' label="username" s={12} placeholder="username" />
                                <Input onChange={this.onInputChange} name='password' type="password" label="password" s={12} />
                                <Button disabled={this.state.disabled} onClick={this.onSubmit}> Enter </Button>
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
    userAuthReq: user => dispatch(userAuthReq(user)),
})

export default connect(mapState, mapDispatch)(Login)