import React, { Component } from "react";
import UploadFile from "./UploadFile";
import AdminSideNav from "./AdminSideNav";
import UserTable from "./UserTable";
import ExportAnnotations from "./ExportAnnotation";
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
class AdminDashboard extends Component {
  state = {
    currentMode: "uploadComponent",
    isDesktop: false,
  };
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ isDesktop: window.innerWidth > 1450 });
  };
  getComponents(currentMode) {
    const components = {
      uploadComponent: <UploadFile history={this.props.history} />,
      userTableComponent: <UserTable history={this.props.history} />,
      exportComponent: <ExportAnnotations history={this.props.history} />,
    };
    return components[currentMode];
  }
  toggleComponent = (currentMode) => {
    this.setState({ currentMode: currentMode });
  };
  render() {
    
    const {profile } = this.props
    if(!profile.isAdmin) return <Redirect to='/'/>
    const isDesktop = this.state.isDesktop;
    if (isDesktop) {
      return (
        <div className=" adminDashLarge userpage marginFromFooter ">
          <br />
          <AdminSideNav toggleComponent={this.toggleComponent} />
          <div>{this.getComponents(this.state.currentMode)}</div>
        </div>
      );
    } else {
      return (
        <div className=" adminDashLarge userpage marginFromFooter">
          <h5 class="center-align">Dashboard</h5>
          <br />
          <div className="container">
            <div className="card">
              <UploadFile />
            </div>
            <div className="card">
              <UserTable />
            </div>
            <div className="card">
              <ExportAnnotations />
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return{
      profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(AdminDashboard);
