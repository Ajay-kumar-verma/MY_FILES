import React from 'react'


const Hbtn=({btn})=>{

const btnstyle={
float:"left",
padding:"10px",
backgroundColor:"blue",  
cursor:"pointer",
border:"2px solid red",
borderRadius:"15px",
color:"white",
marginLeft:"20px"

}
    



return (
    <>
    
    <div style={btnstyle}>
    {btn}
    </div>
    </>
)

}

export default Hbtn;