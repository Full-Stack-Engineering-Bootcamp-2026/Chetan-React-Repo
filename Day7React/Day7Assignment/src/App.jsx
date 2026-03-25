import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")

  const handleChangeName=(event)=>{
    setName(event.target.value)
  }
  const handleChangeEmail=(event)=>{
    setEmail(event.target.value)
  }
  const handleSubmit=(event)=>{
    console.log(name,email)
    event.preventDefault();
    setEmail("")
    setName("")
  }


  return (
   <>

   <form onSubmit={handleSubmit}>
    <label >Name :</label>
    <input value={name} onChange={handleChangeName} />

    <label >Email :</label>
    <input value={email} onChange={handleChangeEmail} />

    <button>submit</button>

   </form>

   
   </>
  )
}

export default App
