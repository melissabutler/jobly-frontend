import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../../api";
import JobCard from "./JobCard";

import "./CompanyDetails.css"

const CompanyDetails = () => {
    const [company, setCompany] = useState([]);
    const [jobs, setJobs] = useState([]);

    const { handle } = useParams();

    useEffect( () => {
        async function getData() {
            let data = await JoblyApi.getCompany(handle)

            setCompany({...data})
            setJobs([...data.jobs])
        }
        getData();
    }, []);


    return (
        <div className="CompanyDetails">
            <div className="CompanyDetails-content">
                <h1>{company.name}</h1>
                <h3 className="CompanyDetails-desc">{company.description}</h3>
                <ul classname="CompanyDetails-jobs">
                {jobs.map(job => (
                    <li>
                        <JobCard company={false} key={job.id} job={job}/>
                    </li>
                ))}
              
                </ul>
            </div>
            
        </div>
    )
}

export default CompanyDetails;