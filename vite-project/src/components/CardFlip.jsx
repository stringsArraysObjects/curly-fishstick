import { useState} from "react";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Search from "./Search";
import SearchedForPokemon from "./SearchedForPokemon";

export default function CardFlip() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [data, setData] = useState('')

    
    const handleMouseEnter = () => {
        setIsFlipped(!isFlipped);
    };
   
   
    return (
        <>   
            <Search setData={setData}/>
            <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onMouseEnter= { () => { handleMouseEnter()}}>
                <div className="card" >
                    <Feature1/>
                </div>
                <div className="card" >
                    <Feature2/>
                </div>
                <div className="card">
                    <Feature3/>
                </div>
                <div className="card">
                    <SearchedForPokemon data={data}/>
                </div>
            </div>
        </>
    )
}