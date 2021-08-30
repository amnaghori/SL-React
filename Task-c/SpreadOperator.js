//Merging 2 arrays using spread operator
const array1 = [1,2,3];
const array2 = [4,5,6];   //[...array, 4,5]; 

const array = [...array1,...array2];

console.log("Merging 2 arrays:\n" + array);

//Cloning an array using spread operator
const original = ['One', 'Two', 'Three', 'Four'];
const temp = [...original];

console.log("Array Cloning:\nOriginal Array: " + 
            original + "\nCopied Array: " + temp);

//Converting a string into array using spread operator
const str = 'hello';
const arr = [...str];

console.log("String to array:\n"+arr);
