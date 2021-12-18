//countCharacter
//Write a function called "countCharacter".
//Given a string input and a character, "countCharacter" returns 
//the number of occurrences of a given character in the given string.
//*DID THIS FIRST TRY LETS GOOO!*
function countCharacter(str, char) { 
    // your code here  
    var count = 0;
    for (i = 0; i < str.length; i++){
        if (str[i] === char){
            count++
        }else{
            continue;
        }
    }
    return count;
  } 

//test cases:
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3