// array, length, push, isArray

//push
var numbers = [0,1,2,3,4,5,6,7,8,9];

console.log('length before push', numbers.length);

console.log('before push', numbers);

numbers.push(10);
//console.log(numbers.push(10));

console.log('length after push', numbers.length);
console.log('after push', numbers);

console.log('what push returns: ', numbers.push('eleven'));
console.log("numbers after push 'eleven'", numbers);

//assignment
numbers[15] = 15; //theres no element at index 15

console.log('after numbers[15] = 15;', numbers); //3 empty items between index 12 - index 14 (they return undefined)

