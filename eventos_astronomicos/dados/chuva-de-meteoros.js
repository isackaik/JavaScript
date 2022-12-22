let chuva_de_meteoros = [

    { nome: 'Alfa Centaurídeos',          dataInicio: '01/28', dataFim: '02/21', pico: 'Fev 8',  ascencao: 210,  declinacao: -59,  velocidade:  56, thz: '6',        intensidade: 'Média'},
    { nome: 'Gama Normídeos',	          dataInicio: '02/25', dataFim: '03/22', pico: 'Mar 14', ascencao: 239,  declinacao: -50,  velocidade:	56, thz: '6',        intensidade: 'Média'},
    { nome: 'Pi Pupídeos',	              dataInicio: '04/15', dataFim: '04/28', pico: 'Abr 23', ascencao: 110,  declinacao: -45,  velocidade:	18, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Líridas',	                  dataInicio: '04/16', dataFim: '04/25', pico: 'Abr 22', ascencao: 271,  declinacao:  34,  velocidade:	49, thz: '18',       intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Eta Aquáridas',	          dataInicio: '04/19', dataFim: '05/28', pico: 'Mai 5',  ascencao: 338,  declinacao: -1,   velocidade:	66, thz: '65',       intensidade: 'Forte com meteoros muito rápidos e de grande comprimento'},
    { nome: 'Eta Líridas',	              dataInicio: '05/03', dataFim: '05/14', pico: 'Mai 8',  ascencao: 287,  declinacao:  44,  velocidade:	43, thz: '3',        intensidade: 'Fraca'},
    { nome: 'Bootídeos de Junho',	      dataInicio: '06/28', dataFim: '06/28', pico: 'Jun 28', ascencao: 224,  declinacao:  48,  velocidade:	18, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Alfa Capricornídeos',        dataInicio: '07/03', dataFim: '08/15', pico: 'Jul 30', ascencao: 307,  declinacao: -10,  velocidade:	23, thz: '5',        intensidade: 'Fraca'},
    { nome: 'Delta Aquáridas do Sul',     dataInicio: '07/12', dataFim: '08/19', pico: 'Jul 28', ascencao: 340,  declinacao: -16,  velocidade:	41, thz: '16',       intensidade: 'Forte com meteoros lentos e rasto comprido'},
    { nome: 'Piscis Austrinídeos',	      dataInicio: '07/15', dataFim: '08/10', pico: 'Jul 28', ascencao: 341,  declinacao: -30,  velocidade:	35, thz: '5',        intensidade: 'Média'},
    { nome: 'Perseidas',	              dataInicio: '07/17', dataFim: '08/24', pico: 'Ago 12', ascencao: 48,   declinacao:  58,  velocidade:	59, thz: '100',      intensidade: 'Forte e muito rápidas'},
    { nome: 'Capa Cignídeos',             dataInicio: '08/03', dataFim: '08/25', pico: 'Ago 17', ascencao: 286,  declinacao:  59,  velocidade:	25, thz: '3',        intensidade: 'Fraca com velocidades médias e brilhantes'},
    { nome: 'Alfa Aurigídeos',	          dataInicio: '08/25', dataFim: '09/28', pico: 'Set 1',  ascencao: 91,   declinacao:  39,  velocidade:	66, thz: '6',        intensidade: 'Média com meteoros muito rápidos e persistentes'},
    { nome: 'Perseidas de Setembro',      dataInicio: '09/05', dataFim: '10/10', pico: 'Set 8',  ascencao: 48,   declinacao:  40,  velocidade:	64, thz: '5',        intensidade: 'Média com meteoros rápidos e persistentes'},
    { nome: 'Táuridas do Sul',            dataInicio: '09/10', dataFim: '11/20', pico: 'Out 10', ascencao: 32,   declinacao:  9,   velocidade:	27, thz: '5',        intensidade: 'Fraca'},
    { nome: 'Delta Aurigídeos',           dataInicio: '09/22', dataFim: '10/23', pico: 'Out 10', ascencao: 84,   declinacao:  44,  velocidade:	64, thz: '2',        intensidade: 'Fraca'},
    { nome: 'Oriónidas',                  dataInicio: '10/02', dataFim: '11/07', pico: 'Out 21', ascencao: 95,   declinacao:  16,  velocidade:	66, thz: '25',       intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Dracónidas',                 dataInicio: '10/06', dataFim: '10/10', pico: 'Out 8',  ascencao: 262,  declinacao:  54,  velocidade:	20, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Épsilon Geminídeos',         dataInicio: '10/14', dataFim: '10/27', pico: 'Out 18', ascencao: 102,  declinacao:  27,  velocidade:	70, thz: '3',        intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos',             dataInicio: '10/21', dataFim: '10/23', pico: 'Out 22', ascencao: 162,  declinacao:  37,  velocidade:	62, thz: '2',        intensidade: 'Fraca'},
    { nome: 'Táuridas do Norte',          dataInicio: '11/01', dataFim: '11/25', pico: 'Nov 12', ascencao: 58,   declinacao:  22,  velocidade:	29, thz: '5',        intensidade: 'Média com meteoros muito lentos mas brilhantes'},
    { nome: 'Leónidas',                   dataInicio: '11/14', dataFim: '11/21', pico: 'Nov 17', ascencao: 152,  declinacao:  22,  velocidade:	71, thz: 'Variável', intensidade: 'Irregular com meteoros muito rápidos, atingindo um pico: de 33 em 33 anos'},
    { nome: 'Alfa Monocerotídeos',        dataInicio: '11/15', dataFim: '11/25', pico: 'Nov 21', ascencao: 117,  declinacao:  1,   velocidade:	65, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Monocerotídeos',             dataInicio: '11/27', dataFim: '12/17', pico: 'Dez 8',  ascencao: 100,  declinacao:  8,   velocidade:	42, thz: '2',        intensidade: 'Fraca'},
    { nome: 'Fenícidas',	              dataInicio: '11/28', dataFim: '12/09', pico: 'Dez 6',  ascencao: 18,   declinacao: -53,  velocidade:	18, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Quadrântidas',	              dataInicio: '11/28', dataFim: '01/12', pico: 'Jan 4',  ascencao: 230,  declinacao:  49,  velocidade:	41, thz: '120',      intensidade: 'Forte com velocidades médias'},
    { nome: 'Pupidas-Velidas',	          dataInicio: '12/02', dataFim: '12/16', pico: 'Dez 12', ascencao: 123,  declinacao: -45,  velocidade:	40, thz: '10',       intensidade: 'Média'},
    { nome: 'Sigma Hidrídeos',            dataInicio: '12/03', dataFim: '12/15', pico: 'Dez 12', ascencao: 127,  declinacao:  2,   velocidade:	58, thz: '3',        intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos de Dezembro', dataInicio: '12/05', dataFim: '02/04', pico: 'Dez 19', ascencao: 161,  declinacao:  30,  velocidade:	64, thz: '5',        intensidade: 'Média'},
    { nome: 'Gemínidas',	              dataInicio: '12/07', dataFim: '12/17', pico: 'Dez 14', ascencao: 112,  declinacao:  33,  velocidade:	35, thz: '120',      intensidade: 'Forte com velocidades médias, meteoros brancos e numerosos'},
    { nome: 'Coma Berenicídeos',          dataInicio: '12/12', dataFim: '01/23', pico: 'Dez 20', ascencao: 175,  declinacao:  18,  velocidade:	65, thz: '3',        intensidade: 'Fraca'},
    { nome: 'Úrsidas',                    dataInicio: '12/17', dataFim: '12/26', pico: 'Dez 22', ascencao: 217,  declinacao:  76,  velocidade:	33, thz: '10',       intensidade: 'Média'}
    
]

export default chuva_de_meteoros;