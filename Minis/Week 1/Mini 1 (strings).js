//+ concatenate operator
console.log(1+1); //2
console.log("one" + "two"); //onetwo
console.log("1" + "1"); //11

console.log(1 + "one"); //1one
console.log("one" + 1); //one1

var oneString = "one";
var oneNumber = 1;
console.log(oneNumber + oneString);
console.log("oneString: " + oneString);

//length property
console.log("oneString length: " + oneString.length); //3
console.log("oneNumber length: " + oneNumber.length); //undefined because "1" does not have length
//numbers do NOT have a length property. strings and arrays only

//bracket access
console.log(oneString[0]); //"o"
console.log(oneString[1]); //"n"
console.log(oneString[2]); //"e"
console.log(oneString[0] + oneString[1] + oneString[2]); //"one"

oneString[0] = 'W';

console.log("Wne?: " + oneString);
console.log("W" + "ne");
var test = 88;
console.log("test:", test);