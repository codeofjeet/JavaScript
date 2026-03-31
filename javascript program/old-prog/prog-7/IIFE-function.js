/*An Immediately Invoked Function Expression (IIFE) is a JavaScript function that executes immediately after it is defined. It is a design pattern used to create a private scope for variables, preventing them from polluting the global scope. */

(function display() {                                // Named IIFE (name is display)
    var localVar = 'This is a local variable';
    console.log(localVar); 
})();

(function () {                                // Without named IIFE
    console.log("This is without named IIFE"); 
})();

var result = (function() {
    var x = 60;
    var y = 40;
    return x + y;
})();

console.log(result);

(function(n1,n2) {
    console.log("Sum of no1 and no2 :- ", (n1+n2))
})(4,5);

(() =>{
    console.log("This is arrow function")
})();

let counter = (function() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
})();

// Increment the counter
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());