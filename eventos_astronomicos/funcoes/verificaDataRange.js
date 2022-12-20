function verificarDatas(dataInicio, dataFim){
    let mesInicio = dataInicio.getMonth();
    let mesFim = dataFim.getMonth();

    if (mesInicio > mesFim){
        return dataFim.setFullYear(dataFim.getFullYear() + 1);
    }
}

export default verificarDatas;