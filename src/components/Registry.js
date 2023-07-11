import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [planetData, setPlanetData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetch("http://localhost:8085/planets ")
            .then(r => r.json())
            .then(data => setPlanetData(data))
    }, [])

    function planetUpdate(newPlanet){
        setPlanetData([...planetData, newPlanet])
    }

    function searchFilter(term) {
        setSearchQuery(term)
    }

    const filterData = planetData.filter( planet => {

        if (searchQuery === "") return true
        else {
            if (planet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                planet.climate.toLowerCase().includes(searchQuery.toLowerCase()) ||
                planet.terrain.toLowerCase().includes(searchQuery.toLowerCase()) ||
                planet.population.toLowerCase().includes(searchQuery.toLowerCase())
                ) return true
                else return false 
        }
    })



    return(
        <div className="registry">
            <Search searchFilter={searchFilter} searchQuery={searchQuery}/>
            <div className="content">
                <PlanetList planetData={filterData} />
                <NewPlanetForm planetUpdate={planetUpdate}/>
            </div>
        </div>
    )
}

export default Registry;