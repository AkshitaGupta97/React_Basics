
function ArrayLoopUser({data}){
    return (
        <div style={{
            padding:"10px",
            border:"2px solid green",
            margin:"8px",
            borderRadius:"5px"
        }}>
            <h3>Id : <span>{data.id}</span></h3>
            <h3>Name : <span>{data.name}</span></h3>
            <h3>Age : <span>{data.age}</span></h3>
            <h3>Email : <span>{data.email}</span></h3>
        </div>
    )
}

export default ArrayLoopUser;