import chuva_de_meteoros from './dados/chuva-de-meteoros.js';
import filtrarChuvaPorDia from './funcoes/filtraChuvaPorDia.js';
import imprimirChuvas from './funcoes/imprimeChuvas.js';
import verificarProximasChuvas from './funcoes/proximasChuvas.js';

console.log('Chuva de Meteoros\n');

let hoje = new Date();
let chuvasToday = filtrarChuvaPorDia(chuva_de_meteoros, hoje);
let proximasChuvas = verificarProximasChuvas(chuva_de_meteoros, hoje);

if (chuvasToday.length > 0){
    console.log(`Chuvas de meteoros que podem ser vistas hoje:\n`)
    imprimirChuvas(chuvasToday)
    console.log("\n");
} else console.log("Não há chuvas passando hoje.\n");
 
console.log("Não perca as próximas chuvas de meteoros:\n");
imprimirChuvas(proximasChuvas);










