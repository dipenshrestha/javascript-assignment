// Task 1 - Explore parseFloat() function and pass integer like 1 or 2 and show the result of it on the console

var a = parseFloat(1);
var b = parseFloat(2);
console.log(a);
console.log(b);

a = 1.33;
console.log(a);
a = parseFloat(1.33);
console.log(a);

a = parseFloat('1 2'); //only converts first number of the string
console.log(a);

a = parseFloat('dipen23'); // gives NaN i.e. If the first character cannot be converted to a number, parseFloat() returns NaN.
console.log(a);