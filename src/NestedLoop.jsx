
function NestedCollegeData(){

    const collegeData = [
        {
            name:"IET", 
            city:"Delhi",
            website:"www.iet.com",
            student:[
                {
                    name:"Akshita",
                    age:20,
                    email:"aks@gmail.com"
                },
                {
                    name:"Sam",
                    age:24,
                    email:"sam@gmail.com"
                },
                {
                    name:"Sim",
                    age:22,
                    email:"sim@gmail.com"
                },

            ]       
        },
        {
            name:"IIT", 
            city:"Mumbai",
            website:"www.iit.com",
            student:[
                {
                    name:"Peter",
                    age:23,
                    email:"pet@gmail.com"
                },
                {
                    name:"Jay",
                    age:24,
                    email:"jay@gmail.com"
                },
                {
                    name:"Sohan",
                    age:22,
                    email:"sohan@gmail.com"
                },

            ]       
        },
        {
            name:"MIT", 
            city:"Deharadun",
            website:"www.mit.com",
            student:[
                {
                    name:"Lakshya",
                    age:20,
                    email:"lak@gmail.com"
                },
                {
                    name:"Himan",
                    age:24,
                    email:"him@gmail.com"
                },
                {
                    name:"Gavu",
                    age:22,
                    email:"ag@gmail.com"
                },

            ]       
        }
    ]


    return(
        <div style={{border:"2px solid green", margin:"10px", padding:"16px"}}>
            <h2 style={{color:"crimson"}}>Nested Loop</h2>
            {
                collegeData.map((college, index) => (
                    <div key={index} style={{backgroundColor:"#ccc", borderBottom:"2px solid white", margin:"12px", padding:"10px", borderRadius:"5px"}}>
                        <h3 style={{color:"orange", textDecoration:"underline"}}>Name: <span style={{color:"crimson"}}>{college.name}</span></h3>
                        <ul>
                            <li>
                                <h4 style={{color:"blue"}}>City: <span style={{color:"green"}}>{college.city}</span></h4>
                            </li>
                            <li>
                                <h4 style={{color:"blue"}}>Website: <span style={{color:"green"}}>{college.website}</span></h4>
                            </li>
                            <li>
                                <h4 style={{color:"blue"}}>Students:</h4>
                                {
                                    college.student.map((stud) => (
                                        <ul style={{borderBottom:"2px solid green"}}>
                                            <li style={{color:"chocolate"}}>
                                                <h4>Name : <span style={{color:"blueviolet"}}>{stud.name}</span></h4>
                                            </li>
                                            <li style={{color:"chocolate"}}>
                                                <h4>Age : <span style={{color:"blueviolet"}}>{stud.age}</span></h4>
                                            </li>
                                            <li style={{color:"chocolate"}}>
                                                <h4>Email : <span style={{color:"blueviolet"}}>{stud.email}</span></h4>
                                            </li>
                                        </ul>
                                    ))
                                }
                            </li>
                            
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}
export default NestedCollegeData;