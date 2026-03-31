// Implicit Type Conversion

//Converting to String 
let str1 = "50" + 24; 
let str2 = '100' + false; 
let str3 = "190" + null; 
let str4 = "13" + undefined;
let str5 = "25" + NaN;

console.log("Type of str1 is :- ", typeof str1);        // string
console.log("Value of str1 is :- ", str1);              // 5024

console.log("Type of str2 is :- ", typeof (str2));      // string
console.log("Value of str2 is :- ", str2);              // 100false

console.log("Type of str3 is :- ", typeof str3);        // string
console.log("Value of str3 is :- ", str3);              // 190null

console.log("Type of str4 is :- ", typeof str4);        // string
console.log("Value of str4 is :- ", str4);              // 13undefined

console.log("Type of str5 is :- ", typeof str5);        // string
console.log("Value of str5 is :- ", str5);              // 25NaN

// Converting to Number 
let no1 = '100' / 50; 
let no2 = '100' - '50'; 
let no3 = '100' * true; 
let no4 = '100' - false; 
let no5 = 'cj' / 50;
let no6 = 30 - undefined;
let no7 = 40 + NaN;

console.log("Type of no1 is :- ", typeof no1);          // number 
console.log("Value of no1 is :- ", no1);                2

console.log("Type of no2 is :- ", typeof no2);          // number
console.log("Value of no2 is :- ", no2);                // 50

console.log("Type of no3 is :- ", typeof no3);          // number
console.log("Value of no3 is :- ", no3);                // 100

console.log("Type of no4 is :- ", typeof no4);          // number   
console.log("Value of no4 is :- ", no4);                // 100

console.log("Type of no5 is :- ", typeof no5);          // number
console.log("Value of no5 is :- ", no5);                // NaN

console.log("Type of no6 is :- ", typeof no6);          // number
console.log("Value of no6 is :- ", no6);                // NaN

console.log("Type of no7 is :- ", typeof no7);          // number
console.log("Value of no7 is :- ", no7);                // NaN 

// Converting to Boolean
let num1 = !!0; // !0 = true, !!0 = false
let num2 = !!1; // !1 = false, !!1 = true
let st1 = !!""; // !"" = true, !!"" = false
let st2 = !!"Hello"; // !"Hello" = false, !!"Hello" = true
console.log("Value of num1 is :- ", num1);                  // false
console.log("Value of num2 is :- ", num2);                  // true
console.log("Value of st1 is :- ", st1);                    // false
console.log("Value of st2 is :- ", st2);                    // true 

// Converting to null
let n1 = 100 * null; // if you 100 + null then result is 100
let n2 = "cj" + null;  
console.log("Type of n1 is :- ", typeof n1);                // number         
console.log("Value of n1 is :- ", n1);                      // 0
console.log("Type of n2 is :- ", typeof n2);                // string
console.log("Value of n2 is :- ", n2);                      // cjnull 

// Converting to Undefined
let un1 = 100 + undefined; 
let un2 = false * undefined;
console.log("Type of un1 is :- ", typeof un1);              // number              
console.log("Value of un1 is :- ", un1);                    // NaN
console.log("Type of un2 is :- ", typeof un2);              // number      
console.log("Value of un2 is :- ", un2);                    // NaN