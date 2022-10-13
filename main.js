var point=150;
document.getElementById('points').innerHTML=point;
function points(){
point+=50;
document.getElementById('points').innerHTML=point;
console.log(point);
if(sun1.marginTop!="100.37vh"){
    sun1.style.visibility="hidden";
}
}
function see1(){
    if(point>=100){
    document.getElementById('plant1').style.visibility="visible";
    if( document.getElementById('plant1').style.visibility="visible"){
    point-=100;
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see2(){
    if(point>=100){
    document.getElementById('plant2').style.visibility="visible";
    if( document.getElementById('plant2').style.visibility="visible"){
    point-=100;
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see3(){
    if(point>=100){
    document.getElementById('plant3').style.visibility="visible";
    if( document.getElementById('plant3').style.visibility="visible"){
    point-=100;
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see4(){
    if(point>=100){
    document.getElementById('plant4').style.visibility="visible";
    if( document.getElementById('plant4').style.visibility="visible"){
    point-=100;
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see5(){
    if(point>=100){
    document.getElementById('plant5').style.visibility="visible";
    if( document.getElementById('plant5').style.visibility="visible"){
    point-=100;
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see6(){
    if(point>=100){
    document.getElementById('plant6').style.visibility="visible";
    if( document.getElementById('plant6').style.visibility="visible"){
    point-=100;
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see7(){
    if(point>=100){
    document.getElementById('plant7').style.visibility="visible";
    if( document.getElementById('plant7').style.visibility="visible"){
    point-=100;
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see8(){
    if(point>=100){
    document.getElementById('plant8').style.visibility="visible";
    if( document.getElementById('plant8').style.visibility="visible"){
    point-=100;
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see9(){
    if(point>=100){
    document.getElementById('plant9').style.visibility="visible";
    if( document.getElementById('plant9').style.visibility="visible"){
    point-=100;
    document.getElementById('points').innerHTML=point;
    }
    }
}     
 var my1=(Math.floor((Math.random()*4)+1)); 
var sun1=document.getElementById('sun');
    setTimeout(sunny , 5000);
    function sunny(){
if(my1==1){
sun1.style.marginLeft="18.75vw";
}
else if(my1==2){
sun1.style.marginLeft="44.44vw"; 
}
else if(my1==3){
sun1.style.marginLeft="65.2vw"; 
}
else{
sun1.style.marginLeft="86.1vw"; 
}
setInterval(moves,40);
var pos=-15.05;
let l=100.37;
function moves(){
if(pos>=l){
    sun1.style.visibility="visible";
    pos=-15.05;
    var my1=(Math.floor((Math.random()*4)+1)); 
    if(my1==1){
sun1.style.marginLeft="18.75vw";
}
else if(my1==2){
sun1.style.marginLeft="47.22vw"; 
}
else if(my1==3){
sun1.style.marginLeft="65.2vw"; 
}
else{
sun1.style.marginLeft="86.1vw"; 
}
}
else{
    sun1.style.marginTop=pos+'vh';
}
pos+=0.627;
}
}  
var walks1=document.getElementById('walk1');
    var walks2=document.getElementById('walk2');
    var walks3=document.getElementById('walk3');
    var walks4=document.getElementById('walk4');
    var walks5=document.getElementById('walk5');
    var walks6=document.getElementById('walk6');
    walks1.style.display="block";
    var my=(Math.floor((Math.random()*3)+1)); 
    if(my===1){
        walks1.style.marginTop="8.15vh";
    }
    else if(my===2){
        walks1.style.marginTop="41.4vh"; 
    }
    else{
        walks1.style.marginTop="70.26vh";
    }
    setInterval(move,200);
	let pos=97.2;
	let w = 22.2;
	function move(){
		if (pos <= w){
		pos= 97.2+"vw" ;
        walks1.style.display="none";
		}  
        else{
		walks1.style.marginLeft= pos +"vw";
		}
		pos -=0.3;
	}
    setTimeout(show,10000);
    function show(){
        var my=(Math.floor((Math.random()*3)+1)); 
        if(my===1){
        walks2.style.marginTop="8.15vh";
    }
    else if(my===2){
        walks2.style.marginTop="41.4vh"; 
    }
    else{
        walks2.style.marginTop="70.26vh";
    }
        walks2.style.display='block';
        setInterval(move2, 200);
        let pos2=97.2;
	   let w2 =22.2;
	function move2(){
		if (pos2 <= w){
		pos2=97.2+"vw";
        walks2.style.display="none";
		}  
        else{
		walks2.style.marginLeft= pos2 +"vw";
		}
		pos2 -=0.3;  
    }
}
setTimeout(show2,20000);
    function show2(){
        var my=(Math.floor((Math.random()*3)+1)); 
        if(my===1){
        walks3.style.marginTop="8.15vh";
    }
    else if(my===2){
        walks3.style.marginTop="41.4vh"; 
    }
    else{
        walks3.style.marginTop="70.26vh";
    }
        walks3.style.display='block';
        setInterval(move3, 200);
        let pos3=97.2;
	   let w3 =22.2 ;
	function move3(){
		if (pos3 <= w){
		pos3= 97.2+"vw"
        walks3.style.display="none";
		}  
        else{
		walks3.style.marginLeft= pos3 +"vw";
		}
		pos3 -=0.3;  
    }
}
setTimeout(show3,30000);
    function show3(){
        var my=(Math.floor((Math.random()*3)+1)); 
        if(my===1){
        walks4.style.marginTop="8.15vh";
    }
    else if(my===2){
        walks4.style.marginTop="41.4vh"; 
    }
    else{
        walks4.style.marginTop="70.26vh";
    }
        walks4.style.display='block';
        setInterval(move4, 200);
        let pos4=97.2;
	   let w4 = 22.2;
	function move4(){
		if (pos4 <= w){
		pos4= 97.2+"vw";
        walks4.style.display="none";
		}  
        else{
		walks4.style.marginLeft= pos4 +"vw";
		}
		pos4 -=0.3;  
    }
}
setTimeout(show4,40000);
    function show4(){
        var my=(Math.floor((Math.random()*3)+1)); 
        if(my===1){
        walks5.style.marginTop="8.15vh";
    }
    else if(my===2){
        walks5.style.marginTop="41.4vh"; 
    }
    else{
        walks5.style.marginTop="70.26vh";
    }
        walks5.style.display='block';
        setInterval(move5, 200);
        let pos5=97.2;
	   let w5 =22.2;
	function move5(){
		if (pos5 <= w){
		pos5= 97.2+"vw";
        walks5.style.display="none";
		}  
        else{
		walks5.style.marginLeft= pos5 +"vw";
		}
		pos5 -=0.3;  
    }
}
setTimeout(show5,50000);
    function show5(){
        var my=(Math.floor((Math.random()*3)+1)); 
        if(my===1){
        walks6.style.marginTop="8.15vh";
    }
    else if(my===2){
        walks6.style.marginTop="41.4vh"; 
    }
    else{
        walks6.style.marginTop="70.26vh";
    }
        walks6.style.display='block';
        setInterval(move6, 200);
        let pos6=97.2;
	   let w6 =22.2;
	function move6(){
		if (pos6 <= w){
		pos6= 97.2+"vw";
        walks6.style.display="none";
		}  
        else{
		walks6.style.marginLeft= pos6 +"vw";
		}
		pos6 -=0.3;  
    }
}
