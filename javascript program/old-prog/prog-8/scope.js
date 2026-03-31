const no1 =10;
let no2 = 20;
var no3 = 30;
console.log("no1 is :- ", no1);
console.log("no2 is :- ", no2);
console.log("no3 is :- ", no3);

if(true){
    const n1 = 10;
    let n2 = 20;
    const no1 = 40;
    console.log("n1 is :- ", n1);
    console.log("n2 is :- ", n2);
    console.log("local no1 is :- ", no1);
}

//console.log("local n1 is :- ", n1)
console.log("global no1 is :- ", no1);


//console.log(one(5));

function one(no){
    return no+1;
}

console.log(one(5));


//console.log(two(7));

const two = function (no){
    return no+2;
}

console.log(two(7));
