import React, { useContext, useEffect } from "react";
import useFields from "../Hooks/useFields";
import { useNavigate } from "react-router-dom"
import CurrentUserContext from "../currentUserContext";

import "./SignupForm.css"

const SignupForm = ({signUp}) => {
    const currentUser = useContext(CurrentUserContext)
    
    const navigate = useNavigate()

    const [formData, handleChange, resetFormData] = useFields({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    })

    const handleSubmit = e => {
        e.preventDefault();
        if(!formData.username || !formData.password || !formData.firstName || !formData.lastName || !formData.email){
            alert("Please fill out the form.")
        } else {
            let newUser = {
                "username": formData.username.toString(),
                "password": formData.password.toString(),
                "firstName": formData.firstName.toString(),
                "lastName": formData.lastName.toString(),
                "email": formData.email.toString()
            }
                signUp({newUser})
            
        }   
    }

    useEffect(function navIfSignUp() {
        async function checkUser() {
            if(currentUser){
                navigate('/')
            }
        }
        checkUser();
    }, [currentUser])

    return (
        <div className="SignupForm">
            <h1>Sign Up</h1>
            <form className="SignupForm-form" onSubmit={handleSubmit}>
                <div className="SignupForm-section">
                    <div className="SignupForm-section-label">
                        <label className="SignupForm-label" htmlFor="username">Username</label>
                    </div>
                    <input 
                        className="SignupForm-input"
                        id="username"
                        name="username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                    />
                </div>
                
                <div className="SignupForm-section">
                    <div className="SignupForm-section-label">
                        <label className="SignupForm-label" htmlFor="password">Password</label>
                    </div>
                    
                    <input 
                        className="SignupForm-input"
                        id="password"
                        name="password"
                        type="text"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </div>
                
                
                <div className="SignupForm-section">
                    <div className="SignupForm-section-label">
                        <label className="SignupForm-label" htmlFor="firstName">First Name</label>
                    </div>
                    
                    <input 
                        className="SignupForm-input"
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    </div>
                
                <div className="SignupForm-section">
                    <div className="SignupForm-section-label">
                        <label className="SignupForm-label" htmlFor="username">Last Name</label>
                    </div>
                    <input 
                        className="SignupForm-input"
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                </div>
                
                <div className="SignupForm-section">
                        <div className="SignupForm-section-label">
                        <label className="SignupForm-label" htmlFor="username">Email</label>
                        </div>
                    
                    <input 
                        className="SignupForm-input"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </div>
                

                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm;