import react from 'react';

import {connect} from 'react-redux'
//import {annotate} from '../store/actions/authActions'
import { exportAnnotations, fetchNextImage } from '../store/actions/imageActions'


export const annotate = (props) => {
        return (
            <div>
               
                <div className="annot-boxs">

                    <div className="annot-img">
                        <img src={props.fetchedImage && props.fetchedImage.imageUrl} alt=""/>
                    </div>

                    <div className="annotation-row">
                        <form className= "annot_row">
                            <label className="annot-txt" htmlFor="text">Enter the visible text.</label>
                            <input className='annot-c' type="text" id="disp text" name="disp text"></input>
                            <label className="annot-txt" htmlFor="text">Enter the visible color on the shirt.</label>
                            <input className='annot-c' type="text" id="disp color" name="disp color"></input>
                            <button className="lgn-btn"
                                onClick={() => props.commitAnnotation()}>
                            Submit annotations
                        </button>
                        </form>
                        <button className="lgn-btn"
                                onClick={() => props.fetchNextImage()}>
                            Fetch next image
                        </button>
                    </div>
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
        //makeAdmin: (cred) => dispatch(makeAdmin(cred))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(annotate)