  
   window.onload = function(){
     var hou = 2;
     var sec = 60;
     setInterval(function(){

       document.getElementById("mock-timer").innerHTML = hou +" : " + sec ;
       sec;
       if(sec == 00)
       {
         hou;
         sec = 60;
         if (hou == 0)
         {
            hou = 2;
         }
       }
      },500);
    }