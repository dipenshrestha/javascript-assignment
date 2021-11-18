// Task 3 - Create a constant and try to create another constant with the same name and see what happens, fix the mistake if something goes wrong.

const pi = 3.14;
console.log(pi);

//const pi = 2.3; 
// Gives error : Uncaught SyntaxError: Identifier 'pi' has already been declared
// to declare another constant we must name another name that is not defined already 
const myFavNumber = 7;
console.log('my fav number' +' ' + myFavNumber);