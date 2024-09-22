import React from "react";

const SearchedForPokemon = ({data}) => {
    console.log(data)
   
    return (
        <>
        <div className="itemSearched">
            <div className="front_searched_poke">
                <h1>{data.name}</h1>
                <img src={data?.sprites?.other['official-artwork']?.front_default} width={350}/>  
            </div>
        </div>  
        <div className="back_searched_poke">
         <h3></h3>
            {Object.values(data).map((value, index) =>  (
                <li key={index}>{value = data?.abilities[index]?.ability.name}</li>
            ))}    
        </div>  
    </>
    )
}
export default SearchedForPokemon