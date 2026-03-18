import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Usercard from './UserCard'

function App() {
  const person = [
    {
      id:1,
      age: 20,
      loc: "pune"
    },
    {
      id:2,
      age: 30,
      loc: "mumbai"

    }
  ];
  const users=person.map((p)=>{return <Usercard key={p.id} age={p.age} loc={p.loc}/>})

  return (

   
    <>
      {/* <Usercard name="Chetan" bio="23 Years old" clr="grey" role="Admin"/>
      <Usercard name="omkar" bio="24 Years old"/>
      <Usercard name="ruturaj" bio="21 Years old" role="Doctor"/>
      <Usercard user={person} /> */}
      {users}
    </>
  )
}

export default App
