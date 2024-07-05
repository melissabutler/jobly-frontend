import React, { useState } from "react";

import "./ListSearch.css"

const ListSearch = ({getTerm}) => {

    const [searchTerm, setSearchTerm] = useState('');
    
    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value)
        getTerm(e.target.value)
    }

    return (    
        <div className="ListSearch">
            <input
                    type="text"
                    name="term"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Enter search term..."
                />
                <button>Search</button>

        </div>
    )
}

export default ListSearch;