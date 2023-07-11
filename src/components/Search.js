import React from "react"

function Search({searchQuery, searchFilter}) {


    return (
        <div>
            <input type="text" value={searchQuery} onChange={(e) => searchFilter(e.target.value)} placeholder="Search..."/>
        </div>
    );
}

export default Search;