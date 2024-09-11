import React from "react";

const SearchedForPokemon = ({data}) => {
    console.log(data)
    
let output = []

    return (
        <>
        <div className="itemSearched">
            <div className="front_searched_poke">
                <img src={data?.sprites?.other['official-artwork']?.front_default}/>  
                <h1>{data.name}</h1>
            </div>
        </div>  
        <div className="back_searched_poke">
            
            {Object.values(data).map((value, index) =>  (
                <li key={index}>{value = data?.abilities[index]?.ability.name}</li>
            ))}    
        </div>  
    </>
    )
}
export default SearchedForPokemon