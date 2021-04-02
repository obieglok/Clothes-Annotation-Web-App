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
            <div className="left adminSideNav">
            <table id="adminSideNav" >
                <tbody>
                <tr><td><button onClick={this.handleClick} className="none " value="uploadComponent">Upload</button></td></tr>
                <tr><td><button onClick={this.handleClick} className="none" value='userTableComponent'>Users</button></td></tr>
                <tr><td><button onClick={this.handleClick} className="none " value='exportComponent'>Export</button></td></tr>
                </tbody>
            </table>
            </div>

        )
    }

}

   
export default AdminSideNav;

