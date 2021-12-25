var countries = {
    'unitedStates': 'a',
    'unitedKingdom': 'b',
    'unitedArabEmirates': 'c'
}

var name = 'unitedKingdom';
console.log(countries[name]); //logs 'b'

var unitedKingdom = 'unitedStates';
console.log(countries[unitedKingdom]); //logs 'a'

//Dot Notation:
//use an identifier to access its properties
    //identifier is the literal key in your object
    //identifier is not a data-type, so it cannot be manipulated in JS, the key cannot be a variable

var countries = {
    'unitedStates': 'a',
    'unitedKingdom': 'b',
    'unitedArabEmirates': 'c'
}

console.log(countries.unitedArabEmirates); //logs 'c'

//Bracket Notation flexibility over Dot notation
//Bracket notation accepts expressions which have to evaluate to a string.
    //Strings are JavaScript data-types, so they can be mainpulated and created while program is running

var countries = {
    'unitedStates': 'a',
    'unitedKingdom': 'b',
    'unitedArabEmirates': 'c'
}

var x = 'united';
console.log(countries[x+'Kingdom']); //logs 'b' because countries[x+'Kingdom'] concats 'united' and 'Kingdom' = unitedKingdom key in countries object

var movies = {
    '50firstDates': true,
    'happy gilmore': true,
    'jack&jill': false
}

//console.log(movies.50firstDates); <- doesnt work because dot notation cannot use numbers
//console.log(movies.jack&jill); <- doesnt work because dot notation cant use symbols
//console.log(movies.'happy gilmore'); <- doesnt work because dot notation cannot use string, has to be literal key

//console.log(movies[50firstDates]) <- doesnt work because it has number, space, or symbol: PUT IT IN QUOTES TO MAKE IT WORK
console.log(movies['50firstDates']); //logs true

var countries = {
    'unitedStates': 'a',
    //'unitedKingdom': 'b',
    'unitedStates': 'c'
}
console.log(countries.unitedStates); //logs c because the unitedStates key is reassigned at the end of the countries object^ (if there are two of the same key, the last one will be logged because it is reassigned)

//should i even use dot notation?
//NO
//think of dot notation as a shorthand for bracket notation
    //use when you already know the properties of the object
    //Dot notation is just much clearer to read, so when you can use it - use it!

//accessing elements in arrays:
var phones = ['Apple iPhone', 'Samsung Galaxy', 'Google Pixel'];
console.log(phones[0]); //logs 'Apple iPhone'
console.log(phones[1]); //logs 'Samsung Galaxy'

//Recap:
//Defined syntax for property access using both dot and bracket notation
    //object.identifier and object.[expression]

//Identified the flexibility of bracket notation over dot notation

//compared when to use dot notation vs bracket notation

//Determined which suntax to use when accessing elements within an array