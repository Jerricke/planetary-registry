import React, {useState} from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({planetUpdate}) {
    const [newPlanet, setNewPlanet] = useState({
        name: "",
        climate: "",
        terrain: "",
        population: ""
    })

    function handleChange(e){
        setNewPlanet({
            ...newPlanet,
            [e.target.name]: e.target.value
        })
        console.log(newPlanet);
    }

    function submitHandler(newPlanet) {
        fetch("http://localhost:8085/planets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(newPlanet)
        })
        .then(r => r.json())
        .then(data => planetUpdate(data))
    }

    return(
        <form onSubmit={e => {
            e.preventDefault();
            submitHandler(newPlanet)
        }}>
            <input type="text" name="name" placeholder="Name" onChange={e => handleChange(e)}/>
            <input type="text" name="climate" placeholder="Climate" onChange={e => handleChange(e)}/>
            <input type="text" name="terrain" placeholder="Terrain" onChange={e => handleChange(e)}/>
            <input type="text" name="population" placeholder="Population" onChange={e => handleChange(e)}/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;