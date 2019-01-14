import React from 'react'
import Nav from './Nav'
import { Col } from 'react-materialize'
import firebase from '../firebase'
import InfiniteScroll from 'react-infinite-scroller'

class Thoughts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            thoughts: [],
            lastLoad: {},
            initialLoad: true,
            loadMore: true,
        }
        const db = firebase.firestore()
        const settings = { timestampsInSnapshots: true };
        db.settings(settings);
        this.thoughtsRef = db.collection('thoughts')
    }
    componentDidMount() {
        console.log(this.state)
        if (this.state.initialLoad) {
            this.thoughtsRef
                .orderBy('date_created', 'desc')
                .limit(5)
                .get()
                .then(snapshot => {
                    let data = []
                    snapshot.forEach(doc => data.push(doc.data()))
                    this.setState({ thoughts: data, lastLoad: snapshot.docs[snapshot.docs.length - 1], initialLoad: false }, () => console.log(this.state))
                })
        }
    }

    handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
        if (bottom && this.state.loadMore) this.loadMore();
    }

    loadMore = () => {
        const prevLength = this.state.thoughts.length
        this.thoughtsRef
            .orderBy('date_created', 'desc')
            .startAfter(this.state.lastLoad)
            .limit(5)
            .get()
            .then(snapshot => {
                let data = []
                snapshot.forEach(doc => data.push(doc.data()))
                const thoughts = [...this.state.thoughts, ...data]
                const lastLoad = snapshot.docs[snapshot.docs.length - 1]
                if (prevLength === thoughts.length) this.setState({loadMore: false})
                else this.setState({ thoughts, lastLoad })
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
                                    this.state.thoughts.map(thought => {
                                        if (thought.type === 'image') {
                                            return (<div key={thought.value} style={{ marginBottom: '5%' }}><img style={{ height: 'auto', width: 'auto' }} src={thought.value} /></div>)
                                        }
                                        if (thought.type === 'text') {
                                            return (<div key={thought.value} style={{ backgroundColor: 'white', textAlign: 'left', marginBottom: '5%', paddingLeft: '1%', paddingRight: '1%', paddingTop: '1%', paddingBottom: '1%' }}> {thought.value} </div>)
                                        }
                                        if (thought.type === 'link') {
                                            return (<div key={thought.value} style={{ marginBottom: '5%' }}> <a href={thought.value} target='_blank'> {thought.value} </a> </div>)
                                        }
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
                                    this.state.thoughts.map(thought => {
                                        if (thought.type === 'image') {
                                            return (<div key={thought.value} style={{ marginBottom: '5%' }}><img style={{ height: 'auto', width: 'auto' }} src={thought.value} /></div>)
                                        }
                                        if (thought.type === 'text') {
                                            return (<div key={thought.value} style={{ backgroundColor: 'white', textAlign: 'left', marginBottom: '5%', paddingLeft: '1%', paddingRight: '1%', paddingTop: '1%', paddingBottom: '1%' }}> {thought.value} </div>)
                                        }
                                        if (thought.type === 'link') {
                                            return (<div key={thought.value} style={{ marginBottom: '5%' }}> <a href={thought.value} target='_blank'> {thought.value} </a> </div>)
                                        }
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