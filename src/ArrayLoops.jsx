import ArrayLoopUser from "./ArrayLoopUser";

function LoopArray(){

    const userArr = [
        {
            name:"Akshita",
            age:20,
            email:"aks@gamil.com",
            id:1
        },
        {
            name:"Gungun",
            age:21,
            email:"gun@gamil.com",
            id:2
        },
        {
            name:"Simran",
            age:18,
            email:"sim@gamil.com",
            id:3
        },
        {
            name:"Lakshya",
            age:16,
            email:"lak@gamil.com",
            id:4
        },
    ]

    return(
        <div style={{padding:"16px", border:"2px solid orange"}}>
            <h2 style={{color:"yellow"}}>Array Loop jsx</h2>

            {
                userArr.map((user)=> {
                <div key={user.id}>
                    console.log(name);
                    <ArrayLoopUser data={user} />
                    
                </div> 
                })
            }


            {/*
            <table border="1" style={{border:"2px solid green"}}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                   {
                    userArr.map((user) => {
                         <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                        </tr>
                    })
                   }
                </tbody>
            </table>

            <h3 style={{color:"wheat"}}>Dummy table</h3>

            <table border="1" style={{border:"2px solid pink"}}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Sam</td>
                        <td>24</td>
                        <td>sam@gamil.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sam</td>
                        <td>24</td>
                        <td>sam@gamil.com</td>
                    </tr>
                </tbody>
            </table>
            */}

        </div>
    )
}

export default LoopArray;