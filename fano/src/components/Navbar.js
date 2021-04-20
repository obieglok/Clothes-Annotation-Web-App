import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'
import LogoImage from '../resources/Fano_logo.png'
class Navbar extends Component {
    render(){
        const {auth} = this.props;
        const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks/>
            return (
                <div>
                    <nav  className="navbarblur">
                        <div className="nav-wrapper" >
                            <a href="/"  id="brand"><img src={LogoImage} width="120" height="auto" alt="logo">
                            </img></a>
                            <a href="#" data-target="mobile-demo" className=" sidenav-trigger right"><i className=" material-icons iconBG">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                {links}
                            </ul>
                        </div>
                    </nav>
                    
                    <ul className="sidenav sidenav-close " id="mobile-demo">
                        {links}
                    </ul>

                </div>

            )
    }

    componentDidMount() {
        let sidenav = document.querySelector('#mobile-demo');
        M.Sidenav.init(sidenav, {edge:'right'});
    }
}
const mapStateToProps = (state) =>{
    console.log(state);
    return{
        auth: state.firebase.auth
    }
}
   
export default connect(mapStateToProps)(Navbar);

