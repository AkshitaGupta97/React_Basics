import { useState } from "react";

function CheckBox() {
    const [skill, setSkill] = useState([]); // we are creating an empty array to store the values.
    const handleSkill=(event) => {
       // console.log(event.target.value, event.target.checked);        
        if(event.target.checked){
            setSkill([...skill, event.target.value]); // here give the current and stored values
        }
        else {
            setSkill([...skill.filter((item)=> item!=event.target.value)]); // don't store the item which is not checked. 
        }
    }
    return (
        <div style={{ padding: "16px", border: "2px solid aquamarine" }}>
            <h3>Select Your Skills = CheckBox </h3>

            <input onChange={handleSkill} type="checkbox" id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br />
            <input onChange={handleSkill} type="checkbox" id="js" value="js" />
            <label htmlFor="js">JS</label>
            <br />
            <input onChange={handleSkill} type="checkbox" id="python" value="python" />
            <label htmlFor="python">Python</label>
            <br />
            <input onChange={handleSkill} type="checkbox" id="java" value="java" />
            <label htmlFor="java">Java</label>
            <br />
            <h3 style={{color:"orange"}}>{skill}</h3>

        </div>
    )
}

export default CheckBox;