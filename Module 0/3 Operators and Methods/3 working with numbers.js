//Addition(+):
var sum = 3 + 4;
console.log("sum:", sum); //logs sum: 7

var numberOfApples = 3;
var numberOfBananas = 4;
var totalFruit = numberOfApples + numberOfBananas;
console.log('totalFruit:', totalFruit); //logs totalFruit: 7

//challenge:
function getSum(num1, num2) {
    var result  = num1 + num2;
    return result;
  }
//test case:
var resultSum = getSum(4, 10);
console.log('should be 14:', resultSum);

//----------------------------------------------------------------------------------------------------

//Subtraction(-):
var difference = 12 - 4;
console.log('difference:', difference); //logs difference: 8

var numberOfApplesInitially = 12;
var numberOfApplesSold = 4;
var numberOfApplesRemaining = numberOfApplesInitially - numberOfApplesSold;
console.log('numberOfApplesRemaining:', numberOfApplesRemaining); //logs numberOfApplesRemaining: 8

//challenge:
function getDifference(num1, num2) {
    var result = num1 - num2;
    return result;
  }
//test case:
var resultDiff = getDifference(37, 19);
console.log('should be 18:', resultDiff);

//----------------------------------------------------------------------------------------------------

//Multiplication(*):
var product = 7 * 4;
console.log('product:', product); //logs product: 28

var numberOfStores = 7;
var numberOfEmployeesPerStore = 4;
var numberOfTotalEmployees = numberOfStores * numberOfEmployeesPerStore; //numberOfTotalEmployees = 7 * 4 = 28
console.log('numberOfTotalEmployees:', numberOfTotalEmployees); //logs numberOfTotalEmployees: 28

//challenge:
function getProduct(num1, num2) {
    var result = num1 * num2;
    return result;
  }
//test case:
var resultProduct = getProduct(9, 4);
console.log('should be 36:', resultProduct);

//----------------------------------------------------------------------------------------------------

//Division(/):
var quotient = 24 / 6;
console.log('quotient:', quotient); //24 / 6 = 4

var slicesOfPizza = 24;
var numberOfPeople = 6;
var slicesPerPerson = slicesOfPizza / numberOfPeople;
console.log('slicesPerPerson:', slicesPerPerson); //logs slicesPerPerson: 4

//challenge:
function getQuotient(num1, num2) {
    var result = num1 / num2;
    return result;
  }
//test case:
var resultQuotient = getQuotient(20, 4);
console.log('should be 5:', resultQuotient);

//----------------------------------------------------------------------------------------------------

//Exponent(**):
//raise one number to the power of another number
var power = 2 ** 5;
console.log('power:', power); //logs power: 32

var choicesPerCategory = 2;
var numberOfCategories = 5;
var totalNumberOfChoices = choicesPerCategory ** numberOfCategories;
console.log('totalNumberOfChoices:', totalNumberOfChoices); //logs totalNumberOfChoices: 32

//challenge:
function getPower(num1, num2) {
    var result = num1 ** num2;
    return result;
  }
//test case:
var resultPower = getPower(3, 4);
console.log('should be 81:', resultPower);

//----------------------------------------------------------------------------------------------------

//Modulo(%):
//wanting the remainder after dividing one number by another number
var remainder = 11 % 2;
console.log('remainder:', remainder); //logs remainder: 1

var numberOfSocks = 11;
var numberOfSocksPerPerson = 2;
var numberOfSocksRemaining = numberOfSocks % numberOfSocksPerPerson;
console.log('numberOfSocksRemaining:', numberOfSocksRemaining); //logs numberOfSocksRemaining: 1

//challenge:
function getRemainder(num1, num2) {
    var result = num1 % num2;
    return result;
  }
//test case:
var resultRemainder = getRemainder(21, 6);
console.log('should be 3:', resultRemainder);

//----------------------------------------------------------------------------------------------------

//Plus-equals ( += ):
//increment a variable's value
var increment = 11;
increment += 2; //increment = increment + 2
console.log('increment:', increment); //logs increment: 13

var totalUnitsOfCargo = 11;
var additionalUnits = 2;
totalUnitsOfCargo += additionalUnits; // totalUnitsOfCargo = totalUnitsOfCargo + additionalUnits
console.log('totalUnitsOfCargo:', totalUnitsOfCargo); //logs totalUnitsOfCargo: 13

//challenge:
function increment(base, incrementer) {
    base += incrementer;
    return base;
  }
//test case:
var resultIncremented = increment(11, 5);
console.log('should be 16:', resultIncremented);

//----------------------------------------------------------------------------------------------------

//Minus-equals ( -= ):
//decrement a variable's value
var decrement = 13;
decrement -= 3;
console.log('decrement:', decrement);

var totalUnitsAvailable = 13;
var unitsSold = 3;
totalUnitsAvailable -= unitsSold;
// totalUnitsAvailable = totalUnitsAvailable - unitsSold
console.log('totalUnitsAvailable:', totalUnitsAvailable);

//challenge:
function decrement(base, decrementer) {
    base -= decrementer;
    return base;
  }
//test case:
var resultDecremented = decrement(17, 5);
console.log('should be 12:', resultDecremented);

//----------------------------------------------------------------------------------------------------

//Times-equals ( *= ):
//multiply a variable's value by another, and reassign the first variable to the result of said operation
var result = 10;
result *= 4;
console.log('result:', result);

var currentProduct = 10;
var multiplier = 4;
currentProduct *= multiplier;
// currentProduct = currentProduct * multiplier
console.log('currentProduct:', currentProduct);

//challenge:
function applyTimesEquals(base, multiplier) {
    base *= multiplier;
    return base;
  }
//test case:
var resultMultiplied = applyTimesEquals(3, 5);
console.log('should be 15:', resultMultiplied);

//----------------------------------------------------------------------------------------------------

//Divide-equals ( /= ):
//divide a variable's value by another, and reassign the first variable to the result of said operation
var result = 55;
result /= 5;
console.log('result:', result);

var currentQuotient = 55;
var divider = 5;
currentQuotient /= divider; //currentQuotient = currentQuotient / divider
console.log('currentQuotient:', currentQuotient);

//challenge:
function applyDivideEquals(base, divider) {
    base /= divider;
    return base;
  }
//test case:
var resultDivided = applyDivideEquals(56, 7);
console.log('should be 8:', resultDivided);

//----------------------------------------------------------------------------------------------------

//Absolute Value:
//wanting to get the absolute value of a number, when you dont care for negative or positive number

//We can do so using the Math.abs() method:
var original = -295;
console.log('absolute value applied:', Math.abs(original)); //logs absolute value applied: 295

var position1 = 5;
var position2 = 300;
var difference = position1 - position2;
var magnitudeDifference = Math.abs(difference)
console.log('magnitudeDifference:', magnitudeDifference); //logs magnitudeDifference: 295

//challenge:
function getAbsoluteValue(num) {
    var result = Math.abs(num);
    return result;
  }
//test cases:
var result1 = getAbsoluteValue(-56);
console.log('should be 56:', result1);

var result2 = getAbsoluteValue(127);
console.log('should be 127:', result2);

//----------------------------------------------------------------------------------------------------

//Rounding Up and Rounding Down:
//wanting to round a number either up or down

//We can do so using the Math.ceil() (up), and the Math.floor() (down) methods:
var original = 33.7;

console.log('rounded up:', Math.ceil(original));
console.log('rounded down:', Math.floor(original));

//We can also do this with variables whose values are numbers:
var score = 89.4;
var gradeFromATeacherWhoGetsIt = Math.ceil(score); //Math.ceil(89.4) = 90
var gradeFromAMonsterInTeachersClothes = Math.floor(score); //Math.floor(89.4) = 89

console.log('gradeFromATeacherWhoGetsIt:', gradeFromATeacherWhoGetsIt);
console.log('gradeFromAMonsterInTeachersClothes:', gradeFromAMonsterInTeachersClothes);

//challenges:
function roundDown(num) {
    var result = Math.floor(num);
    return result;
  }
function roundUp(num) {
  var result = Math.ceil(num);
  return result;
}
//test cases:
var roundedDown = roundDown(6.8);
console.log('should be 6:', roundedDown);

var roundedUp = roundUp(16.8);
console.log('should be 17:', roundedUp);

//----------------------------------------------------------------------------------------------------

//Parsing an Integer or a Float from a String:
//Let us consider the case of wanting to take a string version of a number, and get an actual number
//We will examine two cases, wanting to "parse" an integer, and:
//Wanting to parse a float (decimal)

//We can do so using the Number.parseInt(), and the Number.parseFloat() methods:
var parsedInteger = Number.parseInt("49");
console.log('parsedInteger:', parsedInteger); //logs parsedInteger: 49 (49 is now an integer instead of a string)

var parsedFloat = Number.parseFloat("29.45")
console.log('parsedFloat:', parsedFloat); //logs parsedFloat: 29.45 (29.45 is now a float instead of a string)

//We can also do this with variables whose values are string versions of numbers:
var userIdString = "49";
var parsedUserId = Number.parseInt(userIdString);
console.log("parsedUserId:", parsedUserId);

var userRatingString = "29.45";
var parsedUserRating = Number.parseFloat(userRatingString)
console.log('parsedUserRating:', parsedUserRating);

//challenge:
function applyParseInt(numString) {
    // create a result variable
    // assign it to parsed integer from input string
    var result = Number.parseFloat(numString);
    return result;
    // return result
  }
//test case:
var parsedInteger = applyParseInt("23");
console.log('should be 23:', parsedInteger); //logs should be 23: 23

//----------------------------------------------------------------------------------------------------

//Generate a Random Number:
//Let us consider the case of wanting to generate a random number
//We can do so using the Math.random() method
//Math.random() will generate a number between 0 and 1
//The number generated can be 0, but will not be 1
//A little more work is required to get a random number between two specific values

// generate a random number between 0 and 1
console.log('random number between 0 and 1:', Math.random()); //could be 0, can never be 1

// generate a random number between 1 and 10
var randomBetween1And10 = Math.random() * (10 - 1) + 1;
console.log('randomBetween1And10:', randomBetween1And10);

//We can also do this with variables whose values are numbers:
var min = 90;
var max = 100;
var randomBetweenMinAndMax = Math.random() * (max - min) + min;
console.log("randomBetweenMinAndMax:", randomBetweenMinAndMax);

//challenge:
function generateRandomNumber(min, max) {
    // create a result variable
    // assign it to formula for random number between min and max
    var result = Math.random() * (max - min);
    return result;
    // return result
  }
//test case:
var randomNumber = generateRandomNumber(1, 10);
console.log('should be between 1 and 10:', randomNumber);

//----------------------------------------------------------------------------------------------------

//Greater than ( > ) and Greater than or equal to ( >= )
//Let us consider the case of wanting to tell if one number value is greater than another number value
//We can do so using the > operator
//Let us consider at the same time, the case of wanting to tell if one number value is greater than or equal to another number value

//We can do so using the >= operator
var exclusiveLowerBound = 7;
console.log('actual is greater than exclusive lower bound:', 9 > exclusiveLowerBound);

var inclusiveLowerBound = 5;
console.log('actual is greater than or equal to inclusive lower bound:', 5 >= inclusiveLowerBound);

//We can also do this with variables whose values are numbers:
var numberOfEnvelopesPurchased = 430;
var numberOfEnvelopesNeeded = 350;
var acquiredSufficientEnvelopes = numberOfEnvelopesPurchased >= numberOfEnvelopesNeeded;
console.log("acquiredSufficientEnvelopes:", acquiredSufficientEnvelopes);

//challenges:
function applyGreaterThan(num1, num2) {
  // create a result variable
  // assign it expression comparing if num1 is greater than num2
  var result = num1 > num2;
  return result;
  // return result
}
//test cases:
var trueGreaterThanResult = applyGreaterThan(101, 10);
console.log('should be true:', trueGreaterThanResult);

var falseGreaterThanResult = applyGreaterThan(-13, 2);
console.log('should be false:', falseGreaterThanResult);

//----------------------------------------------------------------------------------------------------

//Less than ( < ) and Less than or equal to ( <= )
//Let us consider the case of wanting to tell if one number value is less than another number value
//We can do so using the < operator
//Let us consider at the same time, the case of wanting to tell if one number value is less than or equal to another number value

//We can do so using the <= operator
var exclusiveUpperBound = 17;
console.log('actual is less than exclusive upper bound:', 9 < exclusiveUpperBound);

var inclusiveUpperBound = 51;
console.log('actual is less than or equal to inclusive upper bound:', 51 <= inclusiveUpperBound);

//We can also do this with variables whose values are numbers:
var fuelNeeded = 27;
var fuelCapacity = 30;
var canMakeTripWithoutStopping = fuelNeeded <= fuelCapacity;
console.log("canMakeTripWithoutStopping:", canMakeTripWithoutStopping);

//challenge:
function applyLessThanOrEqualTo(num1, num2) {
  // create a result variable
  // assign it expression comparing if num1 is less than or equal num2
  var result = num1 <= num2;
  return result;
  // return result
}
//test cases:
var trueLessThanOrEqualToResult = applyLessThanOrEqualTo(11, 110);
console.log('should be true:', trueLessThanOrEqualToResult);

var falseLessThanOrEqualToResult = applyLessThanOrEqualTo(-13, -21);
console.log('should be false:', falseLessThanOrEqualToResult);