import formatarIntensidadeChuva from "./funcoesDeFormatacao/formataIntensidade.js";
import formatarPeriodoDaChuva from "./funcoesDeFormatacao/formataPeriodoChuva.js";

function imprimirChuvas(chuvas){
    console.log("NOME DA CHUVA".padEnd(27, " ") +
                " - INTENSIDADE".padEnd(11, " ") + 
                " - HEMISFÉRIO".padEnd(10, " ") + 
                " - PERÍODO");
    chuvas.forEach(chuva => {
        let nome = chuva.nome;
        let intensidade = formatarIntensidadeChuva(chuva.intensidade);
        let hemisferio = (chuva.declinacao < 0) ? 'Sul' : 'Norte';
        let periodo = formatarPeriodoDaChuva(chuva.dataInicio) + ' à ' + formatarPeriodoDaChuva(chuva.dataFim);
        console.log(`${nome.padEnd(27, " ")} - ${intensidade.padEnd(11, " ")} - ${hemisferio.padEnd(10, " ")} - ${periodo}`);
    })
}

export default imprimirChuvas;