 let button = document.querySelector("#btn");         
 let res = document.querySelector(".res-nav")
 var count = 0     
    button.addEventListener("click",()=>{
      if(count == 0){
                res.style.height="10%";
                res.style.width="100%";
            count=1;
      }
      else{
        res.style.height="0";
        res.style.width="0";
        count = 0;
      }
     

            })
        