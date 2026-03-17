import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Usercard from './UserCard'

function App() {
   const person={
      age:20,
      loc:pune
    };

  return (

   
    <>
      <Usercard name="Chetan" bio="23 Years old" clr="grey" role="Admin"/>
      <Usercard name="omkar" bio="24 Years old"/>
      <Usercard name="ruturaj" bio="21 Years old" role="Doctor"/>
      <Usercard user={person} />
    </>
  )
}

export default App
