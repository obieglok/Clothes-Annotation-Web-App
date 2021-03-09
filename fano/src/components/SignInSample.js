import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class Signin extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state)
    }

    render() {

        const {authError, auth} = this.props
        if (auth.uid) {
            return <Redirect to='/' />
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="card-panel col s12 m6 offset-m3" style={{padding: "20px", marginTop: "3rem"}}>
                        <form onSubmit={this.handleSubmit} className="white">
                            <h5>Sign in</h5>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <button className="btn green right lighten-1 z-depth-0">Login</button>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col s12 red-text center">
                                {authError && <p>Login error. Please check your details</p> }
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)