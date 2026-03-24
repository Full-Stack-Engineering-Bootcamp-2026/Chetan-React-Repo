import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [isLogged,setIslogged]=useState(false);

  const handleLogin=()=>{
    setIslogged(!isLogged)
    console.log("logged out")
  }
  const handleLogout=()=>{
    setIslogged(!isLogged)
        console.log("logged in")

  }

 

  return (
    <>
    

    {isLogged?(<button onClick={handleLogout}>logout</button> ) :(<button onClick={handleLogin}>login</button> )}

    
      
    </>
  )
}

export default App
