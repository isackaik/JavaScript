import formatarDataChuva from "./funcoesDeFormatacao/formataDataChuva.js";

function verificarProximasChuvas (chuvas, dataAtual){

    let dataInicio;
    let dataFim;
    let proximasChuvas = [];

    for (let chuva of chuvas){
        dataInicio = new Date(formatarDataChuva(chuva.dataInicio));
        if ((dataAtual.getMonth() + 2) < 12){
            dataFim = new Date(`${dataAtual.getFullYear()}-${dataAtual.getMonth() + 2}-${dataAtual.getDate()}`)
        } else if ((dataAtual.getMonth() + 2) == 12){
            dataFim = new Date(`${dataAtual.getFullYear() + 1}-01-${dataAtual.getDate()}`)
        } else if ((dataAtual.getMonth() + 2) == 13){
            dataFim = new Date(`${dataAtual.getFullYear() + 1}-02-${dataAtual.getDate()}`)
        }

        if (dataAtual.getMonth() > dataInicio.getMonth()){
            dataInicio.setFullYear(dataInicio.getFullYear() + 1);
        }

        if ((dataInicio <= dataFim) && (dataInicio >= dataAtual)){
            proximasChuvas.push(chuva);
        }
    }
    return proximasChuvas;
}

export default verificarProximasChuvas;