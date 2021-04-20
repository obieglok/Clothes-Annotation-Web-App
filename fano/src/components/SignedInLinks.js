import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../store/actions/authActions'
export const SignedInLinks = (props) => {
    const {profile } = props
    if(!profile.isAdmin){
        return (
            <ul className="right test111">
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
                 <li><Link to="/contact">Contact</Link></li>
                 <li><a onClick={props.signOut}> Log Out</a></li>
            </ul>
     
         )
    } else{
        return (
            <ul className="right ">
                 <li ><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
                 <li><Link to="/contact">Contact</Link></li>
                 <li><Link to="/adminDash"> Admin </Link></li>
                <li><a onClick={props.signOut}> Log Out</a></li>
            </ul>
     
         )
    }
}
const mapStateToProps = (state) => {
    return{
        profile: state.firebase.profile
    }
  }
const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);