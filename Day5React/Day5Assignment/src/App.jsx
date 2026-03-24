import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const colors=["red","orange","green","blue","pink"]

  const colorArr=colors.map((color,index)=>{
      return <li key={index}>{color}</li>
  })

  return (
    <>
      
      <ul >
      {colorArr}
      </ul>

    </>
  )
}

export default App
