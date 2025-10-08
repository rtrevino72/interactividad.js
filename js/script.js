// asi se declara una variable
var nombre = "Regina"; // string - tipo cadena de texto
let edad = 36;
const PI = 3.14159265358979323846;

// Valor booleano - Tipos de variable que pueden ser true o false
let esMayorDeEdad = edad >= 18; // Variable formato camelcase

nombre = "Luis"
edad = 37;
console.log("Hola" + nombre);

function saludar(_nombre="Mundo") {
    alert("Hola" + _nombre);
}

saludar();
saludar(nombre);
saludar("Ana")