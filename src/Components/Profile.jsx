import React, { useContext, useEffect } from "react";
import CurrentUserContext from "../currentUserContext";
import { useNavigate } from "react-router-dom";

import ProfileEditForm from "./ProfileEditForm";

const Profile = ({editUser}) => {
    const currentUser = useContext(CurrentUserContext)

    return (
        <div className="Profile">
            <h1>{currentUser.username}</h1>
            <ProfileEditForm editUser={editUser}/>
        </div>
    )

}

export default Profile;