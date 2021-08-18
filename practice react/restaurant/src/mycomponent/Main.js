import React from 'react'
import SideBar from './SideBar'
import ListImage from './ListImage'
const Main=()=>{

const mstyle={
    marginTop:"10px",
    width:"100%",
    backgroundColor:"purple",
    padding:"1px"
    
}


return (
    <>
    <div style={mstyle} >
     <SideBar />
     <ListImage />
  </div>

    </>
)

}

export default Main;
