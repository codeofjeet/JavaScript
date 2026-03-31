const price = [250, 399, 851, 620, 740]

function retrunSecondValue(p) {
    return p[1];
}

console.log(retrunSecondValue(price));

// rest operator (...)
function calculatePrice(...num1){
    return num1
}

//console.log(calculatePrice(200, 560, 780));
const result = calculatePrice(200, 560, 780);
console.log(result);
let sumprice=0;
result.forEach(sumPrice);

function sumPrice(value, index, array){
    sumprice += value;
}

console.log(sumprice);
