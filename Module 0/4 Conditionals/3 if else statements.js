//What is an IF ELSE statement?
//A conditional that allows your program to do something, if some condition is true, and do something else, if that same condition is false
//Consider case (2) from the introduction:
//If Creed will be there, then I will go, otherwise I will stay home.
//Or, in pseudocode:

// if creed is there
  // I will go
// otherwise
  // I will stay home
//Armed with an if else statement, this is easily translatable into code:

// change to false to see 'else' option
var creedIsThere = true;

if (creedIsThere) {
  console.log("I will go");
} else {
  console.log("I will stay home");
}

//Or, more generally speaking:
//if (/*some expression which evaluates to true or false*/) {

  /*some action to be taken in the event
  that the expression above evaluates to true*/

//} else {

  /*some action to be taken in the event
  that the expression above evaluates to false*/

//}

//----------------------------------------------------------------------------------------------------

/*
IF ELSE statement Examples
if else statement with undefined (truthy vs. falsy)
HINT: see "truthy vs. falsy" at end of Booleans Operators and Methods Lesson
// give declared a falsy value to see 'else' condition
*/
var declared = 'something';

if (declared) {
  console.log('declared has a truthy value');
} else {
  console.log('declared has a falsy value');
}

//if else statement with numbers:
// change values of dogs/cats to see 'else' condition
var dogs = 9;
var cats = 8;

if (dogs > 8 && cats < 9) {
  console.log('number of cats and dogs is acceptable');
} else {
  console.log('number of cats or dogs is not acceptable');
}

//if else statement with strings:
// change to a shorter password to see 'else' condition
var password = 'pa$$wordIsLongEnough';

if (password.length > 8) {
  console.log('Password is long enough');
} else {
  console.log('Please enter a password of at least 9 characters');
}

//if else statement with an array:
var ingredientsList = ['flour', 'sugar', 'eggs'];
// change to ingredient not in list to see 'else' condition
var ingredientInQuestion = 'sugar'

if (ingredientsList.indexOf(ingredientInQuestion) > -1 ) {
  console.log(ingredientInQuestion + ' is on the list');
} else {
  console.log(ingredientInQuestion + ' is not on the list');
}

//if else statement with an object:
// change the values to see 'else' condition
var fruitTotals = {bananas: 4, strawberries: 12};

if (fruitTotals.bananas > 3 && fruitTotals.strawberries > 10) {
  console.log('We have enough fruit, with ' + fruitTotals.bananas + ' bananas, and ' + fruitTotals.strawberries + ' strawberries');
} else {
  console.log('We do not have enough of both fruits');
}

//----------------------------------------------------------------------------------------------------

//IF ELSE statement with truthy/falsy:

function isItTruthy(param) {
    // if param is truthy
      // return 'Input is truthy'
    // otherwise
      // return 'Input is falsy'
    if (param){
        return 'Input is truthy'
    }
    else{
        return 'Input is falsy'
    }
}
//test cases:
var result1 = isItTruthy('anything');
console.log('should log "Input is truthy":', result1);

var result2 = isItTruthy();
console.log('should log "Input is falsy":', result2);

var result3 = isItTruthy("");
console.log('should log "Input is falsy":', result3);

var result4 = isItTruthy(false);
console.log('should log "Input is falsy":', result4);

//----------------------------------------------------------------------------------------------------

//IF ELSE statement with numbers:
function balancePets(dogs, cats) {
    // if there are more than 8 dogs and fewer than 9 cats
      // return 'number of cats and dogs is acceptable'
    // otherwise
      // return 'number of cats or dogs is not acceptable'
      if (dogs > 8 && cats < 9){
          return 'number of cats and dogs is acceptable';
      }
      else{
          return 'number of cats or dogs is not acceptable';
      }
  }
//test cases:
var result1 = balancePets(9, 8);
console.log('should log "number of cats and dogs is acceptable":', result1);

var result2 = balancePets(7, 12);
console.log('should log "number of cats or dogs is not acceptable":', result2);

var result3 = balancePets(7, 7);
console.log('should log "number of cats or dogs is not acceptable":', result3);

var result4 = balancePets(5, 14);
console.log('should log "number of cats or dogs is not acceptable":', result4);

//----------------------------------------------------------------------------------------------------

//IF ELSE statement with a string
function passwordLongEnough(password) {
    // if password length is greater than 8
      // return 'Password is long enough'
    // otherwise
      // return 'Please enter a password of at least 9 characters'
      if (password.length > 8){
          return 'Password is long enough';
      }
      else{
          return 'Please enter a password of at least 9 characters'
      }
  }
//test cases:
var result1 = passwordLongEnough('passafassaword');
console.log('should log "Password is long enough":', result1);

var result2 = passwordLongEnough('wordpass');
console.log('Should log "Please enter a password of at least 9 characters":', result2);

//----------------------------------------------------------------------------------------------------

//IF ELSE statement with an array:
function findIngredient(ingredientList, ingredientToSearchFor) {
    // if ingredientToSearchFor is present within ingredientList
      // return '{ingredientToSearchFor} is on the list'
    // otherwise
      // return '{ingredientToSearchFor} is not on the list'
      if (ingredientList.indexOf(ingredientToSearchFor) > - 1){
          return ingredientToSearchFor + ' is on the list';
      }
      else{
          return ingredientToSearchFor + ' is not on the list';
      }
  }
//test cases:
var result1 = findIngredient(['flour', 'butter', 'sugar', 'eggs'], 'sugar');
console.log('should log "sugar is on the list":', result1);

var result2 = findIngredient(['milk', 'cereal', 'fruit'], 'pop-tarts');
console.log('should log "pop-tarts is not on the list":', result2);

//----------------------------------------------------------------------------------------------------

//IF ELSE statement with an object:
function measureRequiredFruit(fruitTotals) {
    // if there are more than 3 bananas and more than 10 strawberries
      // return 'We have enough fruit, with {totalBananas} bananas, and {totalStrawberries} strawberries'
    // otherwise
      // return 'We do not have enough of both fruits'
      var totalBananas = fruitTotals.bananas;
      var totalStrawberries = fruitTotals.strawberries;
      if (totalBananas > 3 && totalStrawberries > 10){
        return 'We have enough fruit, with ' + totalBananas + ' bananas, and ' + totalStrawberries + ' strawberries';
      }
      else{
        return 'We do not have enough of both fruits';
      }
  }
//test cases:
var result1 = measureRequiredFruit({bananas: 4, strawberries: 12});
console.log('should log "We have enough fruit, with 4 bananas, and 12 strawberries":', result1);

var result2 = measureRequiredFruit({bananas: 5, strawberries: 15});
console.log('should log "We have enough fruit, with 5 bananas, and 15 strawberries":', result2);

var result3 = measureRequiredFruit({bananas: 2, strawberries: 12});
console.log('should log "We do not have enough of both fruits":', result3);

var result4 = measureRequiredFruit({bananas: 5, strawberries: 8});
console.log('should log "We do not have enough of both fruits":', result4);

var result5 = measureRequiredFruit({bananas: 3, strawberries: 9});
console.log('should log "We do not have enough of both fruits":', result5);

