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
        <div id="gallery">

            <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
                <div className="card" onMouseEnter={ e => handleMouseEnter()}>
                    <Feature1/>
                </div>
            </div>
            <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
                <div className="card" onMouseEnter={ e => handleMouseEnter()}>
                    <Feature2/>
                </div>
            </div>
            <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
                <div className="card" onMouseEnter={ e => handleMouseEnter()}>
                    <Feature3/>
                </div>
            </div>
            <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
                <div className="card" onMouseEnter={ e => handleMouseEnter()}>
                    <SearchedForPokemon data={data}/>
                </div>
            </div>
        </div>
        </>
    )
}