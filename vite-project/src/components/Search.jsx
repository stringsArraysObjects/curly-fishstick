import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Search({setData, setIsActive}) {
  const [formData, setFormData] = useState('')

  function handleSubmit(e){
        e.preventDefault()
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
            <form  className="search-bar" onSubmit={handleSubmit}>
                <input 
                    id="search-input" 
                    type="search" 
                    name="query"
                    value={formData}
                    onChange={e => setFormData(e.target.value)}
                    placeholder='search'
                    />
                <button type="submit" onClick = {() => setIsActive(true)}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-solid" size='xl'/>
                </button>
            </form>  
        </div>
        
         
    )
}

