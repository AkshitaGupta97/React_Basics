import { useState } from "react";

function HandleRadio(){
    const [gender, setGender] = useState('female')
    const [city, setCity] = useState('delhi')
    return (
        <div style={{padding:"12px", border:"2px solid orange", marginBlock:"10px"}}>
            <h3 style={{color:"yellowgreen"}}>Handle Radio and Dropdown</h3>

            <input style={{padding:"10px"}} type="radio" name="gender" id="male" value={'male'} onChange={(e) => {setGender(e.target.value)}} checked={gender==='male'}/>  {/* checked={gender==='male'} -> it means check tabhi karna jab gender checked ho */}
            <label htmlFor="male">Male</label>

            <input style={{padding:"10px"}} type="radio" name="gender" id="female" value={'female'} onChange={(e) => {setGender(e.target.value)}} checked={gender==='female'}/>
            <label htmlFor="female">Female</label>

            <h2 style={{color:"pink"}}>Selected Gender :  {gender}</h2>
            
            <select style={{color:"bisque"}} defaultValue={'delhi'} onChange={(event) => {setCity(event.target.value)}}>
                <option value="mumbai">Mumbai</option>
                <option value="chennai">Chennai</option>
                <option value="kolkata">Kolkata</option>
                <option value="delhi">Delhi</option>
                <option value="chandigarh">Chandigarh</option>
            </select>

            <h2 style={{color:"blueviolet"}}>Selected City :  {city}</h2>
        </div>
    )
}

export default HandleRadio;