//ctrl + shift + R recargar  pagina
var num1=10;
var num2=10;
var rec;
var res;
var operacion= prompt("ingresa la operacion");

var test=operaciones();
alert(test);
function operaciones(){
    
    if(operacion=="suma"){
      suma();
    }
    if(operacion=="resta"){
        resta();
    }
    if(operacion=="multiplicacion"){
    multiplicacion();
    }
    if(operacion=="divicion"){
    divicion();
    }
    rec=res;
    return rec;
}

function suma(){
    res=num1+num2;

}
function resta(){
    res=num1-num2;
}
function multiplicacion(){
    res=num1*num2;
}
function divicion(){
    res=num1/num2;
}

