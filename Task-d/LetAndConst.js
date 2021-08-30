//let and const both are used for variable declaration and are exactly same.
//The only difference is that once you’ve assigned a value to a variable using 
//const, you can’t reassign it to a new value.

//UseCase 1
let name = 'Annie';
const email = 'annie@mail.com';

name = 'Amna';

console.log(name);
console.log(email);


//UseCase 2
let name = 'Annie';
const email = 'annie@mail.com';

name = 'Amna';
email = 'amna@mail.com' ; // generate error

console.log(name);
console.log(email);


//UseCase 3
//Changing property of an object
const person = {name: 'Annie'};
person.name = 'Sarah';

// person = {}; // generate error

console.log(person);
