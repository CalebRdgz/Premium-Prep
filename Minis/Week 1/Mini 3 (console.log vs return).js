var itLogs = function(value){
    console.log(value); //-> does not happen if return is first
    return undefined;
}

var itReturns = function(value){
    return value;
}
//console.log is just for our eyes to see, return can actually manipulate other code
//Any code after the return does not happen. Return is the last thing a function does

//itLogs('Mario');
//itReturns('Mario');

//var myReturn = itReturns('Mario');
//console.log(myReturn); -> logs Mario

// var myLog = itLogs('Mario');
// console.log(myLog); -> logs Mario

// console.log(myReturn.length);
// console.log(myLog.length); -> logs 5

// var myReturnM = itReturns('Mario')[0];
// console.log('myReturnM: ' + myReturnM); -> logs myReturnM: M