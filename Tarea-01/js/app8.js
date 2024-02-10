let not1 = parseInt(prompt('Ingrese primer nota'));
let not2 = parseInt(prompt('Ingrese la segundo nota'));
let not3 = parseInt(prompt('Ingrese la tercera nota'));

const nota = (not1+not2+not3)/3;

alert(`El promedio de la suma de las notas es: ${Math.round(nota)}`);
