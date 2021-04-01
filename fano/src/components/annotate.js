import react from 'react';

import {connect} from 'react-redux'
//import {annotate} from '../store/actions/authActions'
import { exportAnnotations, fetchNextImage } from '../store/actions/imageActions'


export const annotate = (props) => {
    
        return (
            <div>
               
                <div class="annot-boxs">

                    <div class="annot-img">
                        <img src={props.fetchedImage && props.fetchedImage.imageUrl} alt=""/>
                    </div>

                    <div class="annotation-row">
                        <form class= "annot_row">
                            <label class="annot-txt" for="text">Enter the visible text.</label>
                            <input class='annot-c' type="text" id="disp text" name="disp text"></input>
                            <label class="annot-txt" for="text">Enter the visible color on the shirt.</label>
                            <input class='annot-c' type="text" id="disp color" name="disp color"></input>
                            <button class="lgn-btn"
                                onClick={() => props.commitAnnotations()}>
                            Submit annotations
                        </button>
                        </form>
                        <button class="lgn-btn"
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