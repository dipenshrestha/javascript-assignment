// Task 1 - Perform addition, subtraction, multiplication, and division by taking input using the prompt() function and show all the results by concatenating it with a string like: sum is ... , product is ...

var sum, sub, product, division;
var firstNumber = parseInt(prompt('Enter first number'));
var secondNumber = parseInt(prompt('Enter second number'));

sum = firstNumber + secondNumber;
sub = firstNumber - secondNumber;
product = firstNumber * secondNumber;
division = firstNumber / secondNumber;

console.log('Sum is: ' + sum);
console.log('Subtraction is: ' + sub);
console.log('Product is: ' + product);
console.log('Division is: ' + division);