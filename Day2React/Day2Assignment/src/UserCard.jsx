function Usercard({age,loc}) {
   // const {name,bio,clr ,role="member"}=props
    


    return <div>
        {/* <h3 style={{color:"orange" ,backgroundColor:`${clr}`}}>{name}</h3> */}
        <h4>{age}</h4>
        <h5>{loc}</h5>
    </div>

}
export default Usercard