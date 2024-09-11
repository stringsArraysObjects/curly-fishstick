import { useState, useEffect } from "react";

function Feature2() {
    
    let [data, setData] = useState([])
    useEffect(() => {
                const fetchData = async () => {
                    try {
                        const response = await fetch ('https://pokeapi.co/api/v2/pokemon/phanpy')
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
                        <img src={data?.sprites?.other['official-artwork']?.front_default}/>  
                        <h1>{data.name}</h1>
                    </div>
                </div>  
                <div className="back_feature_2">
                    <h3>abilities: </h3>
                    {Object.values(data).map((value, index) =>  (
                        <li key={index}>{value = data?.abilities[index]?.ability.name}</li>
                    ))}    
                </div>  
            </>
        )
    }
    
export default Feature2
