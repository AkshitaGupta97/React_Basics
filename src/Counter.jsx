import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    const [revCount, setRevCount] = useState(0);

    const [toggle, setToggle] = useState(true);  // this is hide and show

    const [value, setValue] = useState(0);

    return (
        <div>
            <h3>Counter:  {count}</h3>
            <h3>Reverse Counter : {revCount}</h3>
            <button onClick={() => { setCount(count + 1) }}>Increase Count</button>
            <button onClick={() => { setRevCount(revCount - 1) }}>Deccrease Count</button>
            <br />
            <hr />
            <button onClick={() => { setToggle(!toggle) }}>Toggle Me</button>
            {
                toggle ? <h2>Akshita</h2> : null  // instead of <h2>Akshita</h2> you can pass Component from other file.
            }
            <hr />
            <h2>Multiple condition</h2>
            <h3>Value :   {value}</h3>
            <button onClick={() => {setValue(value+1)}}>Change value</button>
            {
                (value==0) ? <h4>Condition 0</h4> :
                (value==1) ? <h4>Condition 1</h4> :
                (value==2) ? <h4>Condition 2</h4> :
                (value==3) ? <h4>Condition 3</h4> :
                (value==4) ? <h4>Condition 4</h4> :
                <h4>Sorry other value</h4>
            }
            
        </div>
    )
}
export default Counter;