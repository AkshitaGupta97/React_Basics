import { useState } from "react";

function InputField(){
    const [val, setVal] = useState("");
    return(
        <div style={{color:"orange", border:"2px solid white", padding:"10px", width:"400px"}}>
            <h3>Get Input data</h3>
            <input type="text" placeholder="Enter Input" value={val} onChange={(event) => setVal(event.target.value)} style={{padding:"16px"}} />
            <h4 style={{color:"aqua", textDecoration:"underline", marginInline:"12px"}}>{val}</h4>
            <button onClick={() => setVal("")}>Clear</button>
        </div>
    )
}

export default InputField;