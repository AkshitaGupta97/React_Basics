import { useState } from "react";
import Clock from "./Clock";

function ClockComponent() {
    const [color, setColor] = useState('Red')
    return (
        <div>
            <select onChange={(e) => setColor(e.target.value)} style={{padding:"10px", font:"bold", border:"2px solid orange", borderRadius:"5px", marginInline:"12px"}}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="brown">Brown</option>
                <option value="blue">Blue</option>
                <option value="crimson">Pink</option>
                <option value="gold">Yellow</option>
            </select>

            <Clock colorChange={color}/>
        </div>
    )
}

export default ClockComponent;