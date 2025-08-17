import { use, useEffect, useState } from "react";

function UseEffectData(){

    const [data, setData] = useState(0);
    const [counter, setCounter] = useState(0);
    const handleCounter = () => {
        console.log("Handler Counter");
    }
  //  handleCounter(); // here it wil be called as we click on counter.
    
    useEffect(()=> {
        handleCounter(); // here it will be called only at once.
    }, [])

    const handleData = () => {
        console.log("Handler Data");
    }
    useEffect(() => {
        handleData();
    },[data]) // here it will be called data times

    const handleDataCounter = () => {
        console.log("Handler Data and Counter");
    }

    useEffect(() => {
        handleDataCounter();
    }, [data][counter]);  // here both[data , counter] will be called or triggered 
    return(
        <div style={{border:"2px solid pink", padding:"10px", margin:"20px"}}>
            <h3 style={{color:"crimson"}}>useEffect function</h3>
            <button onClick={() => setCounter(counter+1)}>Counter {counter}</button>
            <button onClick={() => setData(data+1)}>Data {data}</button>

        </div>
    )
}

export default UseEffectData;