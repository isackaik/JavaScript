//import verificaChuvaDiaAtual from './chuvaDataAtual.js';
import formatarDataChuva from './formataDataChuva.js';


function filtraChuva(chuvas){

    let today = new Date();

    chuvas.forEach(chuva => {
        chuva.dataInicio = formatarDataChuva(chuva.dataInicio);
        chuva.dataFim = formatarDataChuva(chuva.dataFim);
    })

    return chuvas;
    
    /*chuvas.array.forEach(chuva => {
        chuva.dataInicio = formatarDataChuva(chuva.dataInicio);
    });

    chuvas.array.forEach(chuva => {
        chuva.dataFim = formatarDataChuva(chuva.dataFim);
    });

    let chuvasToday = chuvas.filter(verificaChuvaDiaAtual(chuvas, today));

    if(chuvasToday.length > 0){
        console.log("Chuvas do dia encontradas");
    } else{
        console.log("Não haverá ocorrência de chuva de meteoros hoje");
    }

    return chuvasToday;*/
}

export default filtraChuva;