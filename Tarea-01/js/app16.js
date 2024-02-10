/*
16. Atletas:
Dos Atletas recorren la misma distancia y se registran sus tiempos en minutos y
segundos. Se desea saber el tiempo total utilizado por ambos atletas en horas, minutos
y segundos.
*/

let min = parseInt(prompt('Ingrese los minutos recorridos'));
let seg = parseInt(prompt('Ingrese los segundos'));

let segundos = (min*60) + seg;
let minutos = (seg/60) + min;
let horas = (min/60) + ((seg/60)/60);

alert(`El tiempo en horas es: ${horas.toFixed(4)}\nEl tiempo en minutos es: ${minutos}\nEl tiempo en segundos es: ${segundos}`);