import { useState } from "react";


function App() {

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count - 1)}>Decrementt</button>
        <button onClick={() => setCount(count+1)}>Increament</button>
      </div>
    )
  }

  function Greeting({name}) {
    return <h1>Hello, {name}!</h1>
  }

  const username = "SP";

  return (
    <>
      <h1>Hello React + Vite!</h1>
      <h2>This is {username}'s first project of React with Vite.</h2>
      {/* {username} is a evaluated expression */}
      <Greeting name='Shanaya'/>
      <Counter />
    </>
  )
  
}



export default App

//evaluated expression - only final outcome can by inserted (if-else, conditions - not allowed)
