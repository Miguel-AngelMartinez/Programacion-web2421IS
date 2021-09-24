var estado=false;
var vida=parseInt(100);
var progreso=parseInt(0);


function datos(){
    var nombre=document.getElementById("jugador").value;
    if (nombre==""){
        alert("ingresar nombre de jugador 1");
        nombre.focus();
    }
    
    document.getElementById("mostrar").innerHTML=(`jugador: ${nombre}`);
    estado=true;
    document.getElementById("estatus").innerHTML=(`vida actual:${vida}`);
}

var a=new Array(9);
var b=new Array(9);
var c=new Array(9);
var d=new Array(9);
var f=new Array(9);

var g=new Array(9);
var h=new Array(9);
var i=new Array(9);
var j=new Array(9);
var k=new Array(9);



for (let index = 0; index < 9; index++) {

    a[index]=Math.floor(Math.random() * 10);
    b[index]=Math.floor(Math.random() * 10);
    c[index]=Math.floor(Math.random() * 10);
    d[index]=Math.floor(Math.random() * 10);
    f[index]=Math.floor(Math.random() * 10);

    g[index]=Math.floor(Math.random() * 10);
    h[index]=Math.floor(Math.random() * 10);
    i[index]=Math.floor(Math.random() * 10);
    j[index]=Math.floor(Math.random() * 10);
    k[index]=Math.floor(Math.random() * 10);  
}

//logica del juego
function juego(){
    
    var fila=document.getElementById("op").value;
    var poscicion=parseInt(document.getElementById("pos").value);

        if (fila=="A") {
          
                if(a[poscicion]==5){
                   
                        vida-=25;
                        document.getElementById("estatus").innerHTML=(`vida actual: ${vida}`);
                        alert("upps exploto una mina!!");
                }     
            
        }

        if (fila=="B") {
            
                    if(b[poscicion]==5){
                        vida-=25;
                        document.getElementById("estatus").innerHTML=(`vida actual: ${vida}`);
                        alert("upps exploto una mina!!");
                    }
                }     
            
        

        if (fila=="C") {
            
                    if(c[poscicion]==5){
                        vida-=25;
                        document.getElementById("estatus").innerHTML=(`vida actual: ${vida}`);
                        alert("upps exploto una mina!!");

                    }
                }     
          

        if (fila=="D") {
            
                    if(d[poscicion]==5){
                        vida-=25;
                        document.getElementById("estatus").innerHTML=(`vida actual: ${vida}`);
                        alert("upps exploto una mina!!");

                    }
                }     
          

        if (fila=="E") {
            
                    if(e[poscicion]==5){
                        vida-=25;
                        document.getElementById("estatus").innerHTML=(`vida actual: ${vida}`);
                        alert("upps exploto una mina!!");

                    }
                }     
           

        if (fila=="F") {
            
                    if(f[poscicion]==5){
                        vida-=25;
                        document.getElementById("estatus").innerHTML=(`vida actual: ${vida}`);
                        alert("upps exploto una mina!!");

                    }
                }     
          

        //segunda seccion

        if (fila=="G") {
          
                    if(g[poscicion]==5){
                        vida-=25;
                        document.getElementById("estatus").innerHTML=(`vida actual: ${vida}`);
                        alert("upps exploto una mina!!");

                    }
                }     
         
        if (fila=="H") {
           
                    if(h[poscicion]==5){
                        vida-=25;
                        document.getElementById("estatus").innerHTML=(`vida actual: ${vida}`);
                        alert("upps exploto una mina!!");

                    }
                }     
           

        if (fila=="I") {
            
                    if(i[poscicion]==5){
                        vida-=25;
                        document.getElementById("estatus").innerHTML=(`vida actual: ${vida}`);
                        alert("upps exploto una mina!!");
                    }
                }     
          
        if (fila=="J") {
            
                    if(j[poscicion]==5){
                        vida-=25;
                        document.getElementById("estatus").innerHTML=(`vida actual: ${vida}`);
                        alert("upps exploto una mina!!");
                    }
                }     
            

        if (fila=="K") {
          
                    if(k[poscicion]==5){
                        vida-=25;
                        document.getElementById("estatus").innerHTML=(`vida actual: ${vida}`);
                        alert("upps exploto una mina!!");
                    }
                }     
       tablero();          
}

function Mina(){
    //encontrar minas
    var fila=document.getElementById("op").value;
    var poscicion=document.getElementById("pos").value;

    if (fila=="A") {
          
        if(a[poscicion]==5){
           
                progreso+=10;
                document.getElementById("estatus2").innerHTML=(`progreso actual: ${progreso}`);
            alert("entro una mina");
        }     
    
}

if (fila=="B") {
    
            if(b[poscicion]==5){
                progreso+=10;
                document.getElementById("estatus2").innerHTML=(`progreso actual: ${progreso}`);
                alert("entro una mina");
            }
        }     
    


if (fila=="C") {
    
            if(c[poscicion]==5){
                progreso+=10;
                document.getElementById("estatus2").innerHTML=(`progreso actual: ${progreso}`);
                alert("entro una mina");

            }
        }     
  

if (fila=="D") {
    
            if(d[poscicion]==5){
                progreso+=10;
                document.getElementById("estatus2").innerHTML=(`progreso actual: ${progreso}`);
                alert("entro una mina");

            }
        }     
  

if (fila=="E") {
    
            if(e[poscicion]==5){
                progreso+=10;
                document.getElementById("estatus2").innerHTML=(`progreso actual: ${progreso}`);
                alert("entro una mina");

            }
        }     
   

if (fila=="F") {
    
            if(f[poscicion]==5){
                progreso+=10;
                document.getElementById("estatus2").innerHTML=(`progreso actual: ${progreso}`);
                alert("entro una mina");

            }
        }     
  

//segunda seccion

if (fila=="G") {
  
            if(g[poscicion]==5){
                progreso+=10;
                document.getElementById("estatus2").innerHTML=(`progreso actual: ${progreso}`);
                alert("entro una mina");

            }
        }     
 
if (fila=="H") {
   
            if(h[poscicion]==5){
                progreso+=10;
                document.getElementById("estatus2").innerHTML=(`progreso actual: ${progreso}`);
                alert("entro una mina");

            }
        }     
   

if (fila=="I") {
    
            if(i[poscicion]==5){
                progreso+=10;
                document.getElementById("estatus2").innerHTML=(`progreso actual: ${progreso}`);
                alert("entro una mina");
            }
        }     
  
if (fila=="J") {
    
            if(j[poscicion]==5){
                progreso+=10;
                document.getElementById("estatus2").innerHTML=(`progreso actual: ${progreso}`);
                alert("entro una mina");
            }
        }     
    

if (fila=="K") {
  
            if(k[poscicion]==5){
                progreso+=10;
                document.getElementById("estatus2").innerHTML=(`progreso actual: ${progreso}`);
                alert("entro una mina");
            }
        }  
        
        tablero();

}



function tablero(){
    
if(vida==0){
    alert("estas bien muerto");
}
if(progreso==100){
    alert("haz ganado");
}

}

function reset(){
    nombre="";
    vida=100;
    progreso=0;

    document.getElementById("estatus").innerHTML=(`vida actual:${vida}`);
    document.getElementById("estatus2").innerHTML=(`progreso actual:0`);


}
