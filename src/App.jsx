import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter, Navigate, useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";

import CurrentUserContext from './currentUserContext';
import RoutesList from "./RoutesList";
import NavBar from './NavBar';
import JoblyApi from '../api';
import useLocalStorage from './Hooks/useLocalStorage';

import './App.css'

function App() {
  const [token, setToken] = useLocalStorage("token", null)
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", null);

/** On load of page, check if there is a user token or change to user token, and if so, set currentUser to be used throughout app */
  useEffect(function checkUserLogin() {
    async function getUser() {
      if(token){
        let decodedToken = jwtDecode(token);
        let username = decodedToken.username;
        let res = await JoblyApi.GetUser({token}, username);
        setCurrentUser(res.user)
      }
    }
    getUser();
  }, [token]);
/** When editUser form is submitted in profile, call API with updatedUser, user token, and username. If succeeded, update currentUser */
  async function editUser({updatedUser}) {
    try {
      let user= currentUser;
      let res = await JoblyApi.EditUser({updatedUser}, token, user.username)
      setCurrentUser(res.user)
    } catch(err){
      alert(err)
    }
  } 
/** When login form is submitted, call API. If successfull, set token. */
  async function login({user}) {
    try {
      let res = await JoblyApi.LogInUser({user})
      setToken(res.token)
    } catch(err) {
      alert(err)
    }
  }

  /** When logout is called, set token and currentUser to null. */

  const logOut = () => {
    try{
      setToken(null);
      setCurrentUser(null);
    } catch(err){
      alert(err)
    }
  }

  /** When sign up form is called, call API to register new user. If successful, set token. */

  async function signUp({newUser}) {
    try{
      let res = await JoblyApi.registerUser({newUser})
      setToken(res.token)
    } catch(err){
      alert(err)
    }
  }

  /** When job application submitted, call API to register application. */

  async function applyToJob(jobId) {
    try{
      let res = await JoblyApi.applyToJob(currentUser.username, jobId)
    } catch(err){
      alert(err)
    }
  }

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <NavBar />
        <RoutesList login={login} signUp={signUp} logOut={logOut} editUser={editUser} applyToJob={applyToJob}/>
      </BrowserRouter></CurrentUserContext.Provider>
    </div>
   
  )
}

export default App;
