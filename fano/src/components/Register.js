import react from "react";

import { grid } from "@material-ui/core";
import { connect } from "react-redux";
import { signUp } from "../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { Box } from "@material-ui/core";

class Register extends react.Component {
  state = {
    email: "",
    password: "",
    checked:false,
  };

  changeAgeValidity(){
    this.setState({checked:!this.state.checked})
    console.log("you are at least 18:"+this.state.checked)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };

 


  render() {
    const { authError, auth } = this.props;
    if (auth.uid) {
      return <Redirect to="/" />;
    }

    let fake_box = this.state.checked ? "fake-box-2" : "fake-box-1";
    let age_text = this.state.checked ? "X" : " ";
        
    return (
      <div className="body-sign-in-register">
        <container className="register">
          <div class="lgn details">
            <div class="lgn-inner">
              <form class="frm1" onSubmit={this.handleSubmit}>
                <div class="form-row">
                  <input
                    type="text"
                    class="form-c"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div class="form-row">
                  <input
                    type="text"
                    class="form-c"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div class="form-row">
                  <input
                    type="email"
                    class="form-c"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div class="form-row">
                  <input
                    type="password"
                    class="form-c"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div class="form-row">
                  <input
                    type="password"
                    class="form-c"
                    name="password"
                    placeholder="Re-enter password"
                    required
                    onChange={this.handleChange}
                  />
                </div>

                <div class="form-row-btn">
                  <div class="consent-span">
                    by registering, I agree to the 
                    <a href="/policy"> Privacy Statement </a>
                     and
                    <a href="/terms"> Terms of service </a> 
                  </div>
                  


                  <div class="valid-age">
                    <div class="age-verif">
                    <div class="age-1">
                       by checking this box you are agreeing that you are at least 18 years of age.
                      </div> 
                        <div class={fake_box} onClick={this.changeAgeValidity.bind(this)}>
                        <p>{age_text}</p>
                      </div>
                   </div>
                    </div>


                  <div class="lgn-c">
                    <button
                      submit={this.handleSubmit}
                      className="btn waves-effect waves-light blue accent-4 blockButton"
                    >
                      {" "}
                      Register
                    </button>
                  </div>

                  <div className="col s12 red-text center">
                    {authError && <p>Login error. Please check your details</p>}
                  </div>
                  <div className="regis">
                    <span>Already have an account? </span>
                    <a href="/signIn">
                      <span className="redirect">log in here.</span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

{
  /* <label for="fname">First name:</label><br/>
     <input type="text" id="fname" name="fname"/><br/>
     <label for="lname">Last name:</label><br/>
     <input type="text" id="lname" name="lname"/> */
}
