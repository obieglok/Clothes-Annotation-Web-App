import React from 'react'
import { connect } from 'react-redux'
import { exportAnnotations } from '../store/actions/imageActions'


export const Test = (props) => {
    return ( 
        <div >
            <button className = "btn"
                    onClick = {() => {
                        console.log("clicked")
                        props.exportAnnotations()
                        } } >
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
    )
}

const mapStateToProps = (state) => ({
    annotationsJson: state.image.annotationsJson
})

const mapDispatchToProps = (dispatch) => {
    return {
        exportAnnotations: () => {
            console.log("clicked")
            dispatch(exportAnnotations())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)