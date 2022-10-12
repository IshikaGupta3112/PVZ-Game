var positionleft=0;
var positiontop=0
var id =0;
var sun=500;
var img=-1;

var valuem=0;
var m1=0;

// }
function plantmove(img){
  id = setInterval(function () {
     window.addEventListener("mousemove",function(e){
      let image=document.getElementById('plantimage' + img);
      image.style.top = e.clientY-100 +"px" ;
      image.style.left = e.clientX-300 +"px";
      console.log(e.clientX+' '+e.clientY);
     positionleft= e.clientX;
   positiontop= e.clientY;
   
     });
   },0000);
  }
  document.getElementById('plantbtn').addEventListener("mousedown", () => {
    img++;
    if(sun>=100){
    
    document.getElementById('plantimage' + img).style.display="inline";
    setTimeout(plantmove(img), 0000);}
  });
  function ballmovement(i){
    setInterval(function (){
    i=0;
    document.getElementsByClassName("balls").style.right= i-"vw";
    i+1;
  },1000)

}
  function showball (){
    document.getElementById('ball1').style.display="inline";
    ballmovement(m1);
  }
  function showball1 (){
    document.getElementById('ball1_2').style.display="inline";
  }
  function showball2 (){
    document.getElementById('ball1_3').style.display="inline";
  }
  function showball3 (){
    document.getElementById('ball2').style.display="inline";
  }
  function showball4 (){
    document.getElementById('ball2_2').style.display="inline";
  }
  function showball5 (){
    document.getElementById('ball2_3').style.display="inline";
  }
  function showball6 (){
    document.getElementById('ball3').style.display="inline";
  }
  function showball7 (){
    document.getElementById('ball3_2').style.display="inline";
  }
  function showball8(){
    document.getElementById('ball3_3').style.display="inline";
  }
 function showimage(){
    document.getElementById('plantimage0').style.display="inline";
    document.getElementById('plantimage0').style.left=340+"px";
    document.getElementById('plantimage0').style.top= 80+"px";
    
  }
  function showimage1(){
    document.getElementById('plantimage1').style.display="inline";
    document.getElementById('plantimage1').style.left=450+"px";
    document.getElementById('plantimage1').style.top=80+"px";
    
  }
  function showimage2(){
    document.getElementById('plantimage2').style.display="inline";
    document.getElementById('plantimage2').style.left=550+"px";
    document.getElementById('plantimage2').style.top=80+"px";
    
  }
  function showimage3(){
    document.getElementById('plantimage3').style.display="inline";
    document.getElementById('plantimage3').style.left=350+"px";
    document.getElementById('plantimage3').style.top=280+"px";
    
  }
  function showimage4(){
    document.getElementById('plantimage4').style.display="inline";
    document.getElementById('plantimage4').style.left=450+"px";
    document.getElementById('plantimage4').style.top=280+"px";
    
  }
  function showimage5(){
    document.getElementById('plantimage5').style.display="inline";
    document.getElementById('plantimage5').style.left=550+"px";
    document.getElementById('plantimage5').style.top=280+"px";
    
  }
  function showimage6(){
    document.getElementById('plantimage6').style.display="inline";
    document.getElementById('plantimage6').style.left=330+"px";
    document.getElementById('plantimage6').style.top=500+"px";
    
  }
  function showimage7(){
    document.getElementById('plantimage7').style.display="inline";
    document.getElementById('plantimage7').style.left=450+"px";
    document.getElementById('plantimage7').style.top=500+"px";
    
  }
  function showimage8(){
    document.getElementById('plantimage8').style.display="inline";
    document.getElementById('plantimage8').style.left=550+"px";
    document.getElementById('plantimage8').style.top=500+"px";
    
  }
  
  window.addEventListener("mousedown", () => {
    // img++;
    if(positionleft>=341 && positionleft<=443 && positiontop>=69 && positiontop<=166){
        valuem=1;
        showball();
        showimage();
        sun-=100;
       }
    else if(positionleft>=449 && positionleft<=546 && positiontop>=69 && positiontop<=166){
      valuem=2;
      showball1();
      showimage1();
      sun-=100
     
      }
  else if(positionleft>=546 && positionleft<=556 && positiontop>=69 && positiontop<=166){
    valuem=3;
    showball2();
    showimage2();
    sun-=100
    }
 else if(positionleft>=332 && positionleft<=440 && positiontop>=269 && positiontop<=381){
  valuem=1;
  showball3();
  showimage3();
  sun-=100
}else if(positionleft>=442 && positionleft<=536 && positiontop>=269 && positiontop<=381){
  showimage4();
  valuem=2;
  showball4();
  sun-=100
}else if(positionleft>=536 && positionleft<=646 && positiontop>=269 && positiontop<=381){
 valuem=3;
  showball5();
  showimage5();
  sun-=100
}else if(positionleft>=321 && positionleft<=437 && positiontop>=472 && positiontop<=588){
  valuem=1;
  showball6();
  showimage6();
  sun-=100
}else if(positionleft>=437 && positionleft<=545 && positiontop>=472 && positiontop<=588){
valuem=2;
  showball7();
  showimage7();
  sun-=100
}
 else if(positionleft>=544 && positionleft<=656 && positiontop>=472 && positiontop<=588){
   valuem=3; 
    showball8();
    showimage8();
    sun-=100
}
else{
  document.getElementById('plantimage'+ (img)).style.top= 591 +"px";
  document.getElementById('plantimage'+ (img)).style.left= 681+"px"; 
}

        });
       