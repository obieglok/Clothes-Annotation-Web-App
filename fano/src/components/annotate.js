import React, { Component } from "react";

import { connect } from "react-redux";
import {
  commitAnnotation,
  fetchNextImage,
  skipNextImage,
} from "../store/actions/imageActions";

class annotate extends Component {
  state = {
    annotationText: "",
    colorCount: 1,
  };

  componentDidMount() {
    this.props.fetchNextImage();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let annotation = {
      imageId: this.props.fetchedImage.imageId,
      imageName: this.props.fetchedImage.imageName,
      content: {
        ...this.state,
      },
    };
    this.props.commitAnnotation(annotation);
    e.target.reset();
  };

  render() {
    return (
      <div className="container annotationPage">
        <div className="row">
          <div className="col s12 l7">
            <div>
              <img
                className="responsive-img"
                src={
                  this.props.fetchedImage && this.props.fetchedImage.imageUrl
                }
                alt=""
              />
            </div>
          </div>
          <div className="col s12 l5">
            <div className="annotation-row">
              <form className="" onSubmit={this.handleSubmit}>
                <div>
                  <label className="annot-txt" htmlFor="annotationText">
                    Enter the visible text.
                  </label>
                  <input
                    className="annot-c"
                    type="text"
                    id="annotationText"
                    name="annotationText"
                    onChange={this.handleChange}
                  />
                </div>
                <div></div>
                <label className="annot-txt" htmlFor="colorCount">
                  Enter the number of colors on the shirt.
                </label>
                <input
                  className="annot-c"
                  type="text"
                  id="colorCount"
                  name="colorCount"
                  onChange={this.handleChange}
                />
                <button
                  type="submit"
                  className="btn waves-effect waves-light blue accent-4 annoateButtons"
                >
                  Submit
                </button>
              </form>
              <button
                className="btn waves-effect waves-light teal accent-4 skipButton annoateButtons"
                onClick={() => this.props.skipImage()}
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  annotationsJson: state.image.annotationsJson,
  fetchedImage: state.image.fetchedImage,
});

const mapDispatchToProps = (dispatch) => {
  return {
    commitAnnotation: (annotation) => {
      dispatch(commitAnnotation(annotation));
    },
    fetchNextImage: () => dispatch(fetchNextImage()),
    skipImage: () => dispatch(skipNextImage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(annotate);
