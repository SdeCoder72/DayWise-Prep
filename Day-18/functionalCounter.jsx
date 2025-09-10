import React, { useState } from "react";

const FunctionalCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Functional Component</h1>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>Increase Value</button>
            <button onClick={() => setCount(count - 1)}>Decrease Value</button>
        </div>
    );
};

export default FunctionalCounter;