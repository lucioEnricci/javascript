function calcularOperacion(numero1, numero2, operacion){
    switch(operacion){
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            return numero1 / numero2;
        default:
            return console.log("Ingrese una operacion valida: \n + para suma \n - para resta \n * para multiplicar \n / para dividir");
    }
}


let resultadoOperacion;
let askAgain = true;
//mediante un do while recorremos una vez el ciclo para realizar una operacion, se solicitara tantas veces como sea necesario hasta que el usuario ingrese correctamente los valores.
//luego finalizara automaticamente.
do {
    let primerNumero = parseFloat(prompt("Ingrese un numero: "));
    let segundoNumero = parseFloat(prompt("Ingrese otro numero: "));
    //validacion para confirmar que el usuario ingreso un valor numerico antes de llamar a la funcion
    if  (!isNaN(primerNumero && segundoNumero)) {
        resultadoOperacion = calcularOperacion(primerNumero, segundoNumero, prompt("Ingrese la operacion a realizar: \n + para suma \n - para resta \n * para multiplicar \n / para dividir"));
        console.log(resultadoOperacion);
        askAgain = false;
    }else{
        alert("Algun valor no es un numero valido, por favor solo ingrese valores numericos")
    }
    
} while (askAgain);


