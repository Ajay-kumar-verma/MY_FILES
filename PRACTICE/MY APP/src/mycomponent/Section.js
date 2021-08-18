



const Section=(props)=>{


return (
<> 
{/* Here event is calling and not passing any argument  */}
<div  id="23"  onClick={props.event} style={{color:props.clr,cursor:"pointer"}} >
 
 my name is {props.name}
</div>


</>
);

}

export default Section;