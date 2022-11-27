import input from 'readline-sync';

console.log("Aplicação de Juros: \n");

let pagamento_inicial = input.question("Informe o valor devido: R$ ");
if (pagamento_inicial > 0) {
    let dias_atraso = input.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

    if (dias_atraso == 0) {
        console.log("Você está em dia!");
    } else {
        let juros = (dias_atraso > 15) ? 10 : 5;
        let montante = pagamento_inicial * (1 + juros / 100);

        console.log("\nValor original da dívida: R$ " + pagamento_inicial);
        console.log("Dias atrasados: " + dias_atraso);
        console.log("Taxa de Juros: " + juros + "%");
        console.log("Valor total com juros: R$ " + montante.toFixed(2));
    }


} else console.log("O valor da dívida deve ser maior que zero!");


