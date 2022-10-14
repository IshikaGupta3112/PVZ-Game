setInterval(button , 1500);
function button(){
    setTimeout(btn1 , 750);
    setTimeout(btn2, 1500);
function btn1(){ 
document.getElementById('button').style.height='3.5rem';
document.getElementById('button').style.width='19rem';
document.getElementById('button-heading').style.fontSize='1.5rem';
}  
function btn2(){  
    document.getElementById('button').style.height='3rem';
    document.getElementById('button').style.width='17rem';
    document.getElementById('button-heading').style.fontSize='1rem';
    }  
}
   
setInterval(load , 200);
var wid=0;
var max=30;
function load(){
if(wid>max){
    document.getElementById('orange').style.width= max+"vw";
    document.getElementById('orange').style.visibility= "hidden";
    document.getElementById('white').style.visibility= "hidden";
    document.getElementById('button').style.visibility="visible";
}
else{
    document.getElementById('orange').style.width=wid+"vw";
    console.log(wid);
}
wid+=1.5;
}
