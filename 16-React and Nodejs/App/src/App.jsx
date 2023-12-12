
import { useState } from 'react'
import './assets/style/App.css'
import logo from './assets/img/temperature.png'
import Temp from './component/Temp'
function App() {
  const [Ctemp,setCtemp] = useState(0)
  const [Ftemp,setFtemp] = useState(0)
  const [Falert,setFalert] = useState('#ffd966')
  const [Calert,setCalert] = useState('#b3e0ff')
  const CHandler = (e)=>{
      setCtemp(e.target.value)
      let rslt = 32+e.target.value * 9/5
      if(!parseFloat(rslt)){setFtemp('error'); setFalert("#ffcccb")}
      else{ setFtemp(rslt); setFalert("#ffd966")}
      
  }
  const FHandler = (e)=>{
    setFtemp(e.target.value)
      let rslt = (e.target.value-32) * 5/9
       if(!parseFloat(rslt)){setCtemp('error');  setCalert('#ffcccb')} 
       else{setCtemp(rslt); setCalert('#b3e0ff')}
     
  }
  return (
    <>
       <div className='Container'>
            <h2>Temperature App</h2>
            <img src={logo} />
            <div className='content' >
                <Temp title="C" temp={Ctemp} Handler={CHandler} Bg={Calert} />
                <Temp title="F" temp={Ftemp} Handler={FHandler} Bg={Falert} />
            </div>
       </div>
    </>
  )
}

export default App
