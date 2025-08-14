
function Props({user}){
    return (
        <div>
            <h2>Concept of Props Via passing Object</h2>
            <h3>Name : {user.myname}</h3>
            <h3>Age :  {user.age}</h3>
            <h3>Email :  {user.email}</h3>
        </div>
    )
}
export default Props;

// go to HtmlToReact -> and check user object