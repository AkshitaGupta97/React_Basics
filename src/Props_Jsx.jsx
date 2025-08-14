
/*
function PropJsx({name="New User"}){
    return(
        <div style={{color:"green", border:"5px solid blue", margin:"10px"}}>
            <h3>Hi, {name}</h3>
        </div>
    )
}
*/

function PropJsx({children}){
    return(
        <div style={{color:"orange", border:"5px solid blue", margin:"10px", width:"200px"}}>
            {children}
        </div>
    )
}

export default PropJsx;