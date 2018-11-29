import React from 'react'
import { connect } from 'react-redux'
import styles from './common/styles'
import { Collection, CollectionItem } from 'react-materialize'

const History = props => {
    if (props.user.visited.length){
        return (
            <div> 
                <h3> History: </h3>
                <div style={styles.fixedContent}>
                <Collection>
                {
                    props.user.visited.map(rest => <CollectionItem> {rest} </CollectionItem> )
                }
                </Collection>
                </div>
               
            </div>
        )
    }
    return null
}

const mapState = ({user}) => ({
    user
})

export default connect(mapState, null)(History)