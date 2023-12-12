import { useState } from "react";
import Card from "./Card.js"
import Search from "./Search.js"
import AddCard from "./AddCard.js"
import robots from "./db.js"
import "./App.css"
function App() {
  const [elements, setElements]=useState(robots);
  const [color, setColor]=useState("orange");
  const [showForm, setShowForm]=useState(false)
  let changeHandler=(e)=>{
     setElements(robots.filter(c=> c.nom.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  let addCardHandler=(e)=>{
    e.preventDefault();
    console.log("submit clicked !!")
  }

  let toggleFormHandler=()=>{
    setShowForm(!showForm)
  }
  return (
  <div className="container"  style={{backgroundColor: color}}>
    <Search handleChange={changeHandler} handleColorChange={(e)=>setColor(e.target.value)} handleShowForm={toggleFormHandler}/>
    {showForm  && <AddCard handleAddCard={addCardHandler}/>}
    <div className="cardList">
      {elements.map(e=><Card  data={e} key={e.id}/>)}
    </div>
    </div>
  );
}
export default App;
