import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AnimalShow from './AnimalShow'


function getAnimals(){
    const animals=['cat','dog','horse'];
    return animals[Math.floor(Math.random()*animals.length)]

}
console.log(getAnimals());

function App() {
  const [animal,setAnimal]=useState([]) //////

const handleClick=()=>{
      setAnimal([...animal,getAnimals()])
}

const RenAnimal=animal.map((ani,index)=>{
    return <AnimalShow key={index} type={ani}/>
})
console.log(RenAnimal);
 
  return (
    <div className='parent-div'>
       <button onClick={handleClick}>click me</button>
       <div className='rerenderd-animal'>{RenAnimal}</div> 
       {/* rendered animal is an array  */}
     
    </div>
  )
}

export default App
