//What is an IF statement?
//A conditional that allows your program to do something, if some condition is true
//Consider case (1) from the introduction:
//If it is raining, you should wear a raincoat.
//Or, in pseudocode:

// if it is raining
  // you should wear a raincoat
//Armed with an if statement, this is easily translatable into code:

var isRaining = true;

if (isRaining === true) {
  console.log("you should wear a raincoat");
}

//Or, more generally speaking:

//if (/*some expression which evaluates to true or false*/) {

  /*some action to be taken in the event
  that the expression above evaluates to true*/

//}

//----------------------------------------------------------------------------------------------------

//IF statement Examples
//if statement with undefined
var declared;

if (declared === undefined) {
  console.log('declared is undefined');
}
//if statement with numbers
var apples = 6;
var oranges = 7;

if (apples < oranges) {
  console.log('There are fewer apples than oranges');
}

//if statement with a string
var password = 'password123';

if (password.length < 15 && password.length > 4) {
  console.log('password is of appropriate length');
}

//if statement with an array
var agentList = ['001', '005', '007', '009'];
var agentInQuestion = '007'

if (agentList.indexOf(agentInQuestion) > -1) {
  console.log(agentInQuestion + ' found in agent list');
}

//if statement with an object
var reportTotals = {a_team: 12, b_team: 7, c_team: 0};

if (reportTotals['b_team'] > 5) {
  console.log('b_team has surpassed goal with ' + reportTotals['b_team'] + ' reports');
}

//----------------------------------------------------------------------------------------------------

//if statement coding challenges:
//IF statement with undefined:
function isItUndefined(param) {
    // if param is defined (or not undefined)
    // return 'Input is defined'
    if (param !== undefined){
        return "Input is defined";
    }
  }
//test cases:
var result1 = isItUndefined('anything');
console.log('should log "Input is defined":', result1);

//----------------------------------------------------------------------------------------------------

//IF statement with numbers:
var result2 = isItUndefined();
console.log('Should log undefined, because function returned nothing:', result2);

function fewerApples(apples, oranges) {
    // if there are fewer apples than oranges
    // return 'There are fewer apples than oranges'
    if (apples < oranges){
        return 'There are fewer apples than oranges';
    }
  }
//test cases:
var result1 = fewerApples(4, 7);
console.log('should log "There are fewer apples than oranges":', result1);

var result2 = fewerApples(19, 12);
console.log('Should log undefined, because function returned nothing:', result2);

//----------------------------------------------------------------------------------------------------

//IF statement with a string:
function validLengthPassword(password) {
    // if password length is greater than 4 and less than 15
    // return 'Password length is valid'
    if (password.length > 4 && password.length < 15){
        return 'Password length is valid';
    }
  }
//test cases:
var result1 = validLengthPassword('passwordyfurdy');
console.log('should log "Password length is valid":', result1);

var result2 = validLengthPassword('pass');
console.log('Should log undefined, because function returned nothing:', result2);

var result3 = validLengthPassword('this is clearly too long of a password');
console.log('Should log undefined, because function returned nothing:', result3);

//----------------------------------------------------------------------------------------------------

//IF statement with an array:
function findAgent(agentList, agentToSearchFor) {
    // if agentToSearchFor is present within agentList
      // return '{agentToSearchFor} is present within Agent list'
      if (agentList.indexOf(agentToSearchFor) > -1){
          return agentToSearchFor + ' is present within Agent list';
      }
  }
//test cases:
var result1 = findAgent(['001', '005', '007', '009'], '007');
console.log('should log "007 is present within Agent list":', result1);

var result2 = findAgent(['tiny', 'teeny', 'eeny', 'meany'], 'teeny');
console.log('should log "teeny is present within Agent list":', result2);

var result3 = findAgent(['red', 'blue', 'green'], 'orange');
console.log('Should log undefined, because function returned nothing:', result3);

//----------------------------------------------------------------------------------------------------

//IF statement with an object:
function generateReportSummary(reportTotals, teamName) {
    // if teamName's report total is greater than 5
    // return '{teamName} has surpassed goal with {number_of_reports_for_team} reports'
    var teamTotal = reportTotals[teamName];
    if (teamTotal > 5){
        return teamName + ' has surpassed goal with ' + teamTotal + ' reports';
    }
  }
//test cases:
var result1 = generateReportSummary({a_team: 12, b_team: 7, c_team: 0}, 'b_team');
console.log('should log "b_team has surpassed goal with 7 reports":', result1);

var result2 = generateReportSummary({blue: 18, red: 8, green: 12}, 'blue');
console.log('should log "blue has surpassed goal with 18 reports":', result2);

var result3 = generateReportSummary({gamma: 1, epsilon: 3, alpha: 4, bravo: 17}, 'alpha');
console.log('Should log undefined, because function returned nothing:', result3);
