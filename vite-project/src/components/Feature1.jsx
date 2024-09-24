import { useState, useEffect } from "react";

function Feature1() {
    
    let [data, setData] = useState([])
    useEffect(() => {
                const fetchData = async () => {
                    try {
                        const response = await fetch ('https://pokeapi.co/api/v2/pokemon/furret')
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
                 <div className="item">
                    <h1>{data.name}</h1>
                    <div className="front_feature_1" >
                        <img src={data?.sprites?.other['official-artwork']?.front_default } width={350}/>  
                    </div>  
                 </div> 
                 <div className="back_feature_1">
                    <h3>abilities: </h3>
                        {Object.values(data).map((value, index) =>  ( 
                                <li key={index}>{value = data?.abilities[index]?.ability.name}</li> 
                        ))}
                        <h4>weight:</h4>
                        <span>{data.weight}</span>      
                 </div>  
            
            </>
        )
    }
    
export default Feature1


