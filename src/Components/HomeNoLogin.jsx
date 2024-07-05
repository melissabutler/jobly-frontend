import React from "react";
import { Link } from "react-router-dom";

import "./HomeNoLogin.css"

const HomeNoLogin = () => {
    return (
        <div className="Home">
            <div className="Home-content">
                <h1 className="Home-title">Jobly</h1>
                <h3 className="Home-desc">All the jobs in one convenient place.</h3>
                <button className="Home-button"><Link to="/login">Log In</Link></button>
                <button className="Home-button"><Link to="/signup">Sign Up</Link></button>
       
            </div>
            

        </div>
    )
}

export default HomeNoLogin;