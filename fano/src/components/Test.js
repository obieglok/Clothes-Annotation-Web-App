import React from 'react'
import { connect } from 'react-redux'
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
        fetchNextImage: () => dispatch(fetchNextImage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)