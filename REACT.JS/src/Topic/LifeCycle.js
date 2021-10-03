import React from 'react'

class LifeCycle extends React.Component {
// 1 execute 
  constructor(props){
//   SETTING ALL STATE HERE 
 super(props);
this.state={name:"Ajay",
addr:"Patna",
title:"Verma",
val:true
};
 
 console.log("I am constructor ...!");
  }


  shouldComponentUpdate() {
   // this is execute before rendering and after the
   // getDerivedStatefrom props 
   // it return Boolean values ... when it true it call render method 
   console.log("I am  shouldComponenetUpdate....!")
    return true;
  }
  


//   It must be static and called jsut before rendering the method 
  static getDerivedStateFromProps(props, state) {
    //   if its there before rendering alwys it will execute
     console.log("i am getDerivedStateFromProps") 
    return {title: "Yadav"};
  }



  componentDidMount(){
    // componentDidMount will called once after component  rendering 
    //   if we make any changes her ecomponent will re- render 
    //Mounting Means Rendering first time Components ....
    
    console.log("I am component did mount ....");
    setTimeout(() => {
        this.setState({name:"Rajiv"});
          }, 2000);
 
          setTimeout(() => {
            this.setState({val:false});
              }, 4000);
        }


 componentDidUpdate() {
 console.log(" I am  ComponentDidUpdate....");
 }


 getSnapshotBeforeUpdate(prevProps, prevState) {
   console.log("I am getSnapshotBeforeUpdate ....!");
  }


  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

     render(){
    //   render method is required for output the DOM
        console.log("I am a Render method ...1")
        let name;

        if(this.state.val)
         {
            name=<Name />;
         }

        
        return (
        // Here must be purely html parts 
        // return is not a function 
        // here we can twrite any logic
             <div>
            <p>My name is :{this.state.name}</p>  
            <p>My address is :{this.state.addr} </p>  
            <p>My Title is :{this.state.title}</p>  
             <p> {name}</p>
            {/* {(this.state.val)?"I AM TRUE":"I AM FALSE.."} */}

            </div>
         )
    
    
    }



  }

export default LifeCycle;

const Name=()=>{

  return "Ajay";
}
