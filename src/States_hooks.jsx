import { useState } from "react"
import Counter from "./Counter";

export function Hooks() {
    const [fruit, setFruit] = useState("Apple");

    const handleFruit = () => {
        setFruit("Banana");
    }
    return (
        <div>
            <h3>States and Hooks</h3>
            <h2>{fruit}</h2>
            <button onClick={handleFruit}>Change Fruit</button>
            <Counter />
        </div>
    )
}