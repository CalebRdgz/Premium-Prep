//What is a Nested Loop?:
//Let us consider a few cases related to nested structures and loops
//More specifically, the following lesson deals with nested loops
//We will start by walking through a few nested structures:
var nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(nestedArray[0]); //logs entire 1st array inside nestedArray ([1,2,3])
console.log(nestedArray[0][0]); //logs first value inside the ferst array inside nested Array (1)
console.log(nestedArray[0][1]); //2
console.log(nestedArray[0][2]); //3

console.log(nestedArray[1][0]); //[i][j]
console.log(nestedArray[1][1]);
console.log(nestedArray[1][2]);

console.log(nestedArray[2][0]);
console.log(nestedArray[2][1]);
console.log(nestedArray[2][2]);

//Using the console, or repl.it, write a series of console.log statements that will log the numbers in ascending (small to large) order
var nestedObject = {
  'inner1': {a: 1, b: 2, c: 3},
  'inner2': {d: 4, e: 5, f: 6},
  'inner3': {g: 7, h: 8, i: 9}
};

console.log(nestedObject['inner1']); //{ a: 1, b: 2, c: 3 }
console.log(nestedObject['inner1']['a']); //1
console.log(nestedObject['inner1']['b']); //2
console.log(nestedObject['inner1']['c']); //3

//Again, using the console, or repl.it, write a series of console.log statements that will log the numbers in ascending (small to large) order
var arrayOfObjects = [
  {a: 1, b: 2, c: 3},
  {d: 4, e: 5, f: 6},
  {g: 7, h: 8, i: 9}
];

console.log(arrayOfObjects[0].a); //1
console.log(arrayOfObjects[0]['b']); //2
console.log(arrayOfObjects[0]['c']); //3

console.log(arrayOfObjects[1].d); //4
console.log(arrayOfObjects[1]['e']); //5
console.log(arrayOfObjects[1]['f']); //6

console.log(arrayOfObjects[2].g); //7
console.log(arrayOfObjects[2]['h']); //8
console.log(arrayOfObjects[2]['i']); //9

//Again, using the console, or repl.it, write a series of console.log statements that will log the numbers in ascending (small to large) order
var objectOfArrays = {
  'inner1': [1, 2, 3],
  'inner2': [4, 5, 6],
  'inner3': [7, 8, 9]
};

console.log(objectOfArrays['inner1'][0]); //1
console.log(objectOfArrays['inner1'][1]); //2
console.log(objectOfArrays['inner1'][2]); //3

console.log(objectOfArrays['inner2'][0]); //4
console.log(objectOfArrays['inner2'][1]); //5
console.log(objectOfArrays['inner2'][2]); //6

console.log(objectOfArrays['inner3'][0]); //7
console.log(objectOfArrays['inner3'][1]); //8
console.log(objectOfArrays['inner3'][2]); //9


//One last time, using the console, or repl.it, write a series of console.log statements that will log the numbers in ascending (small to large) order
//Now that we have sorted that out, let us implement a few nested loops to accomplish a similar task.

//----------------------------------------------------------------------------------------------------

//Nested For Loop
//Let us consider the case of wanting to loop over an array (or more than one), inside of our looping over another array
//We can do so using a nested for loop:
var nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (var i = 0; i < nestedArray.length; i++) {
  for (var j = 0; j < nestedArray[i].length; j++) {
    console.log(nestedArray[i][j]);
  }
  console.log('end of inner loop');
}
console.log('end of outer loop');

//We can also do this with variables:
var addresses = [
  ['1a', '1b', '1c'],
  ['2a', '2b', '2c'],
  ['3a', '3b', '3c']
];

for (var i = 0; i < addresses.length; i++) {
  for (var j = 0; j < addresses[i].length; j++) {
    console.log(addresses[i][j]);
  }
}

//For loop over an array of arrays:
function loopAnArrayOfArrays(arrayOfArrays) {
    // create a loop which iterates over the input array
    for (var i = 0; i < arrayOfArrays.length; i++){
        // create an inner loop which iterates over current inner array
        for (var j = 0; j < arrayOfArrays[i].length; j++){
            // log current element to the console
            console.log(arrayOfArrays[i][j]);
        }
    }
}
//test cases:
loopAnArrayOfArrays([ ['a', 'b', 'c'], ['d', 'e', 'f'] ]);
// console output:
  // a
  // b
  // c
  // d
  // e
  // f

loopAnArrayOfArrays([ [1, 2], [3, 4], [5], [6, 7, 8] ]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8

//----------------------------------------------------------------------------------------------------

//Nested For-in Loop
//Let us consider the case of wanting to loop over an object (or more than one), inside of our looping over another object
//We can so do using a nested for-in loop
var nestedObject = {
  'inner1': {a: 1, b: 2, c: 3},
  'inner2': {d: 4, e: 5, f: 6},
  'inner3': {g: 7, h: 8, i: 9}
};

for (var key in nestedObject) {
  for (var innerKey in nestedObject[key]) {
    console.log(nestedObject[key][innerKey]);
  }
  console.log('end of inner loop');
}
console.log('end of outer loop');

//We can also do this with variables:
var salesNumbers = {
  'team1': {amy_jones: 34, davy_jones: 36, crazy_jones: 19},
  'team2': {jonas_ames: 43, joney_davids: 63, joney_craze: 91}
};

for (var teamName in salesNumbers) {
  for (var salesPerson in salesNumbers[teamName]) {
    console.log(salesNumbers[teamName][salesPerson]);
  }
}
//For-in loop over an object of objects:
function loopAnObjectOfObjects(nestedObject) {
    // create a loop which iterates over the input object
    for (var key in nestedObject){
      // create an inner loop which iterates over current inner object
      for (var innerKey in nestedObject[key]){
          // log current value to the console
          console.log(nestedObject[key][innerKey]);
      }
    }
  }
//test cases:
loopAnObjectOfObjects({ a: {a: 1, b: 2}, b: {a: 5, b: 6} });
// console output:
  // 1
  // 2
  // 5
  // 6

loopAnObjectOfObjects({ structures: {queue: true, stack: false}, plantLife: {tree: 'leaves'}, letters: {apple: 'a', bag: 'b', cats: 'c'} });
// console output:
  // true
  // false
  // leaves
  // a
  // b
  // c

//----------------------------------------------------------------------------------------------------

//Nested Mixed Loop (1)
//Let us consider the case of wanting to loop over an object (or more than one), inside of our looping over an array
//We can so do using a for-in loop nested inside of a for loop:
var arrayOfObjects = [
  {a: 1, b: 2, c: 3},
  {d: 4, e: 5, f: 6},
  {g: 7, h: 8, i: 9}
];

for (var i = 0; i < arrayOfObjects.length; i++) {
  for (var key in arrayOfObjects[i]) {
    console.log(arrayOfObjects[i][key]);
  }
}

//We can also do this with variables:
var mutants = [
  {name: 'Professor X', ability: 'mind control', favoriteFood: 'Watermelon'},
  {name: 'Wolverine', power: 'healing', favoriteSong: 'Never gonna give you up'},
  {name: 'Storm', power: 'weather stuff', hobby: 'messing with local news weathermen'}
];

for (var i = 0; i < mutants.length; i++) {
  // we can create an 'alias' to more easily name current mutant
  var currentMutant = mutants[i];
  for (var key in currentMutant) {
    console.log(currentMutant[key]);
  }
}

//Loop over an array of objects:
function loopAnArrayOfObjects(arrayOfObjects) {
    // create a loop which iterates over the input array
    for (var i = 0; i < arrayOfObjects.length; i++){
        var innerObj = arrayOfObjects[i]; //creating an alias for the current inner object
        // create an inner loop which iterates over current inner object
        for (var key in innerObj){
        // log current value to the console
        console.log(innerObj[key]);
        }
    }
}
//test cases:
loopAnArrayOfObjects([{a: 1, b: 2}, {z: 5, y: 6}, {q: 14} ]);
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14

loopAnArrayOfObjects([{queue: false, stack: true}, {fish: 'swims'}, {shirt: 's', pop: 'p', eye: 'e'} ]);
// console output:
  // false
  // true
  // swims
  // s
  // p
  // e

//----------------------------------------------------------------------------------------------------

//Nested Mixed Loop (2)
//Let us consider the case of wanting to loop over an array (or more than one), inside of our looping over an object
//We can so do using a for loop nested inside of a for-in loop
var objectOfArrays = {
  'inner1': [1, 2, 3],
  'inner2': [4, 5, 6],
  'inner3': [7, 8, 9]
};

for (var key in objectOfArrays) {
  for (var i = 0; i < objectOfArrays[key].length; i++) { //loops and logs 1-9
    console.log(objectOfArrays[key][i]);
  }
}

//We can also do this with variables:
var winningLottoHistory = {
  '9/5/2018': [1, 27, 63],
  '9/8/2018': [3, 21, 58],
  '9/12/2018': [4, 17, 37]
};

for (var dateOfDrawing in winningLottoHistory) {
  // we can create an 'alias' to more easily name current winning numbers
  var currentWinningNumbers = winningLottoHistory[dateOfDrawing]
  for (var i = 0; i < currentWinningNumbers.length; i++) {
    console.log(currentWinningNumbers[i]);
  }
}

//Loop over an object of arrays:
function loopAnObjectOfArrays(objectOfArrays) {
    // create a loop which iterates over the input object
    for (var key in objectOfArrays){
        var innerArr = objectOfArrays[key];
        // create an inner loop which iterates over current inner array
            for (var i = 0; i < innerArr.length; i++){
                // log current value to the console
                console.log(innerArr[i]);
        }
    }
}
//test cases:
loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14
  // 21

loopAnObjectOfArrays({ third: [false, false], fourth: ['runs'], ninth: ['q', 'l', 'z'] });
// console output:
  // false
  // false
  // runs
  // q
  // l
  // z

//----------------------------------------------------------------------------------------------------

//All Combinations using For Loops
//Let us consider the case of wanting all of the combinations possible between two arrays
//We can do so by using a nest for loop:
var numbers = [1, 2, 3];
var letters = ['a', 'b', 'c'];

for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < letters.length; j++) {
    console.log(numbers[i] + ' ' + letters[j]);
  }
}

//We can also do this with variables:
var flavors = ['Vanilla', 'Chocolate', 'Strawberry'];
var toppings = ['Sprinkles', 'Caramel', 'Whipped Cream'];

for (var i = 0; i < flavors.length; i++) {
  for (var j = 0; j < toppings.length; j++) {
    console.log("You can have " + flavors[i] + " with " + toppings[j]);
  }
}
//List all combinations of two arrays:
function generateCombinations(array1, array2) {
    // create a loop which iterates over the first array
    for (var i = 0; i < array1.length; i++){
        // create an inner loop which iterates over the second array
        for (var j = 0; j < array2.length; j++){
            // log current element of first array and current element of second array to the console with space in between
            console.log(array1[i] + ' ' + array2[j]);
        }
    }
      
        
  }
//test cases:
generateCombinations(['a', 'b', 'c'], ['d', 'e', 'f']);
// console output:
  // a d
  // a e
  // a f
  // b d
  // b e
  // b f
  // c d
  // c e
  // c f

generateCombinations([1, 2], ['buckle', 'my', 'shoe']);
// console output:
  // 1 buckle
  // 1 my
  // 1 shoe
  // 2 buckle
  // 2 my
  // 2 shoe

//----------------------------------------------------------------------------------------------------
