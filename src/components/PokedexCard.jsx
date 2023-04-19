import React from "react";

function PokedexCard(props){
    return (
        <div className="card">
            <img src={props.poke.img} className="poke-img"/>
            <h5>{props.poke.name}</h5>
            <button>Add to Team</button>
        </div>
    )
}

export default PokedexCard