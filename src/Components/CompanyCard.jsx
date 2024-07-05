// Company name, description, and list of available jobs

import React from "react";
import { Link } from "react-router-dom"

import "./CompaniesCard.css"

const CompanyCard = ({company}) => {


    return (
        <Link to={`/companies/${company.handle}`}>
            <div className="CompanyCard">
                <div className="CompanyCard-content">
                    <h2 className="CompanyCard-title">{company.name}</h2>
                    <p className="CompanyCard-desc">{company.description}</p>
                    <img className="CompanyCard-logo" src={company.logo_url}/>
                </div>
            
            </div>
        </Link>
        
    )

}

export default CompanyCard;