var n1 = 3;
var n2 = "f";

if (isNaN(n1) || isNaN(n2)){
    console.log("Erro: Numeros Invalidos");
} else if (n1 < n2) {
    console.log(`${n1} é o menor número`);
}else if (n1 > n2) {
    console.log(`${n2} é o menor número`);
} else{
    console.log("Os dois números são iguais");
}