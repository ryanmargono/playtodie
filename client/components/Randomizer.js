import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-materialize'
import { fetchRest, clearRest } from '../store/restaurants'
import { saveRest } from '../store/user'

class Randomizer extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    findResturant = () => {
        this.props.fetchRest({...this.props.user.settings, cuisineTypes: Array.from(this.props.user.settings.cuisineTypes)}).then(()=> {
            const toast = document.querySelector('#toast-container>.toast');
            if (toast) toast.remove();
            window.Materialize.toast('found a restaurant!', 3000)
        })
    }
    saveRest = () => {
        const toast = document.querySelector('#toast-container>.toast');
        if (toast) toast.remove();
        window.Materialize.toast('Restaurant has been saved!', 3000)
        const data = {
            name: this.props.restaurant.current.name,
            username: this.props.user.username
        }
        this.props.saveRest(data, this.props.user._id)
        this.props.clearRest()
    }
    render() {
        return (
            <div>
                {this.props.restaurant.current.name && 
                    <div>
                        <h3> <a href={this.props.restaurant.current.url} target="blank"> {this.props.restaurant.current.name} </a> </h3>
                        <img src={this.props.restaurant.current.image_url} style={{maxHeight: 200}} />
                        <p> {`Address: ${this.props.restaurant.current.location}`} </p>
                        <p>  {`Rating: ${this.props.restaurant.current.rating}/5`} </p>
                        <p>  {`Price: ${this.props.restaurant.current.price}`} </p>
                        <p>  {`Tags: ${this.props.restaurant.current.cuisineTypes}`} </p>
                        <Button onClick={this.saveRest}> Choose this Resturant </Button>
                    </div>
                }
                <div style={{paddingTop:'5%'}}> <Button onClick={this.findResturant}> Find Random Resturant </Button> </div>
                
            </div>
    
        )
    }
}

const mapState = ({user, restaurant}) => ({
    user,
    restaurant
})

const mapProps = dispatch => ({
    fetchRest: settings => dispatch(fetchRest(settings)),
    saveRest: (data, id) => dispatch(saveRest(data, id)),
    clearRest: () => dispatch(clearRest())
})

export default connect(mapState, mapProps)(Randomizer)