import { useEffect, useState } from "react";

function LifeCycle(){
    const [count, setCount] = useState(0);
    const [data, setData] = useState(0);
    const [display, setDisplay] = useState(true);

    useEffect(()=> {
        console.log('Mounting Phase ... ');
    },[]);

    useEffect(()=> {
        console.log('Update Count Phase ... ');
    },[count]);

    useEffect(()=> {
        return() => {
            console.log('Unmount  Phase ... ');
        }
    },[]);

    return (
        <div style={{border:"2px solid blue", padding:"12px"}}>
            <h2 style={{color:"green"}}>Life Cycle of Components.</h2>
            {
                display ? 
                <h2 style={{color:"orange"}}>Counter : {count}</h2> :
                <h2 style={{color:"orange"}}>Data : {data}</h2>
            }
            
            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setData(data+1)}>Update Data</button>
            <br />
            <button onClick={() => setDisplay(!display)}>Toggle</button>
        </div>
    )
}

export default LifeCycle;