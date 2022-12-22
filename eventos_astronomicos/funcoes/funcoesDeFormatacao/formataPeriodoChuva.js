function formatarPeriodoDaChuva (periodo) {
    let dia = periodo.substr(3,2);
    let mes = periodo.substr(0,2);

    return `${dia}/${mes}`;
}

export default formatarPeriodoDaChuva;