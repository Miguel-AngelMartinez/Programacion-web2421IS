
var total=0;
function funcionamiento(){

    var marca=parseInt(document.getElementById("op").value);
    var objeto=document.getElementById("objet").value;

    if(marca==1){
        if(objeto=="Core i5"){
            total+=1900;
            document.getElementById("uno").innerHTML=`Producto: ${objeto} =$1900`;


        }
        if(objeto=="Xeon"){
            total+=1300;
            document.getElementById("dos").innerHTML=`Producto: ${objeto} =$1300`;
            
        }
        if(objeto=="Core i9"){
            total+=2900;
            document.getElementById("tres").innerHTML=`Producto: ${objeto} =$2900`;
            
        }
    }
    
    if(marca==2){
        if(objeto=="Ryzen 5"||objeto=="Ryzen 5"){
            total+=2600;
            document.getElementById("cuatro").innerHTML=`Producto: ${objeto} =$2600`;
        }
        if(objeto=="opteron"){
            total+=2470;
            document.getElementById("cinco").innerHTML=`Producto: ${objeto} =$2470`;
        }
        if(objeto=="threadripper"){
            total+=4900;
            document.getElementById("seis").innerHTML=`Producto: ${objeto} =$4900`;
        }
    }
    document.getElementById("precios").innerHTML=`Total:$ ${total}`;
    

}