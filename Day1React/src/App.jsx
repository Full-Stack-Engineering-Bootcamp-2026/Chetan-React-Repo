import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const name="Chetan Asane";
  const batch="CDAC Batch 2026";
  const cohort="FullStack Engineering 2026"
  const date=new Date();
  const time=date.toLocaleTimeString();
  const hour=date.getHours();


  let greet;

  if( hour>5 && hour<12){
    greet="Good Morning";
  }
  else if( hour>=12 && hour<=17){
    greet ="Good Afternoon";
  }
   else{
    greet ="Good Afternoon";
  }

  return (
    <>
    <h4>{greet}</h4>
    <h1 className='abc' style={{color:'whitesmoke' ,backgroundColor:'red', padding:"30px"}} >{name}</h1>
    <ul  >
      <li>{batch}</li>
      <li>{cohort}</li>
    </ul>
    <p  >{time}</p>
    <h4>It is : { time}</h4>
    </>
  )
}

export default App
