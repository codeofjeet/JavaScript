// properties of the Math object
console.log("Math.LN10: " + Math.LN10);          // Returns the natural logarithm of 10, approximately 2.302
console.log("Math.LOG2E: " + Math.LOG2E);       // Returns the base 2 logarithm of e, approximately 1.442
console.log("Math.Log10E: " + Math.LOG10E);     // Returns the base 10 logarithm of e, approximately 0.434
console.log("Math.SQRT2: " + Math.SQRT2);       // Returns the square root of 2, approximately 1.414
console.log("Math.SQRT1_2: " + Math.SQRT1_2);   // Returns the square root of 1/2, approximately 0.707
console.log("Math.LN2: " + Math.LN2);           // Returns the natural logarithm of 2, approximately 0.693
console.log("Math.E: " + Math.E);               // Returns Euler's number, the base of natural logarithms, e, approximately 2.718
console.log("Math.PI: " + Math.PI);             // Returns the ratio of the circumference of a circle to its diameter (i.e. π). The approximate value of PI is 3.14159

// standard methods of the Math object.

// 1. Math.abs() method accepts a number as a parameter and returns the absolute value of the provided number. (https://www.tutorialspoint.com/javascript/javascript_math_object.htm)
let a = Math.abs(15);
let b = Math.abs(-15);
let c = Math.abs(5-4.5);
let d = Math.abs(3-6);
console.log("Value of a is :- ", a);    // 15
console.log("Value of b is :- ", b);    // 15
console.log("Value of c is :- ", c);    // 0.5
console.log("Value of d is :- ", d);    // 3

let a1 = Math.abs(null);
console.log("Value of a1 is :- ", a1);    // 0
let a2 = Math.abs("codeofjeet");
console.log("Value of a2 is :- ", a2);    // NaN

// 2. Math.acosh() method in JavaScript is used to calculate the hyperbolic arc cosine of a number. 
const result1 = Math.acosh(0);
const result2 = Math.acosh(-Infinity);
const result3 = Math.acosh(1);
const result4 = Math.acosh(2);
console.log("Value of result1 is :- ", result1);    // NaN
console.log("Value of result2 is :- ", result2);    // NaN
console.log("Value of result3 is :- ", result3);    // 0
console.log("Value of result4 is :- ", result4);    // 1.316

// 3. Math.acos() method accepts a number as a parameter and calculates the arccosine (inverse cosine) of a number.
let number1 = Math.acos(-1);
console.log("Value of number1 is :- ", number1);    // 3.141592653589793
let number2 = Math.acos(0);
console.log("Value of number2 is :- ", number2);    // 1.5707963267948966
let number3 = Math.acos(0.5);
console.log("Value of number3 is :- ", number3);    // 1.0471975511965979
let number4 = Math.acos(1);
console.log("Value of number4 is :- ", number4);    // 0
let number5 = Math.acos(-2);
console.log("Value of number5 is :- ", number5);    // NaN
let number6 = Math.acos(2);
console.log("Value of number6 is :- ", number6);    // NaN

// 4. Math.asin() method accepts a number as a parameter and calculates the arcsine (inverse sine) of a number.
let n1 = Math.asin(-1);
console.log("Value of n1 is :- ", n1);    // -1.5707963267948966
let n2 = Math.asin(-0.5);
console.log("Value of n2 is :- ", n2);    // -0.5235987755982989
let n3 = Math.asin(0);
console.log("Value of n3 is :- ", n3);    // 0
let n4 = Math.asin(0.5);
console.log("Value of n4 is :- ", n4);    // 0.5235987755982989
let n5 = Math.asin(1);
console.log("Value of n5 is :- ", n5);    // 1.5707963267948966
let n6 = Math.asin(-2);
console.log("Value of n6 is :- ", n6);    // NaN (arguments are not in range -1 to 1)
let n7 = Math.asin(2);
console.log("Value of n7 is :- ", n7);    // NaN (arguments are not in range -1 to 1)
console.log("Value of codeofjeet is :- ", Math.asin("codeofjeet"));    // NaN 

// 5. Math.asinh() method in JavaScript is used to calculate the inverse hyperbolic sine (also known as arcsinh) of a number.
const r1 = Math.asinh(1);
console.log("Value of r1 is :- ", r1);    // 0.881373587019543
const r2 = Math.asinh(-1);
console.log("Value of r2 is :- ", r2);    // -0.881373587019543
const r3 = Math.asinh(0);
console.log("Value of r3 is :- ", r3);    // 0
const r4 = Math.asinh(-0);
console.log("Value of r4 is :- ", r4);    // 0
const r5 = Math.asinh(Infinity);
console.log("Value of r5 is :- ", r5);    // Infinity
const r6 = Math.asinh(-Infinity);
console.log("Value of r6 is :- ", r6);    // -Infinity

// 6. Math.atan() method accepts a number as a parameter and calculates the arctangent (inverse of tangent) of a number.
let num1 = Math.atan(-2);
console.log("Value of num1 is :- ", num1);    // -1.1071487177940904
let num2 = Math.atan(0);
console.log("Value of num2 is :- ", num2);    // 0
let num3 = Math.atan(2);
console.log("Value of num3 is :- ", num3);    // 1.1071487177940904
let num4 = Math.atan(Infinity);
console.log("Value of num4 is :- ", num4);    // 1.5707963267948966 (/2)
let num5 = Math.atan(-Infinity);
console.log("Value of num5 is :- ", num5);    // -1.5707963267948966 (-/2)

// 7. Math.atan2() method in JavaScript is used to calculate the arctangent of the quotient of its arguments, representing the angle in radians.
const res1 = Math.atan2(4, 1);
console.log("Value of res1 is :- ", res1);    // 0.7853" (45 degrees in radians)
const res2 = Math.atan2(0, 1);
console.log("Value of res2 is :- ", res2);    // 0

// 8. Math.atanh() method accepts a numeric value and calculates the hyperbolic arctangent (inverse hyperbolic tangent) of the number.
const R1 = Math.atanh(0.5);
console.log("Value of R1 is :- ", R1);    // 0.5493061443340548
const R2 = Math.atanh(-0.5);
console.log("Value of R2 is :- ", R2);    // -0.5493061443340548
const R3 = Math.atanh(1);
console.log("Value of R3 is :- ", R3);    // Infinity
const R4 = Math.atanh(-1)
console.log("Value of R4 is :- ", R4);    // -Infinity
const R5 = Math.atanh(2)
console.log("Value of R5 is :- ", R5);    // NaN
const R6 = Math.atanh(-1)
console.log("Value of R6 is :- ", R6);    // NaN

// 9. Math.cbrt() method accepts a number as a parameter and calculates the cuberoot of a provided number.
let N1 = Math.cbrt(216);
console.log("Value of N1 is :- ", N1);    // 6
let N2 = Math.cbrt(0);
console.log("Value of N2 is :- ", N2);    // 0
let N3 = Math.cbrt(1);
console.log("Value of N3 is :- ", N3);    // 1
let N4 = Math.cbrt("20");
console.log("Value of N4 is :- ", N4);    // 2.7144176165949063

// 10. Math.ceil() method accepts a numeric value as a parameter and rounds it UP to the smallest integer greater than or equal to that number.
let Number1 = Math.ceil(-8.001);
console.log("Value of Number1 is :- ",Number1);    // -8
let Number2 = Math.ceil(-5);
console.log("Value of Number2 is :- ",Number2);    // -5
let Number3 = Math.ceil(-0.60);
console.log("Value of Number3 is :- ",Number3);    // 0
let Number4 = Math.ceil(8.001);
console.log("Value of Number4 is :- ",Number4);    // 9
let Number5 = Math.ceil(5);
console.log("Value of Number5 is :- ",Number5);    // 5
let Number6 = Math.ceil(0.60);
console.log("Value of Number6 is :- ",Number6);    // 1
let Number7 = Math.ceil();
console.log("Value of Number7 is :- ",Number7);    // NaN

// 11. Math.clz32() method is used to return the number of leading zero bits in the 32-bit binary representation of the provided number. The full form of clz32 is CountLeadingZeroes32.
const Result1 = Math.clz32(16); //"00000000000000000000000000010000"
console.log("Value of Result1 is :- ", Result1);    // 27
const Result2 = Math.clz32(3.14); //00000000000000000000000000000011
console.log("Value of Result2 is :- ", Result2);    // 30

// 12. Math.cos() method accepts a numeric value (angle in radians) as a parameter and calculates the trigonometric cosine of the specified angle and returns it.
let no1 = Math.cos(5);
console.log("Value of no1 is :- ", no1);    // 30
let no2 = Math.cos(5);
console.log("Value of no2 is :- ", no2);    // 0.28366218546322625
let no3 = Math.cos(0);
console.log("Value of no3 is :- ", no3);    // 1
let no4 = Math.cos(Math.PI);
console.log("Value of no4 is :- ", no4);    // -1

// 13. Math.cosh() method is accepts a numeric value as a parameter and returns the hyperbolic cosine of that number.
let No1 = Math.cosh(-1);
console.log("Value of No1 is :- ", No1);    // 1.5430806348152437
let No2 = Math.cosh(0);
console.log("Value of No2 is :- ", No2);    // 1
let No3 = Math.cosh(1);
console.log("Value of No3 is :- ", No3);    // 1.5430806348152437
let No4 = Math.cosh();
console.log("Value of No3 is :- ", No3);    // NaN

// 14. Math.exp() method in JavaScript is used to return the result of raising Euler's number (approximately equal to 2.718) to the power of a specified number. 
const Res1 = Math.exp(2);
console.log("Value of Res1 is :- ", Res1);    // 7.38905609893065
const Res2 = Math.exp(-1);
console.log("Value of Res2 is :- ", Res2);    // 0.36787944117144233
const Res3 = Math.exp(0);
console.log("Value of Res3 is :- ", Res3);    // 1

// 15. Math.expm1() method is used to calculate the value of e^x - 1, where "e" is the Euler's number (approximately 2.7183) and "x" is the argument passed to the function.
const re1 = Math.expm1(5);
console.log("Value of re1 is :- ", re1);    // 147.4131591025766
const re2 = Math.expm1(0);
console.log("Value of re2 is :- ", re2);    // 0
const re3 = Math.expm1(-1);
console.log("Value of re3 is :- ", re3);    // -0.6321205588285577
