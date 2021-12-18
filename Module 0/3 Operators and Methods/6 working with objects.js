//A Quick Refresher
//An object is a collection of properties
//A property is an association between a name (key) and a value (some data type)
//A property's value can be any of the types we have gone over, as well as being another object, or even a function
//In the case where the value of a property is a function, we refer to the property as a method

//Creating an Object
//Let us consider the case of wanting to create an object

//In order to create an object, we can assign a variable to a set of curly braces, which may or may not contain properties (an association between a key and a value), each of which are separated by commas
var obj = {a: 1, b: 2}; //object with keys a and b
var empty = {}; //empty object

console.log('obj:', obj);
console.log('empty:', empty);

//We can also do this with more robustly named variables:
var person = { //object with keys name, favoriteLanguage, and experienceInYears
  name: 'Nick', //key can be string or not string ex.) name: and 'name':
  favoriteLanguage: 'Ruby',
  experienceInYears: 16
};

var personAlternate = {
  'name': 'Nick', //key can be string or not string ex.) name: and 'name':
  'favoriteLanguage': 'Ruby',
  'experienceInYears': 16
}

console.log('person:', person);
console.log('personAlternate:', personAlternate);

//challenges:
function createObject() {
    // create a result variable,
    // assign it to a new object
    var result = {};
    return result;
    // return the result variable
  }
//test cases:
var resultObject = createObject();
console.log('should be an object:', typeof resultObject);
console.log('should not be an array:', Array.isArray(resultObject));

//----------------------------------------------------------------------------------------------------

//Accessing a Property in an Object
//Let us consider the case of wanting to access the value of a specific property from within an object
//Recall that object properties are associations between keys and values

//This means that we can access a given property's value using the object's name at a specific key:
var object = {
  a: 1,
  b: 2,
  c: 3
};

var valueAtB_bracket = object['b']; //bracket notation
var valueAtB_dot = object.b; //dot notation, ^both work the same
console.log('value at b, using bracket notation:', valueAtB_bracket); //value at b, using bracket notation: 2
console.log('value at b, using dot notation:', valueAtB_dot); //value at b, using dot notation: 2

//We can also do this with variables, which adds one complication:
// notice that one of our keys has spaces in it, and is listed as a string
var records = {
  'choice for breakfast': 'eggs,bacon,pancakes,coffee',
  total: 11,
  paid: true
};

var key = 'total';
var valueAtKey = records['total']; //records @ 'total'
var valueAtKey = records[key];
var undefinedValue = records.key; //this won't work because there is no key named "key" in the object records^
console.log('total spent on breakfast:', valueAtKey);
console.log('undefined because of name of key is not actually "key":', undefinedValue);


var complicatedKey = 'choice for breakfast';
var valueAtComplicatedKey = records[complicatedKey];
// uncomment the line below to see why we must use bracket notation
// var errorCausing = records.choice for breakfast;
console.log('breakfast chosen:', valueAtComplicatedKey);

//challenge:
function accessAProperty(object, key) {
    // create a result variable,
    // assign it to an expression that accesses the property in the object located at the key
    var result = object[key];
    return result;
    // return the result variable
  }
//test cases:
var resultValue = accessAProperty({machine: 'Computer', type: 'Macbook', ram: '2 GHz'}, 'ram');
console.log('should be "2 GHz":', resultValue);

//----------------------------------------------------------------------------------------------------

//Reassigning a Property's Value in an Object
//Let us consider the case of wanting to reassign a property's value in an object
//Objects, like Arrays, are mutable

//This means that we can change them once they are created, and is as simple as making an assignment using the = operator:
var object = {
  firstMonth: 'January',
  secondMonth: 'March',
  thirdMonth: 'March'
};
console.log('before reassignment:', object);

object['secondMonth'] = 'February'; //object @ 'secondMonth' changes from 'March' to-> 'February'
console.log('after reassignment:', object);

//We can also do this with variables:
var user = {
  id: 12,
  favoriteSuperHero: 'Superman',
  name: 'Jane Whoever'
};
console.log('before reassignment:', user);

var keyToCorrect = 'favoriteSuperHero';
var newFavoriteSuperHero = 'Batman';

user[keyToCorrect] = newFavoriteSuperHero;
console.log('after reassignment:', user);

//challege:
function reassignAProperty(object, key, newValue) {
    // reassign the property's value in the object, located at the key, to the newValue parameter
    object[key] = newValue;
    return object;
    // return the input object
  }
//test cases:
var resultObject = reassignAProperty({name: 'Ramses', favoriteFood: 'chicken', type: 'dog'}, 'favoriteFood', 'goose');
console.log('should replace "chicken" with "goose":', resultObject);

//----------------------------------------------------------------------------------------------------

//Removing a Property from an Object
//Let us consider the case of wanting to remove a property from an existing object

//We can do so using the delete operator:
var object = {
  abs: 1,
  baq: 2,
  cio: 'mistake',
  dec: 3
};

delete object.cio; //delete removes cio from the object above^
console.log('object with property removed:', object);

//We can also do this with variables:
var lunchOrders = {
  Jubal: 'Turkey Sandwich',
  Christof: 'Falafel',
  spec1: 'Processor Speed',
  Wali: 'Gyro'
};
var keyOfPropertyToBeRemoved = 'spec1';

delete lunchOrders[keyOfPropertyToBeRemoved];
console.log('list of lunch orders with incorrect property removed:', lunchOrders);

//challenge:
function removeAProperty(object, key) {
    // remove the property at the given key from the object
    delete object[key];
    return object;
    // return the object
  }
//test cases:
var resultObject1 = removeAProperty({q: 9, r: 10, text: 'bad entry'}, 'text');
console.log('should log {q: 9, r: 10}:', resultObject1);

var resultObject2 = removeAProperty({first: 'one', second: 'two', why: 452, third: 'three'}, 'why');
console.log('should log {first: "one", second: "two", third: "three"}:', resultObject2);

//----------------------------------------------------------------------------------------------------

//Checking if a Property is present in an Object
//Let us consider the case of wanting to determine if a property is present within an object
//We can do so by realizing that the value of a property that is not present within an object is always undefined

//Thus, we will access an object at the property's key, and check this against undefined
var object = {
  a: 1,
  b: 2,
  c: 3
};

console.log('value for a key that is not present:', object['x']); //there is no key named 'x' so will be undefined
console.log('value at "x" is undefined?:', object['x'] === undefined); //will be true because 'x' is undefined in the object
console.log('value at "b" is defined?:', object['b'] !== undefined); //will be true because 'b' is defined in the object

//We can also do this with variables:
var birthdayPlanForAnIntrovert = {
  activity: 'Watching a TV Marathon',
  food: 'Enough for maybe 1 or 2 people',
  goingOut: false
};

var reservations = birthdayPlanForAnIntrovert.reservations;
console.log('undefined, because they do not need reservations:', reservations); //undefined because reservations is not defined in the object^
console.log('reservations are undefined?:', reservations === undefined);
console.log('activity is defined?:', birthdayPlanForAnIntrovert.activity !== undefined); //true because activity is defined in the object^

//challenge:
function isPropertyPresent(object, key) {
    // create an isPresent variable
    // assign it to a comparison between object's value at key and undefined
    var isPresent = object[key] !== undefined;
    return isPresent;
    // return the isPresent variable
  }
//test cases:
var object1 = {
    a: 1,
    b: 2
  }
  var key1 = 'c';
  var result1 = isPropertyPresent(object1, key1);
  console.log('should log false:', result1);
  
  var object2 = {
    'size': 'M',
    'color': 'green',
    'cut': 'tapered',
    'price': 30
  };
  var key2 = 'cut';
  var result2 = isPropertyPresent(object2, key2);
  console.log('should log true:', result2);

//----------------------------------------------------------------------------------------------------

//Determining if a value is an Object:

//We can do so using the typeof operator, in conjunction with the Array.isArray() method
var obj = {
  a: 1,
  b: 3,
  c: 5
};
console.log('value is an object and not an array:', typeof obj === "object" && !Array.isArray(obj));

//We can also do this with variables:
var playground = {
  location: 'city park',
  swings: true,
  hours: '8am - 10pm'
};

var playgroundIsObject = typeof playground === "object"; // true if playgroud is an object^ (true)
var playgroundIsNotAnArray = !Array.isArray(playground); //true if playgroud is NOT an array^ (true)
var playgroundIsObjectAndNotAnArray = playgroundIsObject && playgroundIsNotAnArray; //true if playgroud is an object^ and NOT an array^ (true)
console.log('playground value is an object and not an array:', playgroundIsObjectAndNotAnArray); //logs playground value is an object and not an array: true

//challenge:
function isAnObject(input) {
    // create an isObject variable
    // assign it to whether the input is an object type
    var isObject = typeof input === "object";
    // create an isNotAnArray variable
    // assign it to whether the input is not an array
    var isNotAnArray = !Array.isArray(input);
    // create an isObjectAndNotAnArray variable
    // assign it to a combination of isObject AND isNotAnArray
    var isObjectAndNotAnArray = (typeof input === "object" && !Array.isArray(input));
    return isObjectAndNotAnArray;
    // return the isObjectAndNotAnArray variable
  }
//test cases:
var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2);

//----------------------------------------------------------------------------------------------------

//Generating an array of all keys in an Object
//Let us consider the case where we want to generate an array of all the keys in an object

//We can do so using the Object.keys() method
var arrayOfKeys = Object.keys({a:1, b:2, c:3});
console.log('an array containing the keys:', arrayOfKeys); //will be strings

//We can also do this with variables:
var address = {
  number: 123,
  street: 'Fake St.',
  city: 'Springfield',
  state: 'QX',
  zipcode: 99999
};

var keysInAddress = Object.keys(address);
console.log('an array of the address object\'s keys:', keysInAddress);

//challenge:
function getAllKeys(obj) {
    // create a keys variable
    // assign it to an expression which will generate an array of all of the keys in obj
    var keys = Object.keys(obj);
    return keys;
    // return to the keys variable
  }
//test cases:
var resultKeys = getAllKeys({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log ["firstScore", "secondScore", "thirdScore"]:', resultKeys);

//----------------------------------------------------------------------------------------------------

//Generating an array of all values in an Object
//Let us consider the case where we want to generate an array of all the values in an object

//We can do so using the Object.values() method
var arrayOfValues = Object.values({a:1, b:2, c:3});
console.log('an array containing the values:', arrayOfValues);

//We can also do this with variables:
var address = {
  number: 123,
  street: 'Fake St.',
  city: 'Springfield',
  state: 'QX',
  zipcode: 99999
};

var valuesInAddress = Object.values(address);
console.log('an array of the address object\'s values:', valuesInAddress);

//challenge:
function getAllValues(obj) {
    // create a values variable
    // assign it to an expression which will generate an array of all of the values in obj
    var values = Object.values(obj);
    return values;
    // return to the values variable
  }
//test cases:
var resultValues = getAllValues({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log [12, 34, 28]:', resultValues);