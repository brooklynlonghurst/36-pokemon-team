import React from "react"

function TeamCard({pokemon}){
    return (
        <div className="card">
            <img src={pokemon.sprites.other["official-artwork"].front_default} className="poke-img"/>
            <h4>{pokemon.name}</h4>
            <div className="row-container">
                {pokemon.types.map((t,i) => <h4 className={`type ${t.type.name}`}>{t.type.name}</h4>)}
            </div>
            {pokemon.stats.map((s, i) => <h5>{s.stat.name} {s.base_stat}</h5> )}
        </div>
    )
}

export default TeamCard