import React, { Component } from 'react';
import UploadFile from './UploadFile'

class AdminDashboard extends Component { 
    render(){
        return (
            <div>
                <h1>
                AdminDashboard Page
                </h1>
                <br/>
                <UploadFile history={this.props.history}/>
            </div>
        )
    }
}

export default AdminDashboard
