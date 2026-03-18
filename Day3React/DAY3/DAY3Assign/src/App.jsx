import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [like,setLike] = useState("like")
  
  // const handleLike = ()=>{
  //   if(count>0){
  //     return <h6>likes</h6>
  //   }else{
  //      return <h6>like</h6>
  //   }
  // }


  let color="red";

  if(count>10){
    color="green"
  }

  if(count<0){
    setCount(0)
  }

 
  const handleClick=()=>{
    setCount(prev=>prev+1);
  }
  const handleReset=()=>{
    setCount(0);
  }

  const handleDislike=()=>{
    setCount(prev=>prev-1);
  }

  return (
    <>
     <div>

      <button style={{ backgroundColor:color}} onClick={handleClick}>click me</button>
      <h4>count is :{count}</h4>
      <div> {count < 1? <h3>like</h3>:<h3>likes</h3> }</div>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleDislike}>Dislike</button>

     </div>
     
           
    </>
  )
}

export default App
