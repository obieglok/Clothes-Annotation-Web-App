import React from 'react'
import UserProfile from './UserProfile'
import {signIn} from '../store/actions/imageActions'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
const Home = (props) => {
    const {authError, auth} = props
    if (!auth.uid) {
        return <Redirect to='/signIn' />
    }
    return (
        <div>
            <UserProfile/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)( Home)
