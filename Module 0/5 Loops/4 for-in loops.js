//What is a For-in Loop?
//A for-in statement allows us to loop over the properties in an object
//It is not usually a good idea to use this for-in loop syntax on an array or a string
//However, it is possible to use for-in loops on arrays and strings
//Whatever variable we declare will be assigned to a string value of each key within the object
//for ( /*variable*/ in /*object*/ ) {
  /* statement */
//}

//For-in Loop
//Let us consider the case of wanting to look at, or do something, to the properties of an object
//We can do so with a for-in loop
//This example has more details, for a more robust demonstration
Y//ou will often hear this described as "iterating over the object"
var object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

for (var key in object) {
  console.log('current key:', key);
  console.log('current value:', object[key]);
  //gives context for when each iteration of loop ends
  console.log('==============');
}

//We can also do this with variables:
var iceCream =  {
  flavor: 'Strawberry Cheesecake',
  supportingCast: 'Waffle Cone',
  price: 2.5,
  iScream: true
};;

for (var namedOddlyToMakeAPoint in iceCream) {
  console.log('current key:', namedOddlyToMakeAPoint);
  console.log('current value:', iceCream[namedOddlyToMakeAPoint]);
}

//A Quick Note about Iterating over an Object
//It is not always necessary to iterate over an object
//If we know the name of the key for a property we are searching for, then we DO NOT need to iterate
//If, however, we are looking for a value, or want to look at all of an object's properties, then iteration may be the correct way to go

//For-in loop over an object (1):
function loopOverKeys(object) {
    // create a loop which iterates over the input object
      // log current key to the console
    for (var key in object){
        console.log(key);
    }
  }
//test cases:
loopOverKeys({a: 1, b: 2, c: 3});
// console output:
  // a
  // b
  // c

loopOverKeys({make: 'Ford', model: 'T', year: 1913});
// console output:
  // make
  // model
  // year

//----------------------------------------------------------------------------------------------------

//For-in loop over an object (2):
function loopOverValues(object) {
    // create a loop which iterates over the input object
      // log current value to the console
    for (var key in object){
        var currentValue = object[key];
        console.log(currentValue);
    }
  }
//test cases:
loopOverValues({a: 1, b: 2, c: 3});
// console output:
  // 1
  // 2
  // 3

loopOverValues({make: 'Ford', model: 'T', year: 1913});
// console output:
  // Ford
  // T
  // 1913