/*
17. Unidades de medida:
Dada una cantidad expresada en pies, y otra en metros. Determinar la suma pero
convertida a pulgadas, a yardas, a metros y a millas por separado. Considere las
siguientes equivalencias.
1 milla = 1609 metros, 1 pulgada = 0.0254 metros, 1 yarda = 3 pies, 1 pie = 12 pulgadas.
*/

const cantPies = parseInt(prompt('Ingrese la cantidad en pies para su respectiva conversion'));
const cantMetros = parseInt(prompt('Ingrese la cantidad en metros para su respectiva conversion'));

let pulgadas = (cantPies * 12) + (cantMetros/0.254);
let yardas = (cantPies / 3) + (cantMetros/0.9);
let metrAPulg = cantMetros + (0.305*cantPies);
let millas = (cantMetros / 1609) + ((cantPies/5280));


alert(`Pulgadas: ${pulgadas.toFixed(3)}\n
    Yardas: ${yardas.toFixed(3)}\n
    Metros: ${metrAPulg.toFixed(3)}\n
    Millas: ${millas.toFixed(6)}`);
