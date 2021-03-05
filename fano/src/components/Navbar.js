import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    componentDidMount() {
        let sidenav = document.querySelector('#mobile-demo');
        M.Sidenav.init(sidenav, {edge:'right'});
    }
    render() {
        return (
            <div>
                <nav  className="blue lighten-3">
                    <div className="nav-wrapper">
                        <a href="#!" className=" brand-logo " id="brand">Fano</a>
                        <a href="#" data-target="mobile-demo" className=" sidenav-trigger right"><i className=" material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                
                <ul className="sidenav " id="mobile-demo">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

            </div>

        )
    }
}
export default Navbar

