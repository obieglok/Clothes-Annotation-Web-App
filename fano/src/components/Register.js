import react from "react";

import { connect } from "react-redux";
import { signUp } from "../store/actions/authActions";
import { Redirect } from "react-router-dom";

class Register extends react.Component {
  state = {
    email: "",
    password: "",
  };

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
    return (
      <div className="body-sign-in-register">
        <div className="register">
          <div className="lgn details">
            <div className="lgn-inner">
              <form className="frm1" onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    className="form-c"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    className="form-c"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="email"
                    className="form-c"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="password"
                    className="form-c"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="password"
                    className="form-c"
                    name="password"
                    placeholder="Re-enter password"
                    required
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-row-btn">
                  <div className="consent-span">
                    
                    by registering, I agree to the
                    <a href="/policy"> Privacy Statement </a>
                    and
                    <a href="/terms"> Terms of service </a>
                  </div>

                  <div className="valid-age">
                  <label htmlFor="age-rq">
                      <input type="checkbox" id="age-rq" name="age-rq" className="filled-in" required/>
                      <span>by checking this box you are agreeing that you are at
                      least 18 years of age.</span>
                    </label>
                    
                  </div>

                  <div className="lgn-c">
                    <button
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
        </div>
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