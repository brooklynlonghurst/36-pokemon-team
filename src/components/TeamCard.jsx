import React from "react"

function TeamCard({pokemon}){
    return (
        <div className="card">
            <img src={pokemon.sprites.other["official-artwork"].front_default} className="poke-img"/>
            <h4>{pokemon.name}</h4>
            <div className="type-container">
                {pokemon.types.map((t,i) => <h4 className={`type ${t.type.name}`}>{t.type.name}</h4>)}
            </div>

            <div className="stat-container">
            {pokemon.stats.map((s, i) => <h5 className="stat">{s.stat.name} {s.base_stat}</h5> )}
            </div>
            <button>Remove</button>
        </div>
    )
}

export default TeamCard