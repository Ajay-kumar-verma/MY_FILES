import React from 'react'
import * as list from './list.json'
import Hbtn from './Hbtn'

const Header=()=>{
const hstyle={
  height:"60px",
  backgroundColor:"green",
  width:"100%",
  padding:"auto",
  paddingTop:"10px"
}



   return(
      // Here header is HTML tag so it started with small letter 
<header style={hstyle} >   
{         
   list.default.map(ele=>{
    return <Hbtn btn={ele} />    
   })
    
}

</header>

    ) 


}




export default Header;