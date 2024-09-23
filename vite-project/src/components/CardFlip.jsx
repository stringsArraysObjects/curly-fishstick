import { useState} from "react";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Search from "./Search";
import SearchedForPokemon from "./SearchedForPokemon";

export default function CardFlip() {
    const [isFlipped, setIsFlipped] = useState(false);
    // const [data, setData] = useState('')
    // const [isActive, setIsActive] = useState(false);
  
  

    return (
        <>   
            {/* <Search setData={setData} onClick={e => { e.stopPropagation(); setIsActive(true)}}/> */}
            <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onMouseEnter={() =>setIsFlipped(!isFlipped) }>
                <div className="card">
                   <Feature1/>
                </div>
                <div className="card" >
                    <Feature2/>
                </div>
                <div className="card">
                    <Feature3/>
                </div>
                {/* {isActive ? (

                <div className="card">
                    <SearchedForPokemon data={data}/>
                </div>

                ) : (<div></div>)
                } */}
            </div>
        </>
    )
}