import input from 'readline-sync';

console.log("Escolha uma das alternativas: \n");
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let escolha = input.question("Digite o numero da sua escolha: ")
console.log("\n");

let array_salarios = [
    { ano: 2010, valor: 510},
    { ano: 2011, valor: 545},
    { ano: 2012, valor: 622},
    { ano: 2013, valor: 678},
    { ano: 2014, valor: 724},
    { ano: 2015, valor: 788},
    { ano: 2016, valor: 880},
    { ano: 2017, valor: 937},
    { ano: 2018, valor: 954},
    { ano: 2019, valor: 998},
    { ano: 2020, valor: 1045}
]

let array_inflacoes = [
    { ano: 2010, valor: 5.91},
    { ano: 2011, valor: 6.50},
    { ano: 2012, valor: 5.84},
    { ano: 2013, valor: 5.91},
    { ano: 2014, valor: 6.41},
    { ano: 2015, valor: 10.67},
    { ano: 2016, valor: 6.29},
    { ano: 2017, valor: 2.95},
    { ano: 2018, valor: 3.75},
    { ano: 2019, valor: 4.31},
    { ano: 2020, valor: 4.52}
]

if (escolha == 1){
    for (let salario of array_salarios){
        console.log("Ano: ".padEnd(30, ".") + salario.ano);
        console.log("Salario minimo: ".padEnd(30, ".") + ("R$ " + salario.valor.toFixed(2)).replace(".", ",") + "\n\n");
    }
} else if(escolha == 2){
    for (let inflacao of array_inflacoes){
        console.log("Ano: ".padEnd(30, ".") + inflacao.ano);
        console.log("Inflacao IPCA: ".padEnd(30, ".") + (inflacao.valor + "%\n\n").replace(".", ","));
    }
} else if(escolha == 3){
    for (let i = 0; i < array_inflacoes.length; i++){
        console.log("Ano: ".padEnd(30, ".") + array_salarios[i].ano);
        console.log("Salario minimo: ".padEnd(30, ".") + ("R$ " + array_salarios[i].valor.toFixed(2)).replace(".", ","));
        if(array_inflacoes[i].ano == 2010){
            console.log("Crescimento salarial: ".padEnd(30, ".") + "--");
        } else{
            let dif_salario = array_salarios[i].valor - array_salarios[i -1].valor;
            let crescimento_salarial = (dif_salario/array_salarios[i -1].valor)*100;
            console.log("Crescimento salarial: ".padEnd(30, ".") + ((crescimento_salarial).toFixed(2) + "%").replace(".", ","));
        }
        console.log("Inflacao IPCA: ".padEnd(30, ".") + (array_inflacoes[i].valor + "%\n\n").replace(".", ","));
    }
} else console.log("Opção inválida!");


