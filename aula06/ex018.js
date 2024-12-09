var agora = new Date();

var diaSem = agora.getDay();

/* 
    0 = Domingo 
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch (agora.getDay()) {
    case 0:
        diaSem = " Hoje é Domingo";
        break;
    case 1:
        diaSem = "Hoje é Segunda";
        break;
    case 2:
        diaSem = "Hoje é Terça";
        break;
    case 3:
        diaSem = "Hoje é Quarta";
        break;
    case 4:
        diaSem = "Hoje é Quinta";
        break;
    case 5:
        diaSem = "Hoje é Sexta";
        break;
    case 6:
        diaSem = "Hoje é Sábado";
        break;
    default:
}

console.log(diaSem);