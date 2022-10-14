var arr=[0,0,0,0,0,0,0,0,0];
var point=150;
var pos1;
var pos2;
var pos3;
var pos4;
var pos5;
var pos6;
var health1=100;
var health2=100;
var health3=100;
var health4=100;
var health5=100;
var health6=100;
var check=1;
var check2=1;
var check3=1;
var check4=1;
var check5=1;
var check6=1;
var id2=0;
var id3=0;
var id4=0;
var id5=0;
var id6=0;
const ball1=document.getElementById('ball1');
const ball2=document.getElementById('ball2');
const ball3=document.getElementById('ball3');
const ball4=document.getElementById('ball4');
const ball5=document.getElementById('ball5');
const ball6=document.getElementById('ball6');
const ball7=document.getElementById('ball7');
const ball8=document.getElementById('ball8');
const ball9=document.getElementById('ball9');
console.log("h1"+health1);
document.getElementById('points').innerHTML=point;
function points(){
point+=50;
document.getElementById('points').innerHTML=point;
console.log(point);
if(sun1.marginTop!="100.37vh"){
    sun1.style.visibility="hidden";
}
}
    var walks1=document.getElementById('walk1');
    var walks2=document.getElementById('walk2');
    var walks3=document.getElementById('walk3');
    var walks4=document.getElementById('walk4');
    var walks5=document.getElementById('walk5');
    var walks6=document.getElementById('walk6');
    walks1.style.display="block";
    walks1.style.marginTop="8.15vh";
    var id1= setInterval(move,100);
	var pos1=97.2;
	let w = 22.2;  
	function move(){   
      
		if (pos1 <= w){
		pos1= 97.2+"vw";
        window.open("last.html" , "_self");
		} 
       else if(pos1<=42&&arr[2]===1){
        check=0;
        walks1.style.opacity="1";
        walks1.style.visibility="visible";
        walks1.style.marginLeft= pos1 +"vw";
       } 
       else if(pos1<=42&&arr[1]===1){
        check=0;
        walks1.style.visibility="visible";
        walks1.style.marginLeft= pos1 +"vw";
       } 
        else{
		walks1.style.marginLeft= pos1 +"vw";
		}
		pos1 -=0.3;
	}
    setTimeout(show,10000);
    function show(){
        walks2.style.marginTop="41.4vh"; 
        walks2.style.display='block';
        id2=setInterval(move2, 200);
         pos2=97.2;
	   let w =22.2;
	function move2(){
		if (pos2 <= w){
		pos2=97.2+"vw";
        window.open("last.html" , "_self");
		} 
        else if(pos2<=42&&arr[4]===1){
            check3=0;
            walks2.style.opacity="1";
            walks2.style.visibility="visible";
            walks2.style.marginLeft= pos2 +"vw";
           } 
           else if(pos2<=42&&arr[5]===1){
            check3=0;
            walks2.style.visibility="visible";
            walks2.style.marginLeft= pos2 +"vw";
           }  
        else{
		walks2.style.marginLeft= pos2 +"vw";
		}
		pos2 -=0.3;  
    }
}
setTimeout(show2,20000);
    function show2(){
        walks3.style.marginTop="70.26vh";
        walks3.style.display='block';
        id3=setInterval(move3, 200);
        pos3=97.2;
	   let w =22.2 ;
	function move3(){
		if (pos3 <= w){
		pos3= 97.2+"vw"
        window.open("last.html" , "_self");
		}  
        else if(pos3<=42&&arr[7]===1){
            check5=0;
            walks3.style.opacity="1";
            walks3.style.visibility="visible";
            walks3.style.marginLeft= pos3 +"vw";
           } 
           else if(pos3<=42&&arr[8]===1){
            check5=0;
            walks3.style.visibility="visible";
            walks3.style.marginLeft= pos3 +"vw";
           }  
        else{
		walks3.style.marginLeft= pos3 +"vw";
		}
		pos3 -=0.3;  
    }
}
setTimeout(show3,30000);
    function show3(){
        walks4.style.marginTop="8.15vh";
        walks4.style.display='block';
         id4=setInterval(move4, 200);
         pos4=97.2;
	   let w = 22.2;
	function move4(){
		if (pos4 <= w){
		pos4= 97.2+"vw";
        window.open("last.html" , "_self");
		}  
        else{
		walks4.style.marginLeft= pos4 +"vw";
		}
		pos4 -=0.3;  
    }
}
setTimeout(show4,40000);
    function show4(){
        walks5.style.marginTop="41.4vh"; 
        walks5.style.display='block';
        id5=setInterval(move5, 200);
        pos5=97.2;
	   let w =22.2;
	function move5(){
		if (pos5 <= w){
		pos5= 97.2+"vw";
        window.open("last.html" , "_self");
		}  
        else{
		walks5.style.marginLeft= pos5 +"vw";
		}
		pos5 -=0.3;  
    }
}
setTimeout(show5,50000);
    function show5(){
        walks6.style.marginTop="70.26vh";
        walks6.style.display='block';
        id6=setInterval(move6, 200);
       pos6=97.2;
	   let w =22.2;
	function move6(){
		if (pos6 <= w){
		pos6= 97.2+"vw";
        window.open("last.html" , "_self");
		}  
        else{
		walks6.style.marginLeft= pos6 +"vw";
		}
		pos6 -=0.3;  
    }
}
function see1(){
    if(point>=100){
    document.getElementById('plant1').style.visibility="visible";
    if( document.getElementById('plant1').style.visibility="visible"){
    point-=100;
    ball1.style.visibility="visible";
setInterval(shoot,20);
	let posi1=26;
	let r = 97.2;
	function shoot(){
		if (posi1 >= r){
            posi1= 26;
            ball1.style.visibility="visible"; 
		}
        else if(pos4-posi1<=0&&check2==1){
            posi1=26;
            health4-=20;
            walks4.style.opacity="0.5";
            setTimeout(function blink(){
                walks4.style.opacity="1";
            },100) ;
            if(health4===0){
                walks4.style.visibility="hidden";
                clearInterval(id4);
               check2=0;
               pos4=-1;   
            } 
        }
       else if(pos1-posi1<=0&&check==1){
            posi1=26;
            health1-=20; 
            walks1.style.opacity="0.5";
            setTimeout(function blink(){
                walks1.style.opacity="1";
            },100) ;
            if(health1===0){
                walks1.style.visibility="hidden";
                clearInterval(id1);
               check=0;  
               pos1=1000; 
            }
            }          
        else{
		ball1.style.marginLeft= posi1 +"vw";
		}
		posi1 +=0.3;
	}
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see2(){
    if(point>=100){
        arr[1]=1;
    document.getElementById('plant2').style.visibility="visible";
    if( document.getElementById('plant2').style.visibility="visible"){
    point-=100;
    ball2.style.visibility="visible";
    setInterval(shoot,20);
        let posi2=34;
        let r = 97.2;
        function shoot(){
            if (posi2 >= r){
            posi2= 34;
            }  
            else if(pos4-posi2<=0&&check2==1){
                posi2=34;
                health4-=20;
                walks4.style.opacity="0.5";
                setTimeout(function blink(){
                    walks4.style.opacity="1";
                },100) ; 
                if(health4===0){
                    walks4.style.visibility="hidden";
                    clearInterval(id4);
                   check2=0;
                   pos4=-1;   
                } 
            }
           else if(pos1-posi2<=0&&check==1){
                posi2=34;
                health1-=20; 
                walks1.style.opacity="0.5";
                setTimeout(function blink(){
                    walks1.style.opacity="1";
                },100) ; 
                if(health1===0){
                    walks1.style.visibility="hidden";
                    clearInterval(id1);
                   check=0;  
                   pos1=1000; 
                }
                } 
            else{
            ball2.style.marginLeft= posi2 +"vw";
            }
            posi2 +=0.3;
        }
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see3(){
    if(point>=100){
        arr[2]=1;
    document.getElementById('plant3').style.visibility="visible";
  
    if( document.getElementById('plant3').style.visibility="visible"){
    point-=100;
    ball3.style.visibility="visible";
    setInterval(shoot,20);
        let posi3=42;
        let r = 97.2;
        function shoot(){
            if (posi3 >= r){
            posi3= 42 ;
            }  
            else if(pos4-posi3<=0&&check2==1){
                posi3=42;
                health4-=20;
                walks4.style.opacity="0.5";
                setTimeout(function blink(){
                    walks4.style.opacity="1";
                },100) ; 
                if(health4===0){
                    walks4.style.visibility="hidden";
                    clearInterval(id4);
                   check2=0;
                   pos4=-1;   
                } 
            }
           else if(pos1-posi3<=0&&check==1){
                posi3=42;
                health1-=20; 
                walks1.style.opacity="0.5";
                setTimeout(function blink(){
                    walks1.style.opacity="1";
                },100) ;  
                if(health1===0){
                    walks1.style.visibility="hidden";
                    clearInterval(id1);
                   check=0;  
                   pos1=1000; 
                }
                } 
            else{
            ball3.style.marginLeft= posi3 +"vw";
            }
            posi3 +=0.3;
        }
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see4(){
    if(point>=100){
    document.getElementById('plant4').style.visibility="visible";
    if( document.getElementById('plant4').style.visibility="visible"){
    point-=100;
    ball4.style.visibility="visible";
    setInterval(shoot,20);
        let posi4=26;
        let r = 97.2;
        function shoot(){
            if (posi4 >= r){
            posi4= 26 ;
            }  
            else if(pos2-posi4<=0&&check3==1){
                posi4=26;
                health2-=20;
                walks2.style.opacity="0.5";
                setTimeout(function blink(){
                    walks2.style.opacity="1";
                },100) ; 
                if(health2===0){
                    walks2.style.visibility="hidden";
                    clearInterval(id2);
                   check3=0;
                   pos2=1000;   
                } 
            }
           else if(pos5-posi4<=0&&check4==1){
                posi4=26;
                health5-=20;
                walks5.style.opacity="0.5";
                setTimeout(function blink(){
                    walks5.style.opacity="1";
                },100) ;   
                if(health5===0){
                    walks5.style.visibility="hidden";
                    clearInterval(id5);
                   check4=0;  
                   pos5=-1; 
                }
                } 
               
            else{
            ball4.style.marginLeft= posi4 +"vw";
            }
            posi4 +=0.3;
        }
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see5(){
    if(point>=100){
        arr[4]=1;
    document.getElementById('plant5').style.visibility="visible";
    if( document.getElementById('plant5').style.visibility="visible"){
    point-=100;
    ball5.style.visibility="visible";
    setInterval(shoot,20);
        let posi5=34;
        let r = 97.2;
        function shoot(){
            if (posi5 >= r){
            posi5= 34 ;
            }  
            else if(pos2-posi5<=0&&check3==1){
                posi5=34;
                health2-=20;
                walks2.style.opacity="0.5";
                setTimeout(function blink(){
                    walks2.style.opacity="1";
                },100) ; 
                if(health2===0){
                    walks2.style.visibility="hidden";
                    clearInterval(id2);
                   check3=0;
                   pos2=1000;   
                } 
            }
           else if(pos5-posi5<=0&&check4==1){
                posi5=34;
                health5-=20; 
                walks5.style.opacity="0.5";
                setTimeout(function blink(){
                    walks5.style.opacity="1";
                },100) ;   
                if(health5===0){
                    walks5.style.visibility="hidden";
                    clearInterval(id5);
                   check4=0;  
                   pos5=-1; 
                }
                } 
            else{
            ball5.style.marginLeft= posi5 +"vw";
            }
            posi5 +=0.3;
        }
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see6(){
    if(point>=100){
        arr[5]=1;
    document.getElementById('plant6').style.visibility="visible";
    if( document.getElementById('plant6').style.visibility="visible"){
    point-=100;
    ball6.style.visibility="visible";
    setInterval(shoot,20);
        let posi6=42;
        let r = 97.2;
        function shoot(){
            if (posi6 >= r){
            posi6= 42 ;
            } 
            else if(pos2-posi6<=0&&check3==1){
                posi6=42;
                health2-=20;
                walks2.style.opacity="0.5";
                setTimeout(function blink(){
                    walks2.style.opacity="1";
                },100) ; 
                if(health2===0){
                    walks2.style.visibility="hidden";
                    clearInterval(id2);
                   check3=0;
                   pos2=1000;   
                } 
            }
           else if(pos5-posi6<=0&&check4==1){
                posi6=42;
                health5-=20;  
                walks5.style.opacity="0.5";
                setTimeout(function blink(){
                    walks5.style.opacity="1";
                },100) ;  
                if(health5===0){
                    walks5.style.visibility="hidden";
                    clearInterval(id5);
                   check4=0;  
                   pos5=-1; 
                }
                }  
            else{
            ball6.style.marginLeft= posi6 +"vw";
            }
            posi6 +=0.3;
        }
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see7(){
    if(point>=100){
    document.getElementById('plant7').style.visibility="visible";
    if( document.getElementById('plant7').style.visibility="visible"){
    point-=100;
    ball7.style.visibility="visible";
    setInterval(shoot,20);
        let posi7=26;
        let r = 97.2;
        function shoot(){
            if (posi7 >= r){
            posi7= 26 ;
            }  
            else if(pos3-posi7<=0&&check5==1){
                posi7=26;
                health3-=20;
                walks3.style.opacity="0.5";
                setTimeout(function blink(){
                    walks3.style.opacity="1";
                },100) ;  
                if(health3===0){
                    walks3.style.visibility="hidden";
                    clearInterval(id3);
                   check5=0;
                   pos3=1000;   
                } 
            }
           else if(pos6-posi7<=0&&check6==1){
                posi7=26;
                health6-=20;
                walks6.style.opacity="0.5";
                setTimeout(function blink(){
                    walks6.style.opacity="1";
                },100) ;    
                if(health6===0){
                    walks6.style.visibility="hidden";
                    clearInterval(id6);
                   check6=0;  
                   pos6=-1; 
                }
                } 
            else{
            ball7.style.marginLeft= posi7 +"vw";
            }
            posi7+=0.3;
        }
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see8(){
    if(point>=100){
        arr[7]=1;
    document.getElementById('plant8').style.visibility="visible";
    if( document.getElementById('plant8').style.visibility="visible"){
    point-=100;
    ball8.style.visibility="visible";
    setInterval(shoot,20);
        let posi8=34;
        let r = 97.2;
        function shoot(){
            if (posi8 >= r){
            posi8= 34 ;
            } 
            else if(pos3-posi8<=0&&check5==1){
                posi8=34;
                health3-=20;
                walks3.style.opacity="0.5";
                setTimeout(function blink(){
                    walks3.style.opacity="1";
                },100) ;  
                if(health3===0){
                    walks3.style.visibility="hidden";
                    clearInterval(id3);
                   check5=0;
                   pos3=1000;   
                } 
            }
           else if(pos6-posi8<=0&&check6==1){
                posi8=34;
                health6-=20;  
                walks6.style.opacity="0.5";
                setTimeout(function blink(){
                    walks6.style.opacity="1";
                },100) ;  
                if(health6===0){
                    walks6.style.visibility="hidden";
                    clearInterval(id6);
                   check6=0;  
                   pos6=-1; 
                }
                }  
            else{
            ball8.style.marginLeft= posi8 +"vw";
            }
            posi8 +=0.3;
        }
    document.getElementById('points').innerHTML=point;
    }
    }
}
function see9(){
    if(point>=100){
        arr[8]=1;
    document.getElementById('plant9').style.visibility="visible";
    if( document.getElementById('plant9').style.visibility="visible"){
    point-=100;
    ball9.style.visibility="visible";
    setInterval(shoot,20);
        let posi9=42;
        let r = 97.2;
        function shoot(){
            if (posi9 >= r){
            posi9= 42 ;
            }  
            else if(pos3-posi9<=0&&check5==1){
                posi9=42;
                health3-=20;
                walks3.style.opacity="0.5";
                setTimeout(function blink(){
                    walks3.style.opacity="1";
                },100) ;  
                if(health3===0){
                    walks3.style.visibility="hidden";
                    clearInterval(id3);
                   check5=0;
                   pos3=1000;   
                } 
            }
           else if(pos6-posi9<=0&&check6==1){
                posi9=42;
                health6-=20;
                walks6.style.opacity="0.5";
                setTimeout(function blink(){
                    walks6.style.opacity="1";
                },100) ;    
                if(health6===0){
                    walks6.style.visibility="hidden";
                    clearInterval(id6);
                   check6=0;  
                   pos6=-1; 
                }
                } 
            else{
            ball9.style.marginLeft= posi9 +"vw";
            }
            posi9 +=0.3;
        }
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
setInterval(function check(){
    if((walks1.style.visibility==="hidden") && (walks2.style.visibility==="hidden") && (walks3.style.visibility==="hidden") && (walks4.style.visibility==="hidden") && (walks5.style.visibility==="hidden") && (walks6.style.visibility==="hidden")){
        console.log('bye');
    window.location.assign('win.html');
    }
},1000)