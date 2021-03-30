import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'

class Navbar extends Component {
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
    componentDidMount() {
        let sidenav = document.querySelector('#mobile-demo');
        M.Sidenav.init(sidenav, {edge:'right'});
    }
<<<<<<< Updated upstream
}
const mapStateToProps = (state) =>{
    console.log(state);
    return{
        auth: state.firebase.auth
        
=======
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
>>>>>>> Stashed changes
    }
}
export default connect(mapStateToProps)(Navbar);

