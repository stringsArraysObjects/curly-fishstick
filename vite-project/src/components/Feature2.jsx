import { useState, useEffect } from "react";

function Feature2() {
    
    let [data, setData] = useState([])
    useEffect(() => {
                const fetchData = async () => {
                    try {
                        const response = await fetch ('https://pokeapi.co/api/v2/pokemon/charmeleon')
                        const jsonData = await response.json()
                        return jsonData
                        
                    }catch (error){
                        console.error('Error fetching data:', error)
                    }
                };
         
                fetchData().then(setData)
                console.log(data)
    },[])
        return (
            <>
                <div className="item2">
                    <div className="front_feature_2">
                        <h1>{data.name}</h1>
                        <img src={data?.sprites?.other['official-artwork']?.front_default} width={350}/>  
                    </div>
                </div>  
                <div className="back_feature_2">
                    <h2>{data.name}</h2>
                    <h4>weight <i>{data.weight}</i></h4>
                    <h3>abilities: </h3>
                    <p>{Object.values(data).map((value, index) =>  (
                        <li key={index}>{value = data?.abilities[index]?.ability.name}</li>
                    ))}</p>
                    <h3>types:</h3> 
                     <p>{Object.values(data).map((value, index) =>  ( 
                                <li key={index}>{value = data?.types[index]?.type?.name}</li> 
                     ))}</p>       
                </div>  
            </>
        )
    }
    
export default Feature2
