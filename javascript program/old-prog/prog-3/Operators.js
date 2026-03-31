// Arithmetic Operators
/*let no1 = 10;
let no2 = 3;
let ans;
console.log("Addition of no1 and no2 is :-", no1 + no2);
console.log("Subtraction of no1 and no2 is :- ", no2 - no2);
console.log("Multiplication of no1 and no2 is :- ", no1 * no2);
console.log("Exponentiation of no1 to no2 is :- ", no1 ** no2);
console.log("Division of no1 to no2 is :- ", no1 / no2);
console.log("Modulus (Remainder) of no1 to no2 is :- ", no1 % no2);
ans = no1++;
console.log("Value of ans and no1 after Post Increment are :- ", ans,no1);
ans = ++no1;
console.log("Value of ans and no1 after Pree Increment are :- ", ans,no1); 
ans = no1--;
console.log("Value of ans and no1 after Post Decrement are :- ", ans,no1);
ans = --no1;
console.log("Value of ans and no1 after Pree Decrement are :- ", ans,no1);  

// Assignment Operators
let no3 = 10;
let no4 = 5;
no4 += no3;
console.log("Value of no4 += no3 is:- ", no4);          // no4 = 5+10 (15)
no4 -= 5;
console.log("Value of no4 -= 5 is:- ", no4);            // no4 = 15-5 (10)
no4 /= 2;
console.log("Value of no4 /= 2 is:- ", no4);            // no4 = 10/2 (5)
no4 *= 3;
console.log("Value of no4 *= 3 is:- ", no4);            // no4 = 5*3 (15)
no4 %= no3;
console.log("Value of no4 %= no3 is:- ", no4);          // no4 = 15%10 (5)
no4 **= 2;
console.log("Value of no4 **= 2 is:- ", no4);           // no4 = 5**2 (25) 

// Comparison Operators
console.log("Answer of 5==5 is:- ", 5==5);                  // true
console.log("Answer of 55==5 is:- ", 55==5);                // false
console.log("Answer of 55==5 is:- ", 5=='5');               // true
console.log("Answer of 5==='5' is:- ", 55==='5');           // false
console.log("Answer of 5===5 is:- ", 5===5);                // true
console.log("Answer of 5!=5 is:- ", 5!=5);                  // false
console.log("Answer of 5!=15 is:- ", 5!=15);                // true
console.log("Answer of 5!==5 is:- ", 5!==5);                // false
console.log("Answer of 5!=='5' is:- ", 5!=='5');            // true
console.log("Answer of 5!==15 is:- ", 5!==15);              // true
console.log("5 greater than 4 :- ", 5 > 4);                 // true
console.log("5 greater than 10 :- ", 5 > 10);               // false
console.log("5 greater than or equal to 5 :- ", 5 >= 5);    // true
console.log("5 greater than or equal to 15 :- ", 5 >= 15);  // false
console.log("5 less than 6 :- ", 5 < 6);                    // true
console.log("5 less than 4 :- ", 5 < 4);                    // false
console.log("5 less than or equal to 5 :- ", 5 <= 5);       // true
console.log("5 less than or equal to 3 :- ", 5 <= 3);       // false 

// Logical operators
let num1 = 10;
let num2 = 20;
console.log("num1 is less than 20 and num2 is greater than 15 :-", (num1 < 20 && num2 > 15));   // true
console.log("num1 is less than 20 and num2 is greater than 25 :-", (num1 < 20 && num2 > 25));   // false
console.log("num1 is less than 20 or num2 is greater than 15 :-", (num1 < 20 || num2 > 15));   // true
console.log("num1 is less than 20 or num2 is greater than 25 :-", (num1 < 20 || num2 > 25));   // true
console.log("num1 is less than 2 or num2 is greater than 25 :-", (num1 < 2 || num2 > 25));   // false
console.log("num1 is not equal to 20 :- ", num1 != 20);      // true
console.log("num1 is not equal to 20 :- ", !(num1 == 20));      // true
console.log("num1 is not equal to 10 :- ", num1 !=10);      // false 

// Conditional (Ternary) Operator
let age = 20;
let voteAble = (age < 18) ? "Too young, can't casting your vote":"Age enough, you can casting your vote";       // Age enough, you can casting your vote

if (isNaN(age)) {
  voteAble = "Input is not a number";
} else {
  voteAble = (age < 18) ? "Too young, can't casting your vote":"Age enough, you can casting your vote";       // Age enough, you can casting your vote
} 

// The Nullish Coalescing Operator (??)
// ?? operator returns the first argument if it is not nullish (null or undefined).
let n = null;
let text = "null or undefined is assign ";
let result = n ?? text;
console.log("Value of result variable is :- ", result);
result = 6 ?? "This time you enter some value ";
console.log("Value of result variable is :- ", result); */

// The Optional Chaining Operator (?.)
//?. operator returns undefined if an object is undefined or null (instead of throwing an error).
// const student = {
//     name: "jeetendra", 
//     rno: "07", 
//     education: "MCA"
// };
// let ans = student?.marks;
// console.log("value of ans is :- ",ans);
// ans = student?.name;
// console.log("value of ans is :- ",ans);


// nullish coalescing operator (??)
let mark 
mark = mark ?? 33; 
console.log(mark); 