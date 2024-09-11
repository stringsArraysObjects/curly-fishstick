import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Search({setData}) {
  const [formData, setFormData] = useState('')
  
    
  function handleSubmit(e){
        e.preventDefault()
      
        // const params = new URLSearchParams(Object.entries(formData)).toString();
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${formData}`
      
        console.log(formData)
       fetchData(apiUrl).then(setData)
    }
    
    const fetchData = async (apiUrl) => {
            try {
                const response = await fetch (apiUrl)
                const jsonData = await response.json()
                console.log(jsonData)
                return jsonData

            }catch (error){
                console.error('Error fetching data:', error)
            }
    };
        
 
   
    return(
        <div className='form'>
            <form  className="search-bar"  onSubmit={handleSubmit}>
                <input 
                    id="search-input" 
                    type="search" 
                    name="query"
                    onChange={e => setFormData(e.target.value)}
                    value={formData}
                    placeholder='search'
                    />
                <button type="submit" >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-solid" size='xl'/>
                </button>
                    
            </form>  
        </div>
        
         
    )
}

// function DisplaySearchData(urlSearch){
    
//     let [data, setData] = useState([])
//     useEffect(() => {
//                 const fetchData = async () => {
//                     try {
//                         const response = await fetch(urlSearch)
//                         const jsonData = await response.json()
//                         return jsonData
                        
//                     }catch (error){
//                         console.error('Error fetching data:', error)
//                     }
//                 };
         
//                 fetchData().then(setData)
//     },[])
//         console.log(data)
//         return (
//                 <>

//                         <figure>
//                             <img src={data?.sprites?.other['official-artwork']?.front_default}/>  
//                             <figcaption>
//                                 <h3>{data?.name}</h3>
//                                 <h2>abilities:</h2>
//                                 {/* <p>{data.abilities[i].ability['name']+' '}</p> */}
//                             </figcaption>
//                         </figure>
//                 </>
                     
            
//         )
// } 


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