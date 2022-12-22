

function formatarDataChuva (dataChuva) {
    let dia = dataChuva.substr(3,2);
    let mes = dataChuva.substr(0,2);

    let data = `${new Date().getFullYear()}-${mes}-${dia}`;
    return data;
}

export default formatarDataChuva;


