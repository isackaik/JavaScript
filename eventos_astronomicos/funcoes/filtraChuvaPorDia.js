import verificaChuvaDiaAtual from './chuvaDataAtual.js';
import formatarDataChuva from './formataDataChuva.js';
import verificarDatas from './verificaDataRange.js';


function filtrarChuvaPorDia(chuvas, dataAtual){

    chuvas.forEach(chuva => {
        chuva.dataInicio = formatarDataChuva(chuva.dataInicio);
        chuva.dataFim = formatarDataChuva(chuva.dataFim);
        verificarDatas(chuva.dataInicio, chuva.dataFim);
    })

    return chuvas;

}

export default filtrarChuvaPorDia;