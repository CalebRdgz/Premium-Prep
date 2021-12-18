//Nested Arrays
//Let us consider the nested array structure below:
//var colors = [['red'], 'orange', ['yellow',['green', ['blue']]], ['indigo', 'violet']];
var colors = [['red'],
 'orange',
  ['yellow',['green', ['blue']]],
   ['indigo', 'violet']];

//At first glance, this structure may seem overly complicated, and to be sure, it is
//However, we are going to walkthrough how to access all of these colors with the following exercise:

//Using the console, write a series of console.log statements that will log the colors in alphabetical order
console.log('blue:', colors[2][1][1][0])
console.log('green', colors[2][1][0])
console.log('indigo:', colors[3][0])
console.log('orange:', colors[1])
console.log('red:', colors[0][0])
console.log('violet:', colors[3][1])
console.log('yellow:', colors[2][0]) //yellow is inside 0

console.log('temp:', colors[2][1]) //(yellow is inside 0) green and blue are inside 1 

//----------------------------------------------------------------------------------------------------

//Nested Objects
//Let us consider the nested object structure below:
var user = {
  "id": 3,
  "name": "Clementine Bauch",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
      "lat": "-68.6102",
      "lng": "-47.0653"
    }
  },
  "phone": "1-463-555-4447",
  "website": "ramiro.info",
  "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "corporate_tagline": "e-enable strategic applications"
  }
};
//Unlike the colors array, this nested object makes a little bit more sense
//Similarly, we are going to walkthrough how to access all of the values with the following exercise:

//Using the console, or repl.it, write a series of console.log statements that will log all of the values in this object
console.log(user['id']);
console.log(user.name); //dot and bracket notation are used interchangeably because none of the keys have special characters (explamation, spaces, etc.)
console.log(user['username']);
console.log(user.email);
//'address' is an object inside the user object
var addressObj = user['address'];
console.log(addressObj.street);
console.log(addressObj['suite']);
console.log(addressObj['city']);
console.log(addressObj['zipcode']);
//"geo" is an object inside the "address" object
var geoObj = addressObj['geo'];
console.log(geoObj['lat']);
console.log(geoObj['lng']);
//examples logging phone and website inside "user" object
//dot and bracket notation are used interchangeably because none of the keys have special characters (explamation, spaces, etc.)
console.log(user['phone']);
console.log(user.website);
//company big enough to use an alias:
var companyObj = user['company']
console.log(companyObj.name);
console.log(companyObj.catchPhrase);
console.log(companyObj['corporate_tagline']);

//----------------------------------------------------------------------------------------------------

//Method applied to a Nested Array:
//Let us consider the case of wanting to add an element to the front of an existing array, which is located inside of another array

//We can do so using the .unshift() method:
var nestedArray = [ [1, 2, 3], [4, 5, 6], [/*we want 7 here*/8, 9] ];
console.log('inner array accessed:',nestedArray[2]);

nestedArray[2].unshift(7); //adds 7 to nestedArray[2] -> [7,8,9]
console.log('nested array with newly added element:', nestedArray);

//We can also do this with variables:
var places = [ ['First', 'Second', 'Third'], [/*we want 'Fourth' here*/'Fifth', 'Sixth'] ];
console.log('inner places array accessed:', places[1]);

var fourthPlace = 'Fourth';
var indexOfNestedArray = 1;
places[indexOfNestedArray].unshift(fourthPlace); //adds 'Fourth' to places[1] -> ['Fourth', 'Fifth', 'Sixth']
console.log('nested list of places with new place added:', places);

//challenge:
function applyUnshiftAgain(arrayOfArrays, index, element) {
    // add the element to the front of the inner array within the array of arrays located at the index
    arrayOfArrays[index].unshift(element);
    return arrayOfArrays;
    // return the array of arrays
  }
//test cases:
var resultArray1 = applyUnshiftAgain([ [1, 3], [10, 11], [9, 4] ], 1, 5);
console.log('should log [ [1, 3], [5, 10, 11], [9, 4] ]:', resultArray1);

var resultArray2 = applyUnshiftAgain([ ['ag', 'bc'], ['ef', 'hi'] ], 0, 'iq');
console.log('should log [ ["iq", "ag", "bc"], ["ef", "hi"] ]:', resultArray2);

//----------------------------------------------------------------------------------------------------

//Method applied to an Array within an Object
//Once we get the idea of nesting down, the number of combinations are endless
//For this example, we will consider an array nested within an object
//Let us consider the case of wanting to determine if a value inside of an object is an array
//We can do so using the Array.isArray() method:
var object = {
  key1: [0, 3, 4],
  key2: 'Tovio'
};
console.log('accessing the inner array:', object['key1']);

console.log('value is an array:', Array.isArray(object['key1']));
console.log('value is an array:', Array.isArray(object['key2']));

//We can also do this with variables:
var holidays = {
  christian: 'Christmas',
  american: ['Memorial Day', 'Labor Day'],
  muslim: 'Ramadan',
  hindu:'Holi'
};

var valueOfAmericanHolidays = holidays.american
console.log('accessing the inner array value:', valueOfAmericanHolidays);

var isAmericanValueAnArray = Array.isArray(valueOfAmericanHolidays);
console.log('american value within holidays is an array:', isAmericanValueAnArray);

var valueOfHinduHoliday = holidays['hindu'];
console.log('accessing the value:', valueOfHinduHoliday);

var isHinduValueAnArray = Array.isArray(valueOfHinduHoliday);
console.log('hindu value within holidays is an array:', isHinduValueAnArray);

//challenge:
function isAnArrayAgain(inputObj, key) {
  // create a result variable
  // assign it to a call to the applicable method
  // return the result variable
  var result = Array.isArray(inputObj[key]);
  return result;
}
//test cases:
var resultBoolean1 = isAnArrayAgain({key1: [1, 2, 3], key2: 'gg'}, 'key1');
console.log('should log true:', resultBoolean1);

var resultBoolean2 = isAnArrayAgain({name: 'Tom', friend: 'Jerry'}, 'friend');
console.log('should log false:', resultBoolean2);

//----------------------------------------------------------------------------------------------------

//Method applied to a Nested Object
//Let us consider the case where we want to generate an array of all the keys in an object, nested within another object
//We can do so using the Object.keys() method
var nestedObject = { key1: {a:1, b:2, c:3}, key2: {d:4, e:5, f:6} }; //key1 and key2 are nested
var arrayOfKeys = Object.keys(nestedObject['key1']);
console.log('an array containing the keys of nested object:', arrayOfKeys);

//We can also do this with variables:
var simpsonsCharacter = {
  name: 'Homer',
  address: {
    number: 123,
    street: 'Fake St.',
    city: 'Springfield',
    state: 'QX',
    zipcode: 99999
  }
};
//accessing keys in address nested object
var key = 'address';
var keysInHomersAddress = Object.keys(simpsonsCharacter[key]); //key = address^
console.log('an array of the nested address object\'s keys:', keysInHomersAddress); //shows array of the keys inside the address object

//Using Object.keys() again:
function getAllKeysAgain(obj, key) {
  // create a keys variable
  // assign it to an expression which will generate an array of all of the keys located within obj at key
  // return to the keys variable
  var keys = Object.keys(obj[key]);
  return keys;
}

//test cases:
var resultKeys = getAllKeysAgain({firstScore: {part1: 12, part2: 14, part3: 10}, secondScore: 34, thirdScore: 28}, 'firstScore');
console.log('should log ["par1", "part2", "part3"]:', resultKeys);

//----------------------------------------------------------------------------------------------------

//Operator applied to an Object within an Array
//Let us consider the case of wanting to remove a property from an existing object, located within an array
//We can do so using the delete operator:
var array = [{
    abs: 1,
    baq: 2,
    cio: 'mistake',
    dec: 3
  },
  {
    jij: 4,
    plw: 5,
    qrt: 6
  }
];

delete array[0].cio;
console.log('array with a nested object\'s property removed:', array);

//We can also do this with variables:
var lunchOrders = [
  {
    Jubal: 'Turkey Sandwich',
    Christof: 'Falafel',
    spec1: 'Processor Speed',
    Wali: 'Gyro'
  },
  {
    Teddy: 'General Tso Chicken',
    Freddy: 'Pizza',
    Betty: 'Tuna Salad'
  }
];
var indexOfObjectWithError = 0;
var keyOfPropertyToBeRemoved = 'spec1';

delete lunchOrders[indexOfObjectWithError][keyOfPropertyToBeRemoved]; //indexOfObjectWithError = 0 (first object in lunchorders), keyOfPropertyToBeRemoved = spec1
console.log('list of lunch orders with incorrect nested object\'s property removed:', lunchOrders);

//Using 'delete' to remove a property again:
function removeAPropertyAgain(arrayOfObjects, index, key) {
  // remove the property at the given key from the object at the given index
  // return the input array of objects
  delete arrayOfObjects[index][key]
  return arrayOfObjects
}
//test cases:
var resultObject1 = removeAPropertyAgain([{q: 9, r: 10, text: 'bad entry'}, {a: 1, b: 2}], 0, 'text');
console.log('should log [{q: 9, r: 10}, {a: 1, b: 2}]:', resultObject1);

var resultObject2 = removeAPropertyAgain([{key: 'value'}, {first: 'one', second: 'two', why: 452, third: 'three'}], 1, 'why');
console.log('should log [{key: "value"}, {first: "one", second: "two", third: "three"}]:', resultObject2);
