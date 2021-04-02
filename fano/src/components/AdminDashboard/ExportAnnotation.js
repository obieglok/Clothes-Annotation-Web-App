import React ,{ Component } from 'react';
import {connect} from 'react-redux'
import { exportAnnotations } from '../../store/actions/imageActions'

 export const ExportAnnotations= (props) => { 
    return(
        <div className="container">
        <p> CLick Below to Export All the Annotations</p>
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExportAnnotations);