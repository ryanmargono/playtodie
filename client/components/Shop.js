import React from 'react'
import Nav from './Nav'
import { Col } from 'react-materialize'
import firebase from '../firebase'
import InfiniteScroll from 'react-infinite-scroller'

class Thoughts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            lastLoad: {},
            initialLoad: true,
            loadMore: true,
        }
        const db = firebase.firestore()
        const settings = { timestampsInSnapshots: true };
        db.settings(settings);
        this.productsRef = db.collection('products')
    }
    componentDidMount() {
        if (this.state.initialLoad) {
            this.productsRef
                .orderBy('date_created', 'desc')
                .limit(5)
                .get()
                .then(snapshot => {
                    let data = []
                    snapshot.forEach(doc => data.push(doc.data()))
                    this.setState({ products: data, lastLoad: snapshot.docs[snapshot.docs.length - 1], initialLoad: false }, () => console.log(this.state))
                })
        }
        this.productsRef.add({
            date_created: new Date().toString(),
            image: "https://firebasestorage.googleapis.com/v0/b/playtodie-86708.appspot.com/o/63%25%2Bproduct%2Bphoto1.png?alt=media&token=321ddf96-b752-4b3c-93f4-d79d9c3f7392",
            link: "https://www.playtodie.com/product/63"
        })
    }

    handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
        if (bottom && this.state.loadMore) this.loadMore();
    }

    loadMore = () => {
        console.log('loading')
        const prevLength = this.state.products.length
        this.productsRef
            .orderBy('date_created', 'desc')
            .startAfter(this.state.lastLoad)
            .limit(5)
            .get()
            .then(snapshot => {
                let data = []
                snapshot.forEach(doc => data.push(doc.data()))
                const products = [...this.state.products, ...data]
                const lastLoad = snapshot.docs[snapshot.docs.length - 1]
                if (prevLength === products.length) this.setState({loadMore: false})
                else this.setState({ products, lastLoad })
            })
    }

    render() {
        return (
            <div id="top" onScroll={this.handleScroll} className='mobileContainer'>
                <Nav />
                {
                    /Mobi/.test(navigator.userAgent) && (
                        <div>
                            <Col style={{ fontSize: '25px', paddingLeft: '5%', paddingRight: '5%', paddingBottom: '5%' }}>
                                {
                                    this.state.products.map(product => {
                                            return (<div key={product.value} style={{ marginBottom: '5%' }}> <a id='noHover' target="_blank" href={product.link}> <img style={{ height: 'auto', width: 'auto' }} src={product.image} /> </a></div>)
                                    })
                                }
                            </Col>
                        </div>
                    )
                }
                {
                    !/Mobi/.test(navigator.userAgent) && (
                        <div className="desktopContainer">
                            <Col style={{ fontSize: '25px', paddingTop: '20%', paddingLeft: '30%', paddingRight: '30%', paddingBottom:'5%' }}>
                                {
                                    this.state.products.map(product => {
                                        return (<div key={product.value} style={{ marginBottom: '5%' }}> <a id='noHover' target="_blank" href={product.link}> <img style={{ height: 'auto', width: 'auto' }} src={product.image} /> </a></div>)
                                    })
                                }
                            </Col>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Thoughts