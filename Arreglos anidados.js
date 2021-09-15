var fetiches={
    "gustos":{
        "habito":"dormir",
        "habito2":"comer",
        "habito3":"jugar",
        "habito4":"leer",
        "habito5":"escuchar musica",
        
    },
    "lenguajes":{
        "nivel maquina":"c++",
        "avanzados":"C#",
        "avanzados2":"java",
        "interpretado":"Python",
        "nivel maquina2":"cobol",
    },
    "musica":{
        "uno":"rock",
        "dos":"rap",
        "tres":"ska",
        "cuatro":"electronica",
        "quinto":"bachata"
    },
    "Videojuegos":{
        "shoters":"call of duy",
        "rol":"genshin impact",
        "aventura":"minecraft",
        "miedo":"outlas",
        "Cartas":"clash royale"
    },
    "preferencias":{
        "consolas":"Xbox",
        "emuladores":"my boy",
        "emulador 2":"ppsspp",
        "emulador 3":"3ds",
        "emulador 4":"DS",
    }

};

console.log(fetiches);

function evento(){
    let recuperado=document.getElementById(uno).value;
    alert(`${recuperado} hola`);
}

evento();
