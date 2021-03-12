import react from 'react';

import { grid } from '@material-ui/core';
import {connect} from 'react-redux'
import {signUp} from '../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class register extends react.Component{
state={
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
            <container>

                <div class='fano-text'>
                    <h1>Annotate clothes.
                        bring them to life
                    </h1>
                </div>
            <div class='lgn details register'>
                <div class="lgn-inner ">
                    <form class='frm1' onSubmit={this.handleSubmit}>
                        <div class='form-row'>
                            <input type='text' class='form-c' name='email'
                            placeholder='first name' required onChange={this.handleChange}/>
                        </div>
                        <div class='form-row'>
                            <input type='text' class='form-c'name='password'
                            placeholder='last name' required onChange={this.handleChange}/>
                        </div>
                        <div class='form-row'>
                            <input type='email' class='form-c' name='email'
                            placeholder='email' required onChange={this.handleChange}/>
                        </div>
                        <div class='form-row'>
                            <input type='password' class='form-c'name='password'
                            placeholder='enter a password' required onChange={this.handleChange}/>
                        </div>
                        <div class='form-row'>
                            <input type='password' class='form-c' name='password'
                            placeholder='re enter password' required onChange={this.handleChange}/>
                        </div>
                        
                        <div class='form-row-btn'>
                            <div class='lgn-c'>
                                <button submit={this.handleSubmisson} class='lgn-btn'
                                > Create an account</button>
                            </div>

                            <div className="col s12 red-text center">
                                {authError && <p>Login error. Please check your details</p> }
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
            signUp: (creds) => dispatch(signUp(creds))
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(register)
    
  
    {/* <label for="fname">First name:</label><br/>
     <input type="text" id="fname" name="fname"/><br/>
     <label for="lname">Last name:</label><br/>
     <input type="text" id="lname" name="lname"/> */}