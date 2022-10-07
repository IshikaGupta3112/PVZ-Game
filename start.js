setInterval(button , 1000);
function button(){
    setTimeout(btn1 , 500);
    setTimeout(btn2, 1000);
function btn1(){ 
document.getElementById('button').style.height='4rem';
document.getElementById('button').style.width='20rem';
document.getElementById('button').style.color="black";
document.getElementById('button-heading').style.fontSize='2rem';
}  
function btn2(){  
    document.getElementById('button').style.height='3rem';
    document.getElementById('button').style.width='17rem';
    document.getElementById('button').style.color="white";
    document.getElementById('button-heading').style.fontSize='1rem';
    }  
}
setTimeout(text,1000);
function text(){
    document.getElementById('text').style.visibility="visible";
}
setTimeout(btn,2000);
function btn(){
    document.getElementById('button').style.visibility="visible";
}
