const priNombre = prompt('Ingrese su primer nombre');
const segNombre = prompt('Ingrese su segundo nombre');
const priApellido = prompt('Ingrese su primer apellido');
const segApellido = prompt('Ingrese su segundo apellido');

const nombre = priNombre + segNombre + priApellido + segApellido;

console.log(`Su nombre completo es: ${nombre}`);