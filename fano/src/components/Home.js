import React from 'react'
import UserProfile from './UserProfile'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
const Home = (props) => {
    const {auth} = props
    if (!auth.uid) {
        return <Redirect to='/signIn' />
    }
    return (
        <div className="container marginFromFooter">
            <UserProfile />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)( Home)
