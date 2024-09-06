import React from "react";

const SearchedForPokemon = ({data}) => {
    console.log(data)
    
let output = []

    return (
        <div>
            <div className="itemSearched">

                <img src={data?.sprites?.other['official-artwork']?.front_default}/>
                    <h3>{data.name}</h3> 
                        {Object.values(data).map((value, index) =>  (
                            <span key={index}>{value = data?.abilities[index]?.ability.name} </span> 
                        ))}    
            </div>
        </div>
    )
}
export default SearchedForPokemon