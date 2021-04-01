import React, { Component } from 'react';
import UploadFile from './UploadFile'
import UserTable from './UserTable'

class AdminDashboard extends Component { 
    render(){
        return (
            <div>
                <h1>
                Admin Dashboard Page
                </h1>
                <br/>
                <UserTable history={this.props.history}/>
            </div>
        )
    }
}

export default AdminDashboard
