function Usercard(props) {
    const {name,bio,clr ,role="member"}=props
    

    console.log(clr)

    return <div>
        <h3 style={{color:"orange" ,backgroundColor:`${clr}`}}>{name}</h3>
        <h4>{bio}</h4>
        <h5>{role}</h5>
    </div>

}
export default Usercard