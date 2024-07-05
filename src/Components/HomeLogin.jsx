import React from "react";

const HomeLogin = ({user}) => {
    return (
        <div className="Home">
            <h1>Jobly</h1>
            <h3>All the jobs in one convenient place.</h3>
            <h2>Welcome back, {user.firstName} {user.lastName}! </h2>
        </div>
    )
}

export default HomeLogin;