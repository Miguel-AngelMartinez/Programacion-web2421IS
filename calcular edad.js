function edades(){
var edad=parseInt(document.getElementById("num").value);
var opciones=parseInt(document.getElementById("op").value);    
    if(edad>0 && edad<3){
       
        if(opciones==1){
            document.getElementById("mostrar").value=(`tienes ${edad}años, eres un bebe!!!`);
        }
        if (opciones!=1) {
            document.getElementById("mostrar").value=(`tienes ${edad}años, no eres un bebe!!!`);
        }

    }

    if (edad>3 && edad<12) {

        if(opciones==2){
            document.getElementById("mostrar").value=(`tienes ${edad}años, eres un niño!!!`);
        }
        if (opciones!=2) {
            document.getElementById("mostrar").value=(`tienes ${edad}años, no eres un niño!!!`);
        }
        
    }

    if (edad>12 && edad<14) {
        
        if(opciones==3){
            document.getElementById("mostrar").value=(`tienes ${edad}años, eres un puberto!!!`);
        }
        if (opciones!=3) {
            document.getElementById("mostrar").value=(`tienes ${edad}años, no eres un puberto!!!`);
        }

    }
    
    if (edad>14 && edad<17) {
        
        if(opciones==4){
            document.getElementById("mostrar").value=(`tienes ${edad}años, eres un adolecente!!!`);
        }
        if (opciones!=4) {
            document.getElementById("mostrar").value=(`tienes ${edad}años, no eres un adolecente!!!`);
        }
        
    }
    
    if (edad>17 && edad<29) {

        if(opciones==5){
            document.getElementById("mostrar").value=(`tienes ${edad}años, eres un adulto joven!!!`);
        }
        if (opciones!=5) {
            document.getElementById("mostrar").value=(`tienes ${edad}años, no eres un adulto joven!!!`);
        }
        
    }
    
    if (edad>29 && edad<60) {

        if(opciones==6){
            document.getElementById("mostrar").value=(`tienes ${edad}años, eres un adulto!!!`);
        }
        if (opciones!=6) {
            document.getElementById("mostrar").value=(`tienes ${edad}años, no eres un adulto!!!`);
        }
        
    }
    
    if (edad>60 && edad<90) {
        
        if(opciones==7){
            document.getElementById("mostrar").value=(`tienes ${edad}años, eres un adulto mayor!!!`);
        }
        if (opciones!=7) {
            document.getElementById("mostrar").value=(`tienes ${edad}años, no eres un adulto mayor!!!`);
        }
    }
    if (edad>90 && edad<900) {
        document.getElementById("mostrar").value=(`tienes ${edad}años, guau apoco tienes esa edad XD!!!`);
    }
}

function reset(){
edad=0;
document.getElementById("mostrar").value=("");
}