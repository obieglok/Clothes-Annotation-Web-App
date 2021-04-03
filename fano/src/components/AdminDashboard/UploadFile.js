import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadImages } from "../../store/actions/imageActions";
import { Redirect, withRouter } from "react-router-dom";

class UploadFile extends Component {
  state = {
    file: "",
    name: "",
  };
  handleChange = (e) => {
    if (e.target.id == "file") {
      this.setState(
        {
          [e.target.id]: e.target.files[0],
        },
        () => {
          console.log(this.state);
        }
      );
    } else {
      this.setState({
        [e.target.id]: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.uploadImages(this.state.file);
    this.props.history.push("/");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container row s12 m6">
        <form onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Upload Files</h5>
          
            <div className="input-field annotationPage">
              <input
                type="file"
                name="file"
                id="file"
                onChange={this.handleChange}
              />
              <button className="btn blue lighten-1 z-depth-0 annoateButtons">
                Upload
              </button>
            </div>
          
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    uploadImages: (file) => dispatch(uploadImages(file)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UploadFile)
);
