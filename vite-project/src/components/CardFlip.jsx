import { useState} from "react";
import Feature1 from "./Feature1";

export default function CardFlip() {
    const [isFlipped, setIsFlipped] = useState(false);
    
    const handleMouseOver = () => {
        setIsFlipped(!isFlipped);

      };
   

    return (
        <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onMouseOver={handleMouseOver}>
            <div className="card">
                <Feature1/>
            </div>
        </div>
        
    )
}