// ELIGIENDO EL MÉTODO
// Elige el método que mejor te sea conveniente para llegar al resultado de los 3 escenarios

/*
    unshift():  Agrega uno o más elementos al principio de un array.
    concat():   Combinar dos o más arrays en un nuevo array sin modificar los arrays originales.
    slice():    Crea una copia superficial de parte de un array en un nuevo array.
    shift():    Elimina y devuelve el primer elemento de un array.
    splice():   Puede eliminar, agregar y reemplazar elementos en posiciones específicas 
*/

/*
    ESCENARIO 1 : VACIANDO EL CARRITO CON TOTAL
    Recorre la lista carrito con un bucle donde cada producto vaya eliminándose del carrito 
    y utiliza la variable `total` para ir contabilizando la cuenta

    Imprime en consola el resultado

    RESULTADO:
    [] 97.1
*/

function vaciarCarritoConTotal() {
    let total = 0;
    const carrito = [
        {
            articulo: "leche",
            precio: 18.7,
        },
        {
            articulo: "pan",
            precio: 44.9,
        },
        {
            articulo: "manzanas",
            precio: 33.5,
        },
    ];

    // Completa aquí código de escenario 1
    for (const index in carrito){
        total += parseFloat(carrito[index].precio);
    }

    console.log("ESCENARIO 1");
    console.log("Total: " + total);
    console.log("Arreglo antes del splice: " + carrito);
    var n = carrito.length;
    carrito.splice(0, n);
    console.log("Arreglo despues del splice: " + carrito);
}

/*
    ESCENARIO 2 : UNIFICANDO GRUPOS DE ESTUDIANTES
    Unifica dos salones de estudiantes en un nuevo arreglo (Grupo A y Grupo B) 
    y contabiliza la cantidad de alumnos en la consola

    Imprime en consola el resultado

    RESULTADO:
    31
*/

function cuentaDeAlumnos() {
    const grupoA = ["Juan Perez","Maria Garcia","Carlos Rodriguez","Luisa Martinez","Pedro Sanchez","Ana Lopez","Miguel Ramirez","Laura Fernandez","David Torres","Sofia Gonzalez","Javier Hernandez","Isabel Jimenez","Andres Diaz","Elena Castro"]
    const grupoB = ["Alejandro Ruiz","Carmen Ortega","Roberto Mendoza","Patricia Vargas","Eduardo Morales","Olga Reyes","Gustavo Paredes","Natalia Soto","Hector Delgado","Monica Castillo","Raul Rios","Raquel Valdez","Fernando Acosta","Silvia Castro","Manuel Vega","Lourdes Guzman","Jorge Navarro"]

    // Completa aquí código de Escenario 2
    console.log("ESCENARIO 2");
    const grupoNuevo = grupoA.concat(grupoB);
    var CantidadAlumnos = grupoNuevo.length;
    console.log(grupoNuevo);
    console.log("Cantidad de Alumnos: " + CantidadAlumnos);
}

/*
    ESCENARIO 3 : BACKUP POR BATCH / LOTE

    Se requiere mostrar (transmitir) la lista `backup` en lotes, divide en 4 secciones y muestrala en consola
    Imprime en consola el resultado junto con la cantidad de items por lote

    RESULTADO:
    ["AAAAAAAAAAA", ...] 50
    ["BBBBBBBBBBBB", ...] 50
    ["CCCCCCCCCCC", ...] 50
    ["DDDDDDDDDDDD", ...] 50
*/

function transmitiendoBatch() {

    const backup = ["AAAAAAAAAAA","11010100101","01010101010","11110000000","00001111000","10101010101","11001100110","00110011001","11111111111","00000000000","10000000000","01000000000","11000000000","00100000000","10100000000","01100000000","11100000000","00010000000","10010000000","01010000000","11010000000","00110000000","10110000000","01110000000","11110000000","00001000000","10001000000","01001000000","11001000000","00101000000","10101000000","01101000000","11101000000","00011000000","10011000000","01011000000","11011000000","00111000000","10111000000","01111000000","11111000000","00000100000","10000100000","01000100000","11000100000","00100100000","10100100000","01100100000","11100100000","00010100000",
    "BBBBBBBBBBBB","11010100101","01010101010","11110000000","00001111000","10101010101","11001100110","00110011001","11111111111","00000000000","10000000000","01000000000","11000000000","00100000000","10100000000","01100000000","11100000000","00010000000","10010000000","01010000000","11010000000","00110000000","10110000000","01110000000","11110000000","00001000000","10001000000","01001000000","11001000000","00101000000","10101000000","01101000000","11101000000","00011000000","10011000000","01011000000","11011000000","00111000000","10111000000","01111000000","11111000000","00000100000","10000100000","01000100000","11000100000","00100100000","10100100000","01100100000","11100100000","00010100000",
    
    "CCCCCCCCCCC","11010100101","01010101010","11110000000","00001111000","10101010101","11001100110","00110011001","11111111111","00000000000","10000000000","01000000000","11000000000","00100000000","10100000000","01100000000","11100000000","00010000000","10010000000","01010000000","11010000000","00110000000","10110000000","01110000000","11110000000","00001000000","10001000000","01001000000","11001000000","00101000000","10101000000","01101000000","11101000000","00011000000","10011000000","01011000000","11011000000","00111000000","10111000000","01111000000","11111000000","00000100000","10000100000","01000100000","11000100000","00100100000","10100100000","01100100000","11100100000","00010100000",
    
    "DDDDDDDDDDDD","11010100101","01010101010","11110000000","00001111000","10101010101","11001100110","00110011001","11111111111","00000000000","10000000000","01000000000","11000000000","00100000000","10100000000","01100000000","11100000000","00010000000","10010000000","01010000000","11010000000","00110000000","10110000000","01110000000","11110000000","00001000000","10001000000","01001000000","11001000000","00101000000","10101000000","01101000000","11101000000","00011000000","10011000000","01011000000","11011000000","00111000000","10111000000","01111000000","11111000000","00000100000","10000100000","01000100000","11000100000","00100100000","10100100000","01100100000","11100100000","00010100000"];

    // Completa aquí código de Escenario 3
    console.log("ESCENARIO 3");
    var CantidadTotal = backup.length;
    var Lote1 = backup.slice(0, CantidadTotal/4);
    var Lote2 = backup.slice(CantidadTotal/4, CantidadTotal/2);
    var Lote3 = backup.slice(CantidadTotal/2, (CantidadTotal/4)*3);
    var Lote4 = backup.slice((CantidadTotal/4)*3, CantidadTotal);
  
    console.log("Lote 1: " + Lote1 + " Cantidad Items: " + Lote1.length);
    console.log("Lote 2: " + Lote2 + " Cantidad Items: " + Lote2.length);
    console.log("Lote 3: " + Lote3 + " Cantidad Items: " + Lote3.length);
    console.log("Lote 4: " + Lote4 + " Cantidad Items: " + Lote4.length);
}

vaciarCarritoConTotal()
cuentaDeAlumnos()
transmitiendoBatch()

