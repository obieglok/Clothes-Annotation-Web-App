import React ,{ Component } from 'react';
import {connect} from 'react-redux'
import {uploadImages} from '../../store/actions/imageActions'
import { Redirect ,withRouter} from 'react-router-dom'

class UploadFile extends Component {
    state = {
        file : null,
        name:''
    }
    handleChange = (e) => {
        if(e.target.id =='file'){
            this.setState({
                [e.target.id]: e.target.files[0]
            })
        }
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault()
        this.props.uploadImages(this.state);
        this.props.history.push('/');
     
    }
    render() {
        const  {auth} = this.props
        if (!auth.uid) {
            return <Redirect to='/' />
        }
        return(
            <div className="container col s12 m6">
            <form onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Upload Files</h5>
                <div className="input-field">
                    <label htmlFor="email">FileName</label>
                    <input  type ="text" name='name' id="name" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <input type="file" name="file" id="file" onChange={this.handleChange} />
                    
                </div>
                <div className="input-field">
                    <button className="btn blue lighten-1 z-depth-0">Upload</button>
                </div>
            </form> 
        </div>
         )

    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        uploadImages: (file) => dispatch(uploadImages(file))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadFile))
