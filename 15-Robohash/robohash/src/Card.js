import {useState} from "react"
export default function Card({data}){
    const [color, setColor]=useState("FF6700")
    let changeColor=(e)=>{
        setColor(e.target.value)
    }
    return(
        <div className="card" style={{backgroundColor:color}}>
            <input type="color" onChange={changeColor} />
            <img src={data.image}/>
            <h3>{data.nom}</h3>
            <h5>{data.email}</h5>
        </div>)
}