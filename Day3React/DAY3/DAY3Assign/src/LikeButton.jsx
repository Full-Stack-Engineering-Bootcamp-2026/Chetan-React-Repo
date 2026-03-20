import { useState } from 'react'

export default function LikeButton(){
     const [count, setCount] = useState(0)
  const [like,setLike] = useState("like")
  
  // const handleLike = ()=>{
  //   if(count>0){
  //     return <h6>likes</h6>
  //   }else{
  //      return <h6>like</h6>
  //   }
  // }







  const[color,setColor]=useState("red")
  //let color="red";


  if(count<0){
    setCount(0)
  }

 
  const handleClick=()=>{
    if(count>10){
    setColor("green")
  }

  if(count>1){
    setLike("likes")
  }

    setCount(prev=>prev+1);
  }
  const handleReset=()=>{
    setCount(0);
  }

  const handleDislike=()=>{
    setCount(prev=>prev-1);
  }


  return( <div>

      <button style={{ backgroundColor:color}} onClick={handleClick}>click me</button>
      <h4>count is :{count}</h4>
      <div>{like}</div>
      {/* <div> {count < 1? <h3>like</h3>:<h3>likes</h3> }</div> */}
      <button onClick={handleReset}>reset</button>
      <button onClick={handleDislike}>Dislike</button>

     </div>)
}