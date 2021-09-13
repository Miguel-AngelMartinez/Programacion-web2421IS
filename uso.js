/* 
pedir dato en modo alert
var nombre=prompt("nombre");
document.write("hola "+nombre);
*/

/* escribir endocumento
var saludo= "hola guapo!! ";
var pregunta=saludo+"como estas ???";
resultado=pregunta;
document.write(resultado);
*/

/*
var num=0;
do {
    document.write(`<p>${num}</p>`+`<br>`);
    num++;

} while (num<6);
*/


var  elemento=[1,2,3,4,5,6,7,8,9];
var elemento2=[10,12,19,20,5];
console.log(elemento);
console.log(elemento2);

console.log("----------------------------")
for(var x=0;x<elemento2.length;x++){
    for (var i=0; i<elemento.length;i++) {
     if (elemento2[x]==elemento[i]) {
         alert(elemento2[x]);
     }
    }
}

    


function dividirCadena(cadenaADividir,separador) {
    var arrayDeCadenas = cadenaADividir.split(separador);
   
 
    for (var i=0; i < arrayDeCadenas.length; i++) {
       console.log(arrayDeCadenas[i] + "  ");
    }
 }
 
 var cadenaVerso = "aoesps.";
 
 
 var espacio = " ";

 
 dividirCadena(cadenaVerso, espacio);
 dividirCadena(cadenaVerso);
 

 
