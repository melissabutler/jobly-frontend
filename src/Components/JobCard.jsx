import React, { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../currentUserContext";

import "./JobCard.css"

import useLocalStorage from "../Hooks/useLocalStorage";

const JobCard = ({company, job, applyToJob}) => {
    const currentUser = useContext(CurrentUserContext)
    const [applications, setApplications] = useState([...currentUser.applications])
    const [newJobId, setNewJobId] = useLocalStorage("newJobId", [])

    const handleClick = e => {
        e.preventDefault();
        applyToJob(job.id)
        setNewJobId(job.id)
    }
useEffect( function checkApplication() {
    async function getUserApplications(){
        setApplications([...applications, newJobId])
    }
    getUserApplications()
}, [newJobId])
    

    return (
        <div className="JobCard">
            <div className="JobCard-content">
                <h2 className="JobCard-title">{job.title}</h2>
                {company === true &&
                <h3 className="JobCard-company">{job.companyName}</h3>
                }
                <ul className="JobCard-stats">
                    <li>Salary: {job.salary}</li>
                    <li>Equity: {job.equity}</li>
                </ul>
                {applications.includes(job.id) ?
                    <button disabled>Applied</button> :
                    <button onClick={handleClick}>Apply</button>}
            </div>
            
        </div>
    )
}

export default JobCard;