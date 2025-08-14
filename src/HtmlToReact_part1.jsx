
import Props from "./Props_Concept"

/* function fruits(name){
        alert("Fruit called external : ", name)
    }
    */

export function HtmlToReact() {
    const userObj = {
        name: "Akshita",
        course: "BCA"
    }
    const userArr = ["sam", 'Peter']
    const path = "https://tse2.mm.bing.net/th/id/OIP.bp-MzZIU0vJlNQK1W8WurgHaIR?rs=1&pid=ImgDetMain&o=7&rm=3"
    function callBtn() {
        alert("Button clicked")
    }
    function operation(a, b, op) {
        if (op == "+") {
            return a + b;
        }
        else if (op == "-") {
            return a - b;
        }
        else {
            return a * b;
        }
    }
    function fruits(name) {
        alert("Fruit called : ", name)
    }

    const userObject = {
        myname: "Akshita",
        age: 21,
        email: "aksh23@gmail.com"
    };

    return (
        <div>
            <h1>Todos Basics</h1>
            <img src={path} alt="" />
            <ul>
                <li>Street dogs</li>
                <li>Jsx as Java Script Xml</li>
                <li>Jsx as Java Script Syntax extension</li>
            </ul>
            <button onClick={callBtn}>Click me</button>
            <hr />
            <h2>Logical functions</h2>
            <h4>Subtraction : {operation(90, 40, "-")}</h4>
            <hr />
            <h2>Array & Objects</h2>
            <h4>Objects: {userObj.name}</h4>
            <h4>Objects: {userObj.course}</h4>
            <h4>Array: {userArr[0]}</h4>
            <hr />
            <h2>New Check 1</h2>
            <button onClick={() => fruits('apple')}>Apple</button>
            <button onClick={() => fruits('mango')}>Mango</button>

            <hr />

            <Props user={userObject}/>

        </div>
    )
}