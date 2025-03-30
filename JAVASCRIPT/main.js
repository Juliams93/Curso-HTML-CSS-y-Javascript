// Alertas
// Alerta de bienvenida
alert("Bienvenido a la página");
alert("Hola soy un alert");

// Variables
let nombre = "Juan";
let apellido = "Pérez";
let edad = 25;

// Mostrar en consola
console.log(nombre);
console.log(edad);

// Variables constantes
const altura = 187;
// altura = 200; // Esto dará un error porque no se puede cambiar el valor de una constante

console.log(altura);

// Concatenación
let saludo = "Hola, " + nombre + " " + apellido + "!"; 
console.log(saludo);

// Selección de elementos
let datos = document.querySelector("#datos");
datos.innerHTML = `<h1>${saludo}</h1>`; // $ es para interpolar variables

// Condiciones
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Bucles
for (let i = 0; i < 5; i++) {
    console.log("Número: " + i);   // Esto es un bucle for, ++ es para sumar 1
}

// Funciones
// Declaración de función
function sumar(a, b) {
    return a + b;
}
// Llamada a la función
let resultado = sumar(5, 3);     // función sumar ->
console.log("La suma es: " + resultado);

// Funciones anónimas
let multiplicar = function(a, b) {
    return a * b;
};
// Llamada a la función anónima
resultado = multiplicar(5, 3);
console.log("La multiplicación es: " + resultado); //función anónima -> es diferente a la función declarada antes, porque no tiene nombre

// Funciones flecha (Arrow Functions)
let dividir = (a, b) => {
    return a / b;
};
// Llamada a la función flecha
resultado = dividir(10, 2);
console.log("La división es: " + resultado); // función flecha -> es diferente a la función declarada antes, porque no tiene nombre

// Array
let frutas = ["manzana", "banana", "naranja"];
// Acceso a un elemento del array
console.log(frutas[1]); // Imprime "banana"
// Añadir un elemento al array
frutas.push("uva"); 


function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
console.log(saludar("Ana"));

// Objetos
let persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    saludar: function() {
        return `Hola, soy ${this.nombre} ${this.apellido}`;
    }
};
// Acceso a propiedades del objeto
console.log(persona.nombre); // Imprime "Juan"
// Llamada al método del objeto
console.log(persona.saludar()); // Imprime "Hola, soy Juan Pérez"
// Modificar una propiedad del objeto
persona.edad = 30;
console.log(persona.edad); // Imprime 30
// Añadir una propiedad al objeto
persona.direccion = "Calle Falsa 123";
console.log(persona.direccion); // Imprime "Calle Falsa 123"
// Eliminar una propiedad del objeto
delete persona.apellido;
console.log(persona.apellido); // Imprime undefined // porque la propiedad apellido ha sido eliminada


// Objeto json

var coche = {
    "marca": "Toyota",
    "modelo": "Corolla",
    "año": 2020,
    "color": "rojo"
};

document.write(`<h1>${coche.marca}</h1>`);