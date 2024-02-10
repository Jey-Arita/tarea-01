/*
Tanques de agua:
Dadas dos tanques llenos de agua cuyas capacidades están dadas en litros y en yardas

cúbicas. De la cantidad total de agua: el 75% se dedica al consumo doméstico y el
25% se dedica al riego. Diseñe un programa que haga lo siguiente:
Determine la cantidad total de agua expresada en metros cúbicos y en metros cúbicos.
Determine las cantidades de agua dedicada al riego y al consumo doméstico expresada
en metros cúbicos y en pies cúbicos. Considere los siguientes factores de conversión:
1 pie cúbico = 0.0283 metros cúbicos, 1 metro cúbico = 1000 litros, 1 yarda cúbica = 27
pies cúbicos.
*/

// Se realizo en la consola

let capLitros = 5000;
let capYarda = 50;
let cantTotLitros = capLitros + (capYarda * 1000 * 27);
let cantTotMetros = cantTotLitros / 1000;
let cantTotPies = cantTotMetros / 0.0283;

let consumoDomesticoMetros = cantTotMetros * 0.75;
let riegoMetros = cantTotMetros * 0.25;

let consumoDomesticoPies = cantTotPies * 0.75;
let riegoPies = cantTotPies * 0.25;

console.log("Cantidad total de agua:");
console.log("En metros cúbicos: " + cantTotMetros);
console.log("En pies cúbicos: " + cantTotPies.toFixed(2));
console.log("");
console.log("Cantidad de agua dedicada al consumo doméstico:");
console.log("En metros cúbicos: ", consumoDomesticoMetros);
console.log("En pies cúbicos: ", riegoPies.toFixed(2));
console.log("");
console.log("Cantidad de agua dedicada al riego:");
console.log("En metros cúbicos: ", riegoMetros);
console.log("En pies cúbicos: ", riegoPies.toFixed(2));