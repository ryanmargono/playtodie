import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Col, Row, Button, Collection, CollectionItem, Input } from 'react-materialize'
import styles from './common/styles'
import Nav from './common/Nav'
import { retrieveRests } from '../store/restaurants'

class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: '',
            restaurants: [],
            allRests: []
        }
    }

    componentDidMount() {
        if (!this.state.restaurants.length) {
            this.props.retrieveRests().then(() => {
                this.setState({ restaurants: this.props.restaurant.feed, allRests: this.props.restaurant.feed })
            })
        }
    }

    onChange = e => {
        this.setState({ filter: e.target.value }, () => {
            const filtered = this.state.allRests.filter(rest => rest.name.toLowerCase().includes(this.state.filter.toLowerCase()))
            this.setState({ restaurants: filtered })
        })
    }

    onClick = () => {
        this.props.retrieveRests().then(() => {
            this.setState({ restaurants: this.props.restaurant.feed, allRests: this.props.restaurant.feed, filter: '' })
        })
    }

    render() {
        if (!this.props.user.settings) {
            const toast = document.querySelector('#toast-container>.toast');
            if (toast) toast.remove();
            window.Materialize.toast('please update your settings first!', 3000)
            return <Redirect to='/settings' />
        }
        if (!this.props.user.username) return <Redirect to='/login' />
        return (
            <div>
                <Nav />
                <div className='center'>
                    <Row>
                        <Col s={4} offset='s4' style={styles.settings}>
                            <Button style={{ marginTop: '5%' }} onClick={this.onClick}> refresh feed </Button>
                            <Row>
                                <Input type='text' onChange={this.onChange} s={12} placeholder="Filter by Restaurant Name" value={this.state.filter} defaultValue={this.state.filter} />
                            </Row>
                            <Row>
                                <div style={styles.fixedContent2}>
                                    <Collection>
                                        {
                                            this.state.restaurants &&
                                            this.state.restaurants.reverse().map(rest => (
                                                <CollectionItem> {`${rest.username} 🍴 ${rest.name}`} </CollectionItem>
                                            ))
                                        }
                                    </Collection>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const mapState = ({ user, restaurant }) => ({
    user,
    restaurant
})
const mapDispatch = dispatch => ({
    retrieveRests: () => dispatch(retrieveRests())
})
export default connect(mapState, mapDispatch)(Feed)