import React from 'react'
import {Component} from 'react'




// tihs is a class component 

class Hbtn extends Component{
btnstyle={
        float:"left",
        padding:"10px",
        backgroundColor:"blue",  
        cursor:"pointer",
        border:"2px solid red",
        borderRadius:"15px",
        color:"white",
        marginLeft:"20px"
        
        }
render(){ // it must have render method 
    return (
        <>
        <div style={this.btnstyle}>
        {this.props.btn}
        </div>
        </>
    )


}


}


export default Hbtn;