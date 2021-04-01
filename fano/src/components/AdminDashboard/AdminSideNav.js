import React, { Component } from 'react';
class AdminSideNav extends Component {
    
    constructor(props) {
        super(props);
        this.state = { comp: '' };
      }

    handleClick = (e) => {
        e.preventDefault();
        this.props.toggleComponent(e.target.value);
    }
    render(){
        return (
            <div className="left width=200px">
            <table id="AdminSideNav" >
                <tbody>
                <tr><td><button onClick={this.handleClick} className="none " value="uploadComponent">Upload</button></td></tr>
                <tr><td><button onClick={this.handleClick} className="none" value='userTableComponent'>Users</button></td></tr>
                <tr><td><button onClick={this.handleClick} className="none " value='settingsComponent'>Settings</button></td></tr>
                </tbody>
            </table>
            </div>

        )
    }

}

   
export default AdminSideNav;

