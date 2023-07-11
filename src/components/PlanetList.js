import React from "react"
import Planet from "./Planet"

function PlanetList( {planetData}) {


    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {/** Render a list of <Planet> components here. */}
                {
                    planetData.map(planet => {
                        return <Planet key={planet.id} planet={planet}/>
                    })
                }


            </tbody>
        </table>
    );
}

export default PlanetList;