import cat from './S/svg/cat.svg'
import dog from './S/svg/dog.svg'
import horse from './S/svg/horse.svg'
import heart from './S/svg/heart.svg'
import { useState } from 'react'
import './animalshow.css'

export default function AnimalShow({type}){

    const aniIMG={
        cat:cat,
        dog:dog,
        horse:horse
    }
   

    const [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1)
    }
     console.log({width: `${20+10*count}px`})

    return <div className='child-parent' onClick={handleClick}>
        <img className='amimal-img' src={aniIMG[type]} alt="animal" />
        <img className='heart-img' src={heart} alt="heart" style={{width: `${20+10*count}px`}}/>
    </div>
}