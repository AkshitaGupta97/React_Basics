import { useState } from "react"

function ControlledComponenets(){
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPass] = useState();

    return(
        <div style={{border:"2px solid green", padding:"20px", marginBlock:"18px"}}>
            <h2 style={{color:"yellow"}}>Controlled Components</h2>
            <form action="">
                <input style={{padding:"16px", marginBlock:"12px"}} type="text" placeholder="Enter name" onChange={(event) => setName(event.target.value)}/>
                <br />
                <input style={{padding:"16px", marginBlock:"12px"}} type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)}/>
                <br />
                <input style={{padding:"16px", marginBlock:"12px"}} type="password" placeholder="Enter Password"  onChange={(event) => setPass(event.target.value)}/>
                <br />
                <button style={{padding:"12px", marginBlock:"12px",  color:"aquamarine"}}>Submit</button>

                <h3 style={{color:"brown", textDecoration:"underline"}}>Name :  {name}</h3>
                <h3 style={{color:"brown", textDecoration:"underline"}}>Email :  {email}</h3>
                <h3 style={{color:"brown", textDecoration:"underline"}}>Password :  {password}</h3>

            </form>
        </div>
    )
}

export default ControlledComponenets;