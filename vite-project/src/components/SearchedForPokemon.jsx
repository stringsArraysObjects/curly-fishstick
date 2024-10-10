import React from "react";

const SearchedForPokemon = ({data, isActive}) => {
   console.log(data)
   
    return (
        <>
                    { isActive ? (
                            <div className="itemSearched">
                                <div className="front_searched_poke">
                                    <h1>{data.name}</h1>
                                    <img src={data?.sprites?.other['official-artwork']?.front_default} width={350}/>  
                                </div>
                            </div>)  
                        :(<div></div>)
                    }
                  {isActive ? 
                        (<div className="back_searched_poke">
                            <h2>{data.name}</h2>
                            <h4>weight <i>{data.weight}</i></h4>
                            <h3>abilities:</h3>
                            <p>{Object.values(data).map((value, index) =>  (
                            <li key={index}>{value = data?.abilities[index]?.ability.name}</li>
                          ))}</p>
                          <h3>types:</h3> 
                           <p>{Object.values(data).map((value, index) =>  ( 
                                <li key={index}>{value = data?.types[index]?.type?.name}</li> 
                            ))}</p>        
                       </div>)
                       :(<div></div>)
                  }
       </>
    )
}
export default SearchedForPokemon