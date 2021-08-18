import React ,{useState} from  'react'

export const AddTodo=(props)=>{
const [title, settitle] = useState("");
const [desc, setdesc] = useState("");


const submit=(e)=>{
 e.preventDefault();  
  // console.log("Submit btn clicked \n ",title,desc);
  
  if(title==="" || desc===""){
    return;
  }
  
  props.setTodo(title,desc);
   setdesc("");settitle("");
}

const utitle=(e)=>{
  // console.log("Now title is ", e.target.value);
  settitle(e.target.value)
}


const udesc=(e)=>{
  // console.log("now desc is ",e.target.value);
  setdesc(e.target.value)
}

return (
    <div className="container my-3" >
          <h3> Add a Todo </h3>
<form onSubmit={submit} >
  <div className="form-group">
    <input type="text " class="form-control my-2" value={title}  onChange={(e)=>{utitle(e)}}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Todo title" />
    </div>
  <div className="form-group">
 
    <input type="text" className="form-control my-2" value={desc}  onChange={(e)=>{udesc(e)}}    id="exampleInputPassword1" placeholder="Todo desc" />
  </div>
  <button type="submit" className="btn my-1 btn-success" onClick={(e)=>{submit(e)}}  >Submit</button>
</form>
 
        </div>

)

}
