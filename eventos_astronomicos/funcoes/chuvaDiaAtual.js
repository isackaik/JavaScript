function verificaChuvaDiaAtual(chuvas){

    let today = new Date();

    let chuvasToday = [];

    for (let chuva of chuvas){
        if(today >= chuva.dataInicio && today <= chuva.dataFim){
            chuvasToday.push(chuva);
            console.log("Encontrada")
        }   
    }

    if(chuvasToday.length > 0){
        console.log("Chuvas do dia encontradas");
    } else{
        console.log("Não haverá ocorrência de chuva de meteoros hoje");
    }
}

export default verificaChuvaDiaAtual;