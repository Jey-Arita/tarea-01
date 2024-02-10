alert('Suma / Resta / Multiplicacion / Division');

const eleccion = prompt('coloque la opcion que desea realizar');
let num1 = parseInt(prompt('Ingrese el primer numero'));
let num2 = parseInt(prompt('Ingrese el segundo numero'));

let tot;

switch(eleccion.toLowerCase()){
    case 'suma':
        tot = num1 + num2; 
        break;   
    
    case 'resta':
        tot = num1 - num2; 
        break;

    case 'multiplicacion':
        tot = num1 * num2; 
        break;
    
    case 'division':
        tot = num1 / num2; 
        break;
    default: 
        alert('Error');
        break;
}

alert(`El resultado es: ${tot.toFixed(2)}`);