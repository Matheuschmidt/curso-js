var num =[4, 8, 10 ,3, 2, 5.6, 1, 1.5, 5, 7, 15, 9];

num.sort();
console.log(`${num}`);
console.log(`O array tem  ${num.length} posiçoes`);
//console.log(`${num[11]}`);

for (var pos = 0; pos < num.length; pos++){
    console.log(`O elemento da posiçao ${pos} é ${num[pos]}`);
}