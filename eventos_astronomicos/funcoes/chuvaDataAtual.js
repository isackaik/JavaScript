function verificaChuvaDiaAtual(chuvas, dataAtual) {

    for (let chuva of chuvas) {
        let dataInicio = new Date(chuva.dataInicio);
        let dataFim = new Date(chuva.dataFim);

        return (dataAtual >= dataInicio && dataAtual <= dataFim);
    }
}

export default verificaChuvaDiaAtual;