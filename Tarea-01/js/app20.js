/*
20. El combustible:
Escriba un programa que solicite al usuario ingresar el número de kilómetros recorridos
por su carro y el número de litros consumidos . El script debe mostrar el consumo de
combustible por kilómetro.
*/

const gasto = {
    kiRecorridos: parseFloat(prompt('Ingrese los kilometros recorridos')),
    liConsumidos: parseInt(prompt('Ingrese los litros consumidos'))
}

alert(`El consumo de combustible por kilometro es: ${(gasto.kiRecorridos/gasto.liConsumidos).toFixed(2)} kilometros recorridos por litro de gasolina`);