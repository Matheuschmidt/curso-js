var nota = 5.9;


if(nota > 10 || nota < 0 || isNaN(nota)){
    console.log("sua nota nao eh valida");
}else if(nota >= 6){
    console.log("Aprovado");
} else if(nota >= 4){
    console.log("Voce esta de Recuperação");
}else{
    console.log("Reprovado");
}