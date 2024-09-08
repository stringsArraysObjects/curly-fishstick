import { useState, useEffect } from "react";

function Feature1() {
    
    let [data, setData] = useState([])
    useEffect(() => {
                const fetchData = async () => {
                    try {
                        const response = await fetch ('https://pokeapi.co/api/v2/pokemon/magcargo')
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
                    <div className="front_feature_1" >
                        <img src={data?.sprites?.other['official-artwork']?.front_default }/>  
                            <h1>{data.name}</h1>
                    </div>  
                 </div> 
                 <div className="back_feature_1">
                        {Object.values(data).map((value, index) =>  (
                      
                                <span key={index}>{value = data?.abilities[index]?.ability.name}</span> 
                            
                        ))}    
                 </div>  
            
            </>
        )
    }
    
export default Feature1


// form = document.querySelector('form')
    
//     addEventListener('submit', function(e){
//       e.preventDefault();
//       var elements = this.elements
//       var search = form.elements.search.value.toLowerCase()
//       document.querySelector('#inputAbilitiesPara').innerText = ' '
//       document.querySelector('#inputTypesPara').innerText = ' '
//       const urlSearch = `https://pokeapi.co/api/v2/pokemon/${search}`
//       getSearchData(urlSearch)
//     })
//     async function getSearchData (urlSearch){

//         try {
//             const response = await fetch(urlSearch);
//             if (!response.ok) {
//               throw new Error(`Response status: ${response.status}`);
//             }
//         const data = await response.json();
//         document.querySelector('#inputPic').src = data.sprites.other['official-artwork'].front_default    
//         document.querySelector('#inputName').innerText = data.name
//         document.querySelector('#inputAbilitiesHeader').innerText = 'abilities:'
//         document.querySelector('#inputTypesHeader').innerText = 'types:'
        
        
//         for(let i = 0; i < data.abilities.length; i++){
//             data.abilities.length === 1? 
//             document.querySelector('#inputAbilitiesPara').innerHTML += data.abilities[i].ability['name'] :
//             document.querySelector('#inputAbilitiesPara').innerHTML += data.abilities[i].ability['name']+' '
//         }
        
//         for(let i = 0; i < data.types.length; i++){
//             data.types.length === 1? 
//             document.querySelector('#inputTypesPara').innerHTML += data.types[i].type['name'] :
//             document.querySelector('#inputTypesPara').innerHTML += data.types[i].type['name']+' '
//         }
        
        
//         console.log(data);
//     } catch (error) {
//         console.error(error.message);
//     }
// }  