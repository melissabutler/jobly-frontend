import React, { useState, useEffect} from "react";

import JoblyApi from "../../api";
import CompanyCard from "./CompanyCard";
import ListSearch from "./ListSearch";

import "./CompaniesList.css"

const CompaniesList = () => {

    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect( () => {
        async function getData() {
            let data = await JoblyApi.getCompanies();
            setCompanies([...data]);
        }
        getData();
    }, []);

    const getTerm = (newTerm) =>{
        setSearchTerm(newTerm)
    }
    
    const filteredData = companies.filter((company) => {
        if(searchTerm === "") {
            return company;
        } else {
            return company.name.toLowerCase().match(searchTerm);
        }
    })
    return (
        <div>
            <ListSearch className="CompaniesList-search" getTerm={getTerm}/>
            <ul className="CompaniesList">
                {filteredData.map(company => (
                    <li key={company.handle}>
                        <CompanyCard key={company.handle} company={company} />
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default CompaniesList;