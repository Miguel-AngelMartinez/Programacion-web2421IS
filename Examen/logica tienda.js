var total=0;
var contador1=1;
var contador2=1;
var contador3=1;
var contador4=1;
var contador5=1;
var contador6=1;

var precios1=0;
var precios2=0;
var precios3=0;
var precios4=0;
var precios5=0;
var precios6=0;

function funcionamiento(){

    var marca=parseInt(document.getElementById("op").value);
    var objeto=document.getElementById("objet").value;

    if(marca==1){
        if(objeto=="Core i5"){
            total+=1900;
            precios1+=1900;
            document.getElementById("uno").innerHTML=`Productos (${contador1}): ${objeto} =$1900`;
            contador1++;
            

        }
        if(objeto=="Xeon"){
            total+=1300;
            precios2+=1300;
            document.getElementById("dos").innerHTML=`Producto (${contador2}): ${objeto} =$1300`;
            contador2++;
            
        }
        if(objeto=="Core i9"){
            total+=2900;
            precios3+=2900;
            document.getElementById("tres").innerHTML=`Producto(${contador3}): ${objeto} =$2900`;
            contador3++;
            
        }
    }
    
    if(marca==2){
        if(objeto=="Ryzen 5"||objeto=="Ryzen 5"){
            total+=2600;
            precios1+=2600;
            document.getElementById("cuatro").innerHTML=`Producto(${contador4}): ${objeto} =$2600`;
            contador4++;
            
        }
        if(objeto=="opteron"){
            total+=2470;
            precios1+=2470;
            document.getElementById("cinco").innerHTML=`Producto(${contador5}): ${objeto} =$2470`;
            contador5++;
            
        }
        if(objeto=="threadripper"){
            total+=4900;
            precios6+=4900;
            document.getElementById("seis").innerHTML=`Producto(${contador6}): ${objeto} =$4900`;
            contador6++;
        
        }
    }
    document.getElementById("precios").innerHTML=`Total:$ ${total}`;

    
    
    

}

function graficas(){

    //inicio de la grafica

    let ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Core i5', 'Ryzen 5', 'Xeon', 'Opteron', 'Core i9', 'Threadripper'],
            datasets: [{
                label: '# of Votes',
                data: [precios1, precios2, precios3, precios4, precios5, precios6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    

    //fin de la grafica

}