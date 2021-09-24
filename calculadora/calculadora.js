

function calcular(){

    var num1=parseInt(document.getElementById("num-1").Value);
    var num2=parseInt(document.getElementById("num-2").Value);
    var operacion=document.getElementById("op").Value;
    
    if(operacion==1){
      document.getElementById("respuesta").value=num1+num2;
    }else{
        
        document.getElementById("respuesta").value=num1-num2;
    }
}