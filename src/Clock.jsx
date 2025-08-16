import { useEffect, useState } from "react";

function Clock({colorChange}){

    const [time, setTime] = useState(0);
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 2000)
    }, [])


    return(
        <div style={{padding:"16px", border:"2px solid white", borderRadius:"5px", width:"500px"}}>
            <h2 style={{color:"goldenrod", textDecoration:"underline"}}>Clock</h2>
            <h1 style={{color:colorChange, backgroundColor:"whitesmoke", borderRadius:"6px", width:"280px", padding:"10px"}}>{time}</h1>
        </div>
    )
}
export default Clock;