import React, { useState, useEffect } from "react";
import JoblyApi from "../../api";

import ListSearch from "./ListSearch";
import JobCard from "./JobCard"

import "./JobsList.css"

const JobsList = ({applyToJob}) => {
    const [jobs, setJobs] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect( () => {
        async function getData() {
            let data = await JoblyApi.getJobs();
            setJobs([...data])
        }
        getData();
    }, []);

    const getTerm = (newTerm) => {
        setSearchTerm(newTerm)
    }

    const filteredData = jobs.filter((job) => {
        if(searchTerm === "") {
            return job;
        } else {
            return job.name.toLowerCase().match(searchTerm);
        }
    })

    return (
        <div>
            <ListSearch getTerm={getTerm}/>
            <ul className="JobsList">
                {filteredData.map(job => (
                    <li key={job.id}>
                        <JobCard applyToJob={applyToJob} company={true} key={job.id} job={job}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default JobsList;