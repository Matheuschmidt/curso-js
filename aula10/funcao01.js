function parimpar(n){
    while(isNaN(Number(n))){
        return "Insira um numero";
    }
    if (n % 2 == 0){
        return "par";
    }else{
        return "ímpar";
    }
}

console.log(parimpar("qaww"));