import React, { Component } from "react";

import { connect } from 'react-redux'
import { commitAnnotation, fetchNextImage } from '../store/actions/imageActions'


class annotate extends Component {

    state = {
        annotationText: "",
        colorCount: 1
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        }, () => {
            console.log(this.state)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submitted")
        let annotation = {
            imageId: this.props.fetchedImage.imageId,
            content: {
                ...this.state
            }
        }

        console.log(annotation)
        this.props.commitAnnotation(annotation)
        e.target.resetForm()
    }

    render() {
        return (
            <div>

                <div className="annot-boxs">
                    <div className="row">
                        <div className="col s12 l7">
                            <div >
                                <img className="responsive-img" src={this.props.fetchedImage && this.props.fetchedImage.imageUrl} alt="" />
                            </div>
                        </div>
                        <div className="col s12 l5">
                            <div className="annotation-row">
                                <form className=""
                                    onSubmit={this.handleSubmit}>
                                    <label className="annot-txt" htmlFor="annotationText">Enter the visible text.</label>
                                    <input className='annot-c'
                                        type="text"
                                        id="annotationText"
                                        name="annotationText"
                                        onChange={this.handleChange} />
                                    <label className="annot-txt" htmlFor="colorCount">Enter the visible color on the shirt.</label>
                                    <input className='annot-c'
                                        type="text"
                                        id="colorCount"
                                        name="colorCount"
                                        onChange={this.handleChange} />
                                    <button type="submit"
                                        className="lgn-btn">
                                        Submit annotations
                                    </button>
                                </form>
                                <button className="lgn-btn"
                                    onClick={() => this.props.fetchNextImage()}>
                                    Fetch next image
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    annotationsJson: state.image.annotationsJson,
    fetchedImage: state.image.fetchedImage
})

const mapDispatchToProps = (dispatch) => {
    return {
        commitAnnotation: (annotation) => {
            dispatch(commitAnnotation(annotation))
        },
        fetchNextImage: () => dispatch(fetchNextImage()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(annotate)