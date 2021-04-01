import React from 'react'
import { connect } from 'react-redux'
import { makeAdmin } from '../store/actions/authActions'
import { exportAnnotations, fetchNextImage } from '../store/actions/imageActions'


export const Test = (props) => {
    return (
        <div>
            <div className="row" >
                <button className="btn"
                    onClick={() => {
                        console.log("clicked")
                        props.exportAnnotations()
                    }} >
                    export annotation
            </button>
                {props.annotationsJson && <a
                    className="btn"
                    style={{ margin: 10 }}
                    href={URL.createObjectURL(props.annotationsJson)}
                    download="data.json"
                >
                    DOWNLOAD DATA AS JSON
            </a>}
            </div>
            <div className="row">
                <button className="btn"
                        onClick={() => props.fetchNextImage()}>
                    Fetch next image
                </button>
            </div>
            <div>
                <img src={props.fetchedImage && props.fetchedImage.imageUrl} alt=""/>
            </div>

            <div class="annotation row">
                <form class= "annot_row">
                    <label for="fname">Enter the visible text.:</label>
                    <input type="text" id="disp text" name="disp text"></input>
                    <label for="fname">Enter the visible color on the shirt.</label>
                    <input type="text" id="disp color" name="disp color"></input>
                    <button className="btn"
                        onClick={() => props.commitAnnotations()}>
                    Submit annotations
                </button>
                </form>
            </div>

            <div>
                <button className="btn"
                        onClick={() => props.makeAdmin({
                            email: "sam.alarco@gmail.com"
                        })}>
                    Make Admin
                </button>
            </div>
        
        
        </div>
        

    )
}

const mapStateToProps = (state) => ({
    annotationsJson: state.image.annotationsJson,
    fetchedImage: state.image.fetchedImage
})

const mapDispatchToProps = (dispatch) => {
    return {
        exportAnnotations: () => {
            dispatch(exportAnnotations())
        },
        fetchNextImage: () => dispatch(fetchNextImage()),
        makeAdmin: (cred) => dispatch(makeAdmin(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)