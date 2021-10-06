



let skip_btn;
(()=>{
    let status=true;
    const skip = document.getElementById("skip_question_extension_btn");
    window.addEventListener('keyup',e=>{
        // console.log(e);
      if(e.code==='KeyS'||e.code==='KeyS')
        {
         start_stop(status,skip);
         status=status?false:true;
        }
      if(e.code==='Space')
        {
         skip.click();
         clearInterval(skip_btn);
         console.log("Stop skipping...!");
        }
       })

})() 



const start_stop=(status,skip)=>
{      
    if(status)
    {  skip.click();
        skip_btn=setInterval(()=>{skip.click()},5000);
         console.log("Start Skipping ....!");
    }
      else
    {
        clearInterval(skip_btn);
        console.log("Stop skipping...!");
        // show_question();
    } 

}


const show_question=()=>{
    
 const question=  document.getElementsByClassName("sc-fHxwqH jGSJri");
 console.log(question);

const div=document.createElement('div');
 div.height="auto";
 div.width="auto";

 div.innerText=question.innerText;
 document.body.appendChild(div);
}








