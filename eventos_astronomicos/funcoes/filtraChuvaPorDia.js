import formatarDataChuva from './funcoesDeFormatacao/formataDataChuva.js';

function filtrarChuvaPorDia(chuvas = [], dataAtual){

    let dataInicio;
    let dataFim;
    let chuvasToday = [];

    for (let chuva of chuvas){
        dataInicio = new Date(formatarDataChuva(chuva.dataInicio));
        dataFim = new Date(formatarDataChuva(chuva.dataFim));

        if (dataInicio.getMonth() > dataFim.getMonth()){
            dataFim.setFullYear(dataFim.getFullYear() + 1);
        }

        if (dataAtual >= dataInicio && dataAtual <= dataFim){
            chuvasToday.push(chuva);
        }
    }

    return chuvasToday;

}

export default filtrarChuvaPorDia;