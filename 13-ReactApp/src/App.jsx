
import './assets/style/App.css'
import { useState } from 'react'
function App() {
let [text,setText] = useState("");
  return (
    <>
        <input onChange={(e)=>{setText(e.target.value)}} ></input>
        <h2>{text}</h2>
  
    </>
  )
}

export default App
