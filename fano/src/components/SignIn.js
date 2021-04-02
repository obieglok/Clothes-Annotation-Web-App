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
            <container className='main-c'>
                    <div className='fano-text'>
                        <h1>Annotate clothes.
                            bring them to life</h1>
                    </div>
                    <div className='lgn details'>
                        <div className="lgn-inner ">
                            <form className='frm1' onSubmit={this.handleSubmit}>
                                <div className='form-row'>
                                    <input type='email' className='form-c' name='email' id='email'
                                    placeholder='email' required onChange={this.handleChange}/>
                                </div>
                                <div className='form-row'>
                                    <input type='password' className='form-c'name='password' id='password'
                                    placeholder='password' required onChange={this.handleChange}/>
                                </div>
                                <div className='form-row-btn'>
                                    <div className='lgn-c'>
                                        <button  className='btn waves-effect waves-light blue accent-4'> Login </button>
                                    </div>
                                </div>
                           
                            <div className="lgn-row-logo">
                               
                                <div className="col s12 red-text center">
                                {authError && <p>Login error. Please check your details</p> }
                                </div>
                                <div className="regis">
                                    <span>Don't have an account? </span>
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