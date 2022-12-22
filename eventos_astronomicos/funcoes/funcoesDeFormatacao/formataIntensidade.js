function formatarIntensidadeChuva (intensidade) {
    let intensidadeFormatada = intensidade.substring(0, 5);

    switch (intensidadeFormatada){

        case 'Fraca' : intensidadeFormatada = "1 (Fraca)"; break;
        case 'Média' : intensidadeFormatada = "2 (Média)"; break;
        case 'Forte' : intensidadeFormatada = "3 (Forte)"; break;
        default : intensidadeFormatada = "(Irregular)";

    }

    return intensidadeFormatada;
}

export default formatarIntensidadeChuva;