import React from 'react'
import './App.css'
import {useState } from 'react'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'
import Search from './components/Search'
import SearchedForPokemon from './components/SearchedForPokemon'
import CardFlip from './components/CardFlip'


export default function App() {
  const [data, setData] = useState('')
 
    return (
      <>
     
               <Search setData={setData}/>
                <div id='gallery'>
                    <CardFlip/>
                    <Feature2/>
                    <Feature3/>
                    <SearchedForPokemon data={data}/>
                </div>
        
      </>
    )
}


