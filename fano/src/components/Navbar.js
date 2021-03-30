import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'

class Navbar extends Component {
<<<<<<< HEAD
    render() {
        return (
            <div>
                <nav  className="blue lighten-3">
                    <div className="nav-wrapper">
                        <a href="/" className=" left " id="brand">Fano</a>
                        <a href="#" data-target="mobile-demo" className=" sidenav-trigger right"><i className=" material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>
                </nav>
                
                <ul className="sidenav " id="mobile-demo">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>

            </div>

        )
    }

=======
    render(){
        const {auth} = this.props;
        const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks/>
            return (
                <div>
                    <nav  className="blue lighten-3">
                        <div className="nav-wrapper">
                            <a href="/" className=" left " id="brand">Fano</a>
                            <a href="#" data-target="mobile-demo" className=" sidenav-trigger right"><i className=" material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                {links}
                            </ul>
                        </div>
                    </nav>
                    
                    <ul className="sidenav " id="mobile-demo">
                        {links}
                    </ul>

                </div>

            )
    }
>>>>>>> parent of bcf0861 (Merge pull request #39 from iamiraklis/userTableDashboard)
    componentDidMount() {
        let sidenav = document.querySelector('#mobile-demo');
        M.Sidenav.init(sidenav, {edge:'right'});
    }
}
const mapStateToProps = (state) =>{
    console.log(state);
    return{
        auth: state.firebase.auth
<<<<<<< HEAD
<<<<<<< HEAD
=======
        
>>>>>>> parent of bcf0861 (Merge pull request #39 from iamiraklis/userTableDashboard)
=======
        
>>>>>>> parent of 1317e71 (user table)
    }
}
   
export default connect(mapStateToProps)(Navbar);

