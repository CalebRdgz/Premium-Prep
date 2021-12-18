// Exercise 1 (booleans and conditionals)
// Write a function wasItFunny which takes in a boolean argument (input value), and returns "meh" if the input was 
//false, and "HAHAHA" if the input was true.

//implement the function described above, here
function wasItFunny(boolean){
    if (boolean === false){
        return 'meh'
    }else{
        return 'HAHAHA';
    }
}

// Calling your function should result in:
wasItFunny(true); //"HAHAHA"
wasItFunny(false); //"meh"

// Exercise 2 (strings and conditionals)
// Write a function isWordLong which takes in a string argument (input value), and returns 
//true if the string is longer than 15 characters, and false if the string is less than or equal 
//to 15 characters. You can assume that the input string will only contain letters.

//implement the function described above, here
function isWordLong(string){
    if (string.length > 15){
        return true;
    }else{
        return false;
    }
}

// Calling your function should result in:
isWordLong('absentmindedness'); //true
isWordLong('aerodynamics'); //false

// Exercise 3 (numbers)
// Write a function addFourNums which takes in four number arguments (input values) and 
//returns the value of the numbers added to each other

//implement the function described above, here
function addFourNums(number1,number2,number3,number4){
    return number1+number2+number3+number4;
}

// Calling your function should result in:
addFourNums(10, 20, 30, 40); //100

// Exercise 4 (arrays)
// Write a function addOnlyFirstFourNums which takes in an array argument (input value) 
//and returns the value of only the first four numbers added to each other. You can assume 
//that the input array will always have at least 4 numbers, and will only have number values.

//implement the function described above, here
function addOnlyFirstFourNums(array){
    var result = array[0] + array[1] + array[2] + array[3];
    return result;
}

// Calling your function should result in:
addOnlyFirstFourNums([40, 600, 8000, 2, 19, 25, 60, 90]); //8642

// Exercise 5 (numbers)
// Write a function convertInchesToCentimeters which takes in a number argument 
//(input value), inches, and returns the calculation of that number multiplied by precisely 
//2.54*. Do not worry about formatting your output to round to the nearest 2nd decimal number.

//implement the function described above, here
function convertInchesToCentimeters(number){
    var inches = number*2.54;
    return inches;
}

// Calling your function should result in:
convertInchesToCentimeters(120); //304.8
// * - Why 2.54? This is the standard calculation of inches to centimeters -- 1 inch == 2.54 centimeters .

// Exercise 6 (objects)
// Write a function myFavoriteSong which takes in no arguments (input values), but returns an 
//object with the properties title, artist, and durationInSeconds. The values of each property 
//is up to you, and you can explicitly type out these values, but these three properties should 
//exist within the object your function returns.
//implement the function described above, here
function myFavoriteSong(){
    var obj = {
        title: 'Title',
        artist: 'Caleb',
        durationInSeconds: 60
    }
    return obj;
}

// Calling your function should result in something like:
myFavoriteSong(); //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212}

// Exercise 7 (objects and conditionals)
// Write a function isItExpensive which takes in an object argument (input value). You can 
//assume this object always has a price property. Your function should behave as follows: it 
//should check the value of price.

// If that value is less than 100, return false.
// If the value is greater than or equal to 100, return true.
// However, if the value is null, return the string "no data".
//implement the function described above, here
function isItExpensive(obj){
    if (obj.price === null){
        return 'no data';
    }
    if (obj.price < 100){
        return false;
    }
    if (obj.price >= 100){
        return true;
    }
}

// Calling your function should result in something like:
var appleWatch = {price: 400}
var applesAndWatches = {price: 30}
var watchingApples = {price: null}

isItExpensive(appleWatch); //true
isItExpensive(applesAndWatches); //false
isItExpensive(watchingApples); //"no data"

// Exercise 8 (strings and parameters)
// Write a function introduceMe which takes in 2 arguments (input values): a string and a 
//number. The function should return a string excitedly saying your name and how many pets 
//you currently have.
//implement the function described above, here
function introduceMe (string, number){
    return "Hi I am " + string + " and I have " + number + " pet(s)";
}

// Calling your function should result in something like:
introduceMe("Alex", 2); //"Hi I am Alex and I have 2 pet(s)"
introduceMe("Sam", 0); //"Hi I am Sam and I have 0 pet(s)"

// Exercise 9 (arrays and strings)
// Write a function nextTwoBusTimes which takes in an array of numbers representing (in minutes) 
//when the busses come for the day. Your function should return a string which denotes when the 
//nearest bus arrives, and the one after that.
//implement the function described above, here
function nextTwoBusTimes(array){
    return 'The next 2 busses arrive in ' + array[0] + ' and ' + array[1] + ' minutes.';
}

// Calling your function should result in something like:
var bus10Schedule = [12, 24, 35, 47, 60];
nextTwoBusTimes(bus10Schedule); //"The next 2 busses arrive in 12 and 24 minutes."

// Exercise 10 (arrays and strings)
// Write a function nextAndLastBusTimes which takes in an array of numbers representing (in minutes)
// when the busses come for the day. Your function should return a string which denotes when the 
//nearest bus arrives, and the last for the day.
//implement the function described above, here
function nextAndLastBusTimes (array){
    return "The next bus is in " + array[0] + ' minutes. The last bus is in ' + array.pop() + " minutes.";
}

// Calling your function should result in something like:
var bus10Schedule = [12, 24, 35, 47, 60];
nextAndLastBusTimes(bus10Schedule); //"The next bus is in 12 minutes. The last bus is in 60 minutes."
