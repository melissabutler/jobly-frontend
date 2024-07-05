import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Components/Home";

import CompaniesList from "./Components/CompaniesList";
import CompanyDetails from "./Components/CompanyDetails";

import JobsList from "./Components/JobsList";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm"
import LogOut from "./Components/LogOut";
import Profile from "./Components/Profile";
import CurrentUserContext from "./currentUserContext";


const RoutesList = ({login, signUp, logOut, editUser, applyToJob}) => {
    const currentUser = useContext(CurrentUserContext)

    return (
        <Routes>
            <Route 
                path='/'
                element={<Home />}
            />

            <Route 
                path='/companies'
                element={currentUser ? (<CompaniesList />) : (<Navigate replace to="/"/>)}
            />

            <Route
                path='/companies/:handle'
                element={currentUser ? (<CompanyDetails />) : (<Navigate replace to="/"/>)}
            />

            <Route 
                path='/jobs'
                element={ currentUser ? (<JobsList applyToJob={applyToJob}/>) : (<Navigate replace to="/"/>)}
            />

            <Route 
                path='/login'
                element={<LoginForm login={login}/>}
            />
            
            <Route 
                path="/signup"
                element={<SignupForm signUp={signUp}/>}
            />

            <Route
                path='/logout'
                element={<LogOut logOut={logOut}/>}
            />

            <Route 
                path="/profile"
                element={currentUser ? (<Profile editUser={editUser}/>) : (<Navigate replace to="/"/>)}
            />

            <Route 
                path="/*"
                element={<Navigate to='/'/>}
                />
        </Routes>
    )
}

export default RoutesList;