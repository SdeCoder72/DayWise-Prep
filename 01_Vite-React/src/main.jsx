import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <>
        <h1>Custom App || Learning</h1>
        <App />
        </>
    )
}

// react's components converts into this type of statement by parsing but react has it's own render method the syntax is made by my me
// const createElement = {
//     type: 'a',
//     children: 'Click here to visit Google',
//     props: {
//         href: 'https://goole.com',
//         target: '_blank'
//     }
// }

const anotherUser = 'Shanaya'

// here is the special pre-defined syntax by react
const reactElement = React.createElement(    //React.createElement is bydefault injected by Babel(the transpiler)
    'a',     //type
    {href:'https://google.com', target:'_blank'},   //key
    'click me to visit Google ',     //ref
    anotherUser    // evaluated expression (props)
    
)

// react render syntax 
const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)


const myVar = <App />


// createRoot(document.getElementById('root')).render(
  
//     <App />
// )
ReactDOM.createRoot(document.getElementById('root')).render (
    <>
    {/* <MyApp />   can run like this : MyApp()  but not recommended */}
    <App />
    {/* reactElement
    anotherElement */}
    </>
    
)