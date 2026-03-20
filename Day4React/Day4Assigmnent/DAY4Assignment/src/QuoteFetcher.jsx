import axios from 'axios'
import { useState } from 'react';
export default function QuoteFetcher (){


    let baseurl=import.meta.env.VITE_API_BASE_URL;
   
    console.log(baseurl)
  
    const[loading,setLoading]=useState(true)
    const[abc,setAbc]=useState("")
    const[error,setError]=useState("")
    const[data,setData]=useState("")
    const[users,setUsers]=useState([])



    // const res=async()=>{
    //         setLoading(true)
    //         setError("")
    //         setAbc("loading")

    //         try{
    //             const result=await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    //             setData(result.data);
    //         }catch(err){
    //             setError("some error occured")
    //             setLoading(false)
    //             setAbc("")
    //         }finally{
    //             setLoading(false)
    //             setAbc("")
    //         }
    // }

   

    const res=async()=>{
        setAbc("loading")
        console.log(abc)

        
         const result=await axios.get(`https://jsonplaceholder.typicode.com/posts/${Math.ceil(Math.random()*100)}`)
        //  console.log(result.data)
        //  console.log(result.data.title)

            // setLoading(false)
            setAbc("")
            console.log(abc)
             setData(result.data);
            
            
         return result.data;
    }

    const handleNames=async()=>{
        try{
            const res=await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(res.data)
            setUsers(res.data)
        }catch(error){
            setError("Error fetching users")
        }
            
    //         setQwe(users.map(n=>n.name))
    // console.log(qwe)             

    }

    
    // const name=users.map(n=>n.name)
    
   

    return <div>
        <button onClick={res}>click</button>
        <button onClick={handleNames}>users</button>
        <div>
            
           {/* {loading && <p>Loading...</p>} */}
            {/* <h6>{loading?<h6>{abc}</h6>:<h6>{abc}</h6>}</h6> */}
            <h4>{abc}</h4>
            <h3>{}</h3>
            
            <h4>{data.title}</h4>
            <h4>{data.body}</h4>



            <ul>
        {users.map(item => (
          // Use the id as a unique key for each list item, as recommended by React
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
        </div>
    </div>
}