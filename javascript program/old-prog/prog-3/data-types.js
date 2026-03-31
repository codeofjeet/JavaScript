// Data types
/* Primitive Data Types

string
number
boolean
bigint
symbol
null
undefined   */

let name = "codeofjeet";
const PI = 3.14;
let age = 29;
let choice = false;
let stock = 234n;
let comm =  null;
let fees;
let no = new Number(10);

console.log("Type of Name variable value (codeofjeet) is :- ", typeof(name));
console.log("Type of PI variable value (3.14) is :- ", typeof(PI));
console.log("Type of Age variable value (29) is :- ", typeof(age));
console.log("Type of Choice variable value (false) is :- ", typeof(choice));
console.log("Type of Stock variable value (234n) is :- ", typeof(stock));
console.log("Type of Commission variable value (null) is :- ", typeof(comm));
console.log("Type of Fees variable value (undefine) is :- ", typeof(fees));
console.log("Type of Symblo() is :- ", typeof(Symbol()));
console.log("Type of no variable value (10) is :- ", typeof no);


/* Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an object. */

// all primitive data types store at stack memory which is create a another copy of value when you assign any variable to another variable
let No1 = 10;
let No2 = No1;
No2 = 20;
console.log("Value of No1 is :- ", No1);
console.log("Value of No2 is :- ", No2);

// all non primitive data types store at heap memory which is assign address of any variable when you assign any varibale to another variable
let Name1 ={
    id: 1,
    name: "jeetendra",
    age: 29
}

let Name2 = Name1;
Name2.name = "jeetendra gangwar"
console.log(Name1);
console.log(Name2);

