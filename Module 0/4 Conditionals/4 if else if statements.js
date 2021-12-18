//What is an IF ELSE IF statement?
//A conditional that allows your program to do something, if some condition(1) is true, and do something else, if that same condition(1) is false and another condition(2) is true, and lastly, to do a third action if both condition(1) and condition(2) are both false
//Consider case (3) from the introduction:
//If Denny's is open, we will dine there, otherwise, if IHop is open,
//we will dine there, and finally, if neither diner is open,
//we will make pancakes at home.
//Or, in pseudocode:

// if Denny's is open
  // we will dine at denny's
// otherwise if IHop is open
  // we will dine at IHop
// otherwise
  // we will make pancakes at home
//Armed with an if else if statement, this is easily translatable into code:

// change to false to see 'else if' option
var dennysIsOpen = true;
// change both to false to see 'else' option
var iHopIsOpen = true;

if (dennysIsOpen) {
  console.log('We will dine at Denny\'s');
} else if (iHopIsOpen) {
  console.log('We will dine at IHop');
} else {
  console.log('We will make pancakes at home');
}
//Or, more generally speaking:

//if (/*some expression which evaluates to true or false*/) {

  /*some action to be taken in the event
  that the expression above evaluates to true*/

//} else if (/*some other expression which evaluates to true or false*/) {

  /*some action to be taken in the event
  that the first expressions evaluates to false
  and the second expression above evaluates to true*/

//} else {

  /*some action to be taken in the event
  that the first expressions evaluates to false
  and the second expression above evaluates to false*/

//}

//----------------------------------------------------------------------------------------------------

//IF ELSE IF statement Examples
//Guessing rock/paper/scissors choice
// change to 'paper' or 'scissors' to see other choices:
var choice = 'rock';

if (choice === 'rock') {
  console.log('Player 1 chose ' + choice);
} else if (choice === 'paper') {
  console.log('Player 1 chose ' + choice);
} else if (choice === 'scissors') {
  console.log('Player 1 chose ' + choice);
} else {
  console.log('Player 1 has chosen poorly!');
}

//Finding the right size T-Shirt:
var shirtWidth = 25;

if (shirtWidth >= 20 && shirtWidth < 30) {
  console.log('You should select a size S');
} else if (shirtWidth >= 30 && shirtWidth < 40) {
  console.log('You should select a size M');
} else if (shirtWidth >= 40 && shirtWidth < 50) {
  console.log('You should select a size L');
} else {
  console.log('You should select a different shirt');
}

//Deciding what you need for a recipe:
var recipeMinimums = {
  tomatoes: 3,
  onions: 7
};


var stockTomatoes = 5;
var stockOnions = 8;

var excessTomatoes = stockTomatoes - recipeMinimums.tomatoes;
var excessOnions = stockOnions - recipeMinimums.onions;

if (stockTomatoes < recipeMinimums.tomatoes && stockOnions < recipeMinimums.onions) {
  console.log('We need more tomatoes and more onions.');
} else if (stockTomatoes < recipeMinimums.tomatoes && stockOnions >= recipeMinimums.onions) {
  console.log('We need more tomatoes, but have enough onions.');
} else if (stockTomatoes >= recipeMinimums.tomatoes && stockOnions < recipeMinimums.onions) {
  console.log('We have enough tomatoes, but need more onions.');
} else {
  console.log('We have enough tomatoes and onions. There will be ' + excessTomatoes + ' extra tomato, and ' + excessOnions + ' extra onion.');
}

//----------------------------------------------------------------------------------------------------

//IF ELSE IF statement (1):
function player1Choice(choice) {
    // if player1 chose rock
      // return "Player 1 chose rock"
    // otherwise if player1 chose paper
      // return "Player 1 chose paper"
    // otherwise if player1 chose scissors
      // return "Player 1 chose scissors"
    // otherwise
      // return "Player 1 has chosen poorly!"
    if (choice === 'rock'){
        return 'Player 1 chose ' + choice;
    }
    else if (choice === 'paper'){
        return 'Player 1 chose ' + choice;
    }
    else if (choice === 'scissors'){
        return 'Player 1 chose ' + choice;
    }
    else{
        return 'Player 1 has chosen poorly!';
    }
  }
//test cases:
var result1 = player1Choice('rock');
console.log('should log "Player 1 chose rock":', result1);

var result2 = player1Choice('paper');
console.log('should log "Player 1 chose paper":', result2);

var result3 = player1Choice('scissors');
console.log('should log "Player 1 chose scissors":', result3);

var result4 = player1Choice('gun');
console.log('should log "Player 1 has chosen poorly!":', result4);

//----------------------------------------------------------------------------------------------------

//IF ELSE IF statement (2):
function selectShirtSize(choice) {
    // if shirt is greater than or equal 20 and less than 30
      // return 'You should select a size S'
    // otherwise if shirt is greater than or equal to 30 and less than 40
      // return 'You should select a size M'
    // otherwise if shirt is greater than or equal to 40 and less than 50
      // return 'You should select a size L'
    // otherwise
      // return 'You should select a different shirt'
    if (choice >= 20 && choice < 30){
        return 'You should select a size S';
    }else if (choice >= 30 && choice < 40){
        return 'You should select a size M';
    }else if (choice >= 40 && choice < 50){
        return 'You should select a size L';
    }else{
        return 'You should select a different shirt';
    }
  }
//test cases:
var result1 = selectShirtSize(25);
console.log('should log "You should select a size S":', result1);

var result2 = selectShirtSize(32);
console.log('should log "You should select a size M":', result2);

var result3 = selectShirtSize(47);
console.log('should log "You should select a size L":', result3);

var result4 = selectShirtSize(12);
console.log('should log "You should select a different shirt":', result4);

var result5 = selectShirtSize(67);
console.log('should log "You should select a different shirt":', result5);

//----------------------------------------------------------------------------------------------------

//IF ELSE IF statement (3):
function verifyStock(recipeMinimums, stockTomatoes, stockOnions) {
    // if stock of tomatoes and stock of onions are both less than minimum
    // return 'We need more tomatoes and more onions.'
    // otherwise if stock of tomatoes is less than minimum but stock of onions is sufficient
    // return 'We have enough onions, but need more tomatoes.'
    // otherwise if stock of tomatoes is sufficient but stock of onions is less than minimum
    // return 'We have enough tomatoes, but need more onions.'
    // otherwise
    // return 'We have enough tomatoes and onions. There will be {excessTomatoes} extra tomato, and {excessOnions} extra onion.'
    var excessTomatoes = stockTomatoes - recipeMinimums.tomatoes;
    var excessOnions = stockOnions - recipeMinimums.onions;
    if ((excessTomatoes < 0) && (excessOnions < 0)){

        return 'We need more tomatoes and more onions.';

    }else if((excessTomatoes < 0) && (excessOnions >= 0)){

        return 'We have enough onions, but need more tomatoes.';

    }else if((excessTomatoes >= 0) && (excessOnions < 0)){

        return 'We have enough tomatoes, but need more onions.';

    }else{

        return 'We have enough tomatoes and onions. There will be ' + excessTomatoes + ' extra tomato, and ' + excessOnions + ' extra onion.';

    }
}
//test cases:
var result1 = verifyStock({tomatoes: 3, onions: 7}, 5, 8);
console.log('should log "We have enough tomatoes and onions. There will be 2 extra tomato, and 1 extra onion.":', result1);

var result2 = verifyStock({tomatoes: 5, onions: 1}, 10, 4);
console.log('should log "We have enough tomatoes and onions. There will be 5 extra tomato, and 3 extra onion.":', result2);

var result3 = verifyStock({tomatoes: 2, onions: 4}, 1, 1);
console.log('should log "We need more tomatoes and more onions.":', result3);

var result4 = verifyStock({tomatoes: 4, onions: 2}, 3, 4);
console.log('should log "We have enough onions, but need more tomatoes.":', result4);

var result5 = verifyStock({tomatoes: 10, onions: 6}, 11, 4);
console.log('should log "We have enough tomatoes, but need more onions.":', result5);

//----------------------------------------------------------------------------------------------------

//Convert Score To Grade:
//Write a function called "convertScoreToGrade".

//Given a score, "convertScoreToGrade" returns a string representing the letter grade corresponding to the given score.

//Notes:

//(100 - 90) --> 'A'
//(89 - 80) --> 'B'
//(79 - 70) --> 'C'
//(69 - 60) --> 'D'
//(59 - 0) --> 'F'
//If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.

function convertScoreToGrade(score) {
    // your code here
    if (score >= 90 && score <= 100){
        return 'A';
    }else if(score >= 80 && score <= 89){
        return 'B';
    }else if(score >= 70 && score <= 79){
        return 'C';

    }else if(score >= 60 && score <= 69){
        return 'D';

    }else if(score >= 0 && score <= 59){
        return 'F';

    }else{
        return 'INVALID SCORE';
    }
}
//test cases:
var output = convertScoreToGrade(91);
console.log(output); // --> 'A'