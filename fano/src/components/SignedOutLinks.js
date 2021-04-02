import React from 'react'
import {NavLink} from 'react-router-dom'
export const SignedOutLinks = () => {
    return (
       <ul className="right">
           <li><NavLink to='/register' >Sign Up</NavLink></li>
           <li><NavLink to='/signIn' > Log In</NavLink></li>  
           <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li> 
       </ul>

    )
}

export default SignedOutLinks;
