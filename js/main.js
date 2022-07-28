//creo una funcion para verificar si entra un empleado de la tienda o un cliente
//mediante un for verifico la clave de seguridad con 3 intentos para colocar correctamente la clave
let compra=0;
let presup=0;
let nombre;
function user(){
    let usuario = prompt("Tipo de usuario: \n empleado \n cliente ");
    if (usuario == "empleado"){
        let clave;
        for(let i=0;i<=3;i++){
            clave = prompt("Ingrese la clave:");
            if (clave == "1234"){
                console.log("Bienvenido");
                empleado();
                break;
            }else{
                console.log("Clave erronea, restan "+(3-i)+" intentos");
            }
        }     
    }else if (usuario=="cliente"){
        nombre = prompt("Ingrese su nombre:");
        console.log("Bienvenido "+nombre);
        cliente();
    }else{
        console.log("valor no valido, ingrese correctamente el tipo de usuario: \n empleado \n cliente");
        usuario = prompt("Tipo de usuario: \n empleado \n cliente ");
    }
};

user();
//funcion para solicitar al empleado que accion desea hacer, mediante un if llamo a la funcion deseada

function empleado(){
    let accion = prompt("Indique el numero de la accion a realizar: \n 1) cargar venta \n 2) ingresar stock");
    if (accion == "1"){
        ventas();
    }else if (accion == "2"){
        stock();
    }else{
        console.log("valor no valido, ingrese correctamente el tipo de accion: \n 1) cargar venta \n 2) ingresar stock");
        accion = prompt("Indique el numero de la accion a realizar: \n 1) cargar venta \n 2) ingresar stock");
    }
};
//funcion para solicitar al cliente las opciones que puede realizar, pedir presupuesto de mercaderia o llamar a un asistente

function cliente(){
    let opcion = prompt("Indique el numero de las opciones: \n 1) solicitar presupuesto \n 2) llamar a un asistente");
    if (opcion == "1"){
        presupuesto();
    }else if (opcion == "2"){
        asistencia();
    }else{
        console.log("valor no valido, ingrese correctamente el tipo de opcion: \n 1) solicitar presupuesto \n 2) llamar a un asistente");
        opcion = prompt("Indique el numero de las opciones: \n 1) solicitar presupuesto \n 2) llamar a un asistente");
    }
};

function ventas(){
    let carrito = parseFloat(prompt("Ingrese el valor del producto:"));
    while (carrito != "esc"){
        compra=compra+carrito;
        console.log("El monto de la compra es de $"+compra);
        carrito = parseFloat(prompt("Ingrese el valor del producto: \n escriba esc para finalizar."));
    }
};

function stock(){
    let mouse = prompt("Indique la cantidad de mouses en stock:");
    let teclado = prompt("Indique la cantidad de teclados en stock:");
    let monitor = prompt("Indique la cantidad de monitores en stock:");
    let silla = prompt("Indique la cantidad de sillas en stock:");
    console.log("En stock:\n mouses:"+mouse+"\n teclados:"+teclado+"\n monitores:"+monitor+"\n sillas:"+silla)
};



function presupuesto(){
    let orden = prompt("Ingrese la orden que desea presupuestar: \n mouse \n teclado \n monitor \n silla");
    while (orden != "esc"){
        switch (orden){
            case "mouse":
                console.log("El mouse tiene un valor de $500");
                presup=presup+500;
                break;
            case "teclado":
                console.log("El teclado tiene un valor de $1000");
                presup=presup+1000;
                break;
            case "monitor":
                console.log("El monitor tiene un valor de $5000");
                presup=presup+5000;
                break;
            case "silla":
                console.log("La silla gamer tiene un valor de $7000");
                presup=presup+7000;
                break;
            case "total":
                console.log("El presupuesto total es de: $"+presup);
                break;
            default:
                console.log("Ingrese un valor valido.");
                break;               
        }orden = prompt("Ingrese la orden que desea presupuestar: \n mouse \n teclado \n monitor \n silla \n total (para ver el presupuesto total) \n esc para salir"); 
    }
};


function asistencia(){
    let contacto = prompt("Por favor "+nombre+" dejenos su correo electronico");
    console.log(nombre+" en instantes un representante se comunicara con usted al siguiente correo:"+contacto);

};

