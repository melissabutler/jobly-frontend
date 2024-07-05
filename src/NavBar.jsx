import React, {useContext} from "react";
import { Link } from "react-router-dom";

import "./NavBar.css"

import CurrentUserContext from "./currentUserContext";

function NavBar() {
    let currentUser = useContext(CurrentUserContext)
    let links = [];

    if(!currentUser){
        links = [
                <Link className="NavBar-link user" key="login" to='/login'>Login</Link>, 
                <Link className="NavBar-link user" key="signup" to='/signup'>Sign Up</Link>
            ]
    } else {
        links = [
                <Link className="NavBar-link content" key="companies" to='/companies'>Companies</Link>,
                <Link className="NavBar-link content" key="jobs" to='/jobs'>Jobs</Link>,
                <Link className="NavBar-link user" key="logout" to='/logout'>Log Out</Link>,
                <Link className="NavBar-link user" key="profile" to='/profile'>Profile</Link>
    ]
    }

    return (
        <nav className="NavBar">
            <Link className="NavBar-link home" key="home" to='/'>Jobly</Link>
            {links}

        </nav>
    )
}

export default NavBar;