import React, { useContext } from "react";
import CurrentUserContext from "../currentUserContext";

import HomeLogin from "./HomeLogin";
import HomeNoLogin from "./HomeNoLogin";

import "./Home.css"

const Home = () => {
    let currentUser = useContext(CurrentUserContext)

    let page = "";
    
    if(!currentUser){
        page = <HomeNoLogin />
    } else {
        page = <HomeLogin user={currentUser} />
    }
    return (
        <div className="Home">
            {page}
        </div>
    )
}

export default Home;