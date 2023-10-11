import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increaseNumber = () => {
        setCount(count+1); 
    }

    return (
        <div>
            <h1>Counter: {count} </h1>
            <button onClick={increaseNumber}>Increase</button>
        </div>
    )
}

export default Counter;