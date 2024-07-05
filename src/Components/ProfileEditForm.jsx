import React, { useContext, useEffect } from "react";

import useFields from "../Hooks/useFields";
import useToggle from "../Hooks/useToggleState";
import CurrentUserContext from "../currentUserContext"
import { Navigate, useNavigate } from "react-router-dom";

const EditForm = ({editUser}) => {
    const navigate = useNavigate();
    let currentUser = useContext(CurrentUserContext)
    const [submit, toggleSubmit] = useToggle(false)

    const [formData, handleChange, resetFormData] = useFields({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email
    })


    const handleSubmit = e => {
        e.preventDefault();
            let updatedUser = {
            "firstName": formData.firstName.toString(),
            "lastName": formData.lastName.toString(),
            "email": formData.email.toString()
            }
            editUser({updatedUser})
            toggleSubmit()    
    }

    useEffect(function navIfSuccessSubmit() {
        async function checkSubmit(){
            if(submit === true){
                toggleSubmit();
                navigate('/');
            }
               
        }
        checkSubmit();
    }, [submit])

    return (
        <div className="EditForm">
            <h2>Edit User Profile</h2>
            <form className="EditForm-form" onSubmit={handleSubmit}>

                <label htmlFor="firstName" className="EditForm-label">First Name</label>
                <input
                    className="EditForm-input"
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />

                <label htmlFor="lastName" className="EditForm-label">Last Name</label>
                <input
                    className="EditForm-input"
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />

                <label htmlFor="email" className="EditForm-label">Email</label>
                <input
                    className="EditForm-input"
                    id="email"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />

                <button>Edit User</button>
            </form>
        </div>
    )
}

export default EditForm;