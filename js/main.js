let entrada = prompt("Ingrese un pais: ");

while (entrada != "esc"){
    switch(entrada){
        case "argentina": 
            alert ("Argentina tiene 15 copas america y es el actual campeon");
            break;
        case "brasil": 
            alert ("Brasil tiene 9 copas america");
            break;
        case "uruguay":
            alert ("Uruguay tiene 15 copas america");
            break;
        case "paraguay":
            alert ("Paraguay tiene 2 copas america");
            break;
        case "chile": 
            alert ("Chile tiene 2 copas america");
            break;
        case "peru":
            alert ("Peru tiene 2 copas america");
            break;
        case "colombia":
            alert ("Colombia tiene 1 copa america");
            break;
        case "bolivia":
            alert ("Bolivia tiene 1 copa america");
            break;
        default:
            alert(entrada + " aun no tiene ninguna copa america");
            break;
        }
        entrada = prompt("Ingrese un pais: ");    
}
    