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
        let nombre;
        nombre = prompt("Ingrese su nombre:");
        console.log("Bienvenido "+nombre);
        cliente();
    }else{
        console.log("valor no valido, ingrese correctamente el tipo de usuario: \n empleado \n cliente");
        usuario = prompt("Tipo de usuario: \n empleado \n cliente ");
    }
};

user();

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

function ventas(){};
function stock(){};
function presupuesto(){};
function asistencia(){};

