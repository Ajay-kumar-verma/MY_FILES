
const ip=document.createElement("input");

ip.style.position="fixed";
ip.style.top="100px";
ip.style.right="20px";
ip.style.backgroundColor="blue";
ip.style.color="white";
document.body.appendChild(ip);

let skip_btn;
(()=>{
    let status=true;
    window.addEventListener('keyup',e=>{
        const skip = document.getElementById("skip_question_extension_btn");
        // skip.style.display="none";
          //  console.log(e);
      if(e.code==='KeyS'||e.code==='KeyS')
        {

         if(status)skip.innerHTML="Skipping has been started...!";
         else
         skip.innerHTML="Skipping has been Stopped...!";
         
        let time=(ip.value>0)?ip.value:10;

        start_stop(status,skip,time);
         status=status?false:true;
      
        }
      if(e.code==='Space')
        {
         skip.click();
         clearInterval(skip_btn);
         skip.innerHTML="Skipping has been Stopped...!";
        //  console.log("Stop skipping...!");
        }
       })

})() 



const start_stop=(status,skip,time)=>
{      
    if(status)
    {  skip.click();
        skip_btn=setInterval(()=>{skip.click()},time*1000);
         console.log("Start Skipping ....!");
    }
      else
    {
        clearInterval(skip_btn);
        console.log("Stop skipping...!");
        // show_question();
    } 

}










