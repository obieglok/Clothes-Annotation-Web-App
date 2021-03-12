import react from 'react';
import { grid } from '@material-ui/core';
import {connect} from 'react-redux'
import {signIn} from '../store/actions/authActions'
import { Redirect } from 'react-router-dom'




class SignIn extends react.Component {

    state = {
        email:'',
        password:''

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
    render(){
        const {authError, auth} = this.props
        if (auth.uid) {
            return <Redirect to='/' />
        }
        return(
            <container class='main-c'>
                    <div class='fano-text'>
                        <h1>Annotate clothes.
                            bring them to life</h1>
                    </div>
                    <div class='lgn details'>
                        <div class="lgn-inner ">
                            <form class='frm1'>
                                <div class='form-row'>
                                    <input type='email' class='form-c' name='email'
                                    placeholder='email' required onChange={this.handleChange}/>
                                </div>
                                <div class='form-row'>
                                    <input type='password' class='form-c'name='password'
                                    placeholder='password' required onChange={this.handleChange}/>
                                </div>
                                <div class='form-row-btn'>
                                    <div class='lgn-c'>
                                        <button submit={this.handleSubmisson} class='lgn-btn'
                                        > Login </button>
                                    </div>
                                </div>
                            <div class="lgn-row-2">
                                <div class="sid">
                                    <span>Or continue with</span>
                                </div>
                            </div>
                            <div class="lgn-row-logo">
                                <div class="app-logos">
                                    <a href='#'>
                                        <div class="app-lg a">
                                            <span>a</span>
                                        </div>
                                    </a>
                                    <a href='#'>    
                                        <div class="app-lg a">
                                            <span>a</span>
                                        </div>
                                    </a>
                                    <a href='#'>
                                        <div class="app-lg a">
                                            <span>a</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col s12 red-text center">
                                {authError && <p>Login error. Please check your details</p> }
                                </div>
                                <div class="regis">
                                    <span>Don't an account? </span>
                                    <a href='/register'><span>sign up here.</span></a>
                                </div>
                            </div>
                            </form>
                        </div>
                </div>
            </container>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)