



const Input=(props)=>{
return (<>

<div style={{padding:"5px",backgroundColor:props.clr}}   >
<input type={props.type} name={props.name}  onChange={props.onClick}  defaultValue={props.val}     />

</div>


</>);

}

export default Input;