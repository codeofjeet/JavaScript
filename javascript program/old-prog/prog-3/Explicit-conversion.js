// Explicit type conversion
/*
// Converting to String
let str1 = String(2); 
let str2 = String(null); 
let str3 = String(true); 
let str4 = String(NaN);
let str5 = String(undefined);
let num = 100;
let str6 = num.toString();  // use the toString() method of Number object to convert number to string.

console.log("Value of str1 is :- ", str1);                              // 2
console.log("Type of str1 is :- ", typeof str1);                        // string
console.log("Value of str2 is :- ", str2);                              // null
console.log("Type of str2 is :- ", typeof str2);                        // string
console.log("Value of str3 is :- ", str3);                              // true
console.log("Type of str3 is :- ", typeof str3);                        // string
console.log("Value of str4 is :- ", str4);                              // NaN
console.log("Type of str4 is :- ", typeof str4);                        // string
console.log("Value of str5 is :- ", str5);                              // undefined
console.log("Type of str5 is :- ", typeof str5);                        // string
console.log("Value of str6 is :- ", str6);                              // 100
console.log("Type of str1 is :- ", typeof str1);                        // string */

//Converting to Number
let no1 = Number("250");
let no2 = Number("520-5");
let no3 = Number("254e-10");
let no4 = Number(false);
let no5 = Number(null);
let no6 = Number(undefined);
let no7 = +"20.5";
let no8 = Number("2.5")
let no9 = parseInt("20.5");
let no10 = parseFloat("85.9");

console.log("Value of no1 is :- ", no1);                            // 250
console.log("Type of no1 is :- ", typeof no1);                      // number
console.log("Value of no2 is :- ", no2);                            // NaN
console.log("Type of no2 is :- ", typeof no2);                      // number
console.log("Value of no3 is :- ", no3);                            // 2.54e-8
console.log("Type of no3 is :- ", typeof no3);                      // number
console.log("Value of no4 is :- ", no4);                            // 0
console.log("Type of no4 is :- ", typeof no4);                      // number
console.log("Value of no5 is :- ", no5);                            // 0
console.log("Type of no5 is :- ", typeof no5);                      // number
console.log("Value of no6 is :- ", no6);                            // NaN
console.log("Type of no6 is :- ", typeof no6);                      // number
console.log("Value of no7 is :- ", no7);                            // 20.5
console.log("Type of no7 is :- ", typeof no7);                      // number
console.log("Value of no8 is :- ", no8);                            // 2.5
console.log("Type of no8 is :- ", typeof no8);                      // number
console.log("Value of no9 is :- ", no9);                            // 20
console.log("Type of no9 is :- ", typeof no9);                      // number
console.log("Value of no10 is :- ", no10);                          // 85.9
console.log("Type of no10 is :- ", typeof no10);                    // number

// Converting to Boolean
let b1 = Boolean(55); 
let b2 = Boolean(0); 
let b3 = Boolean(""); 
let b4 = Boolean("Hi"); 
let b5 = Boolean(null); 
let b6 = Boolean(undefined)
console.log("Value of b1 is :- ", b1);                              // Converts number to boolean (true)
console.log("Value of b2 is :- ", b2);                              // 0 is falsy value (false)
console.log("Value of b3 is :- ", b3);                              // Empty string is falsy value (false)
console.log("Value of b4 is :- ", b4);                              // Converts string to boolean (true)
console.log("Value of b5 is :- ", b5);                              // null is falsy value (false)
console.log("Value of b6 is :- ", b6);                              // undefined is false value