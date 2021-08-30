//Printing given arguments
const user = function (name, age, ...hobbies) {
  console.log(name);
  console.log(age);
  console.log(hobbies);
}
user('George', 30, 'swimming', 'reading', 'cricket');

//Printing number of given arguments
const add = function (...args) {
  return ("Total given arguments are: " + args.length);
}
console.log(add(1,2,3,4,1,2));
