//Where to write my code (global vs. local variables, and scope)
//Here is a practical piece of instruction regarding nearly every function you will complete during this course:

// Code here is considered "global", not usually recommended
var Global_Variable = 'I am a global variable';

function THIS_IS_THE_FUNCTION_WE_ASKED_YOU_TO_WRTIE(input_of_some_kind) {

  // variables created inside of a function are called local
  var localVariable = "I am a local variable";

  // I CAN ALSO MAKE USE OF THE PARAMETER(S) OF THE FUNCTION IF ANY
  // I can also make use of the parameter(s) of the function, if any
  input_of_some_kind; // <= THIS IS THE PARAMETER OF THIS FUNCTION
  for (var i = 1; i < 6; i++) {
    // variables created here are created anew each iteration
    var newlyCreatedEachIteration = 0;
  }
  // this statement ends the function
  return localVariable;
  // code below this statement will not run
}

// For now, there is no reason to write any code outside of the function templates provided
//There is a difference between code written inside of a function, as opposed to outside of it. To take it a step further, when we create a variable inside of our function, it is called local. When we create a variable outside of a function, it is called global, and we will generally avoid this. This idea stems from the concept of scope. Every function has a scope, and this "local" scope includes the function's parameter(s), as well as any variables we create inside of our function's scope (the code written inside of the function). Let us then get into the solid habit of only writing code that manipulates variables within our function's local scope (i.e. its parameters and locally created variables).

//Debugging Coding Challenges
//Oftentimes our code will not work as expected
//This is okay
//The process of undertaking to remove the error or bug, is called "Debugging"
//Each of the following exercises has something wrong
//Your best bet is to transplant these challenges into repl.it

//----------------------------------------------------------------------------------------------------

//Debugging (1):
/*We are going to debug a function that takes in an object, and a target value. 
This function will iterate over the object's values, and attempt to locate the target value. 
If the value is found, the function should return the name of the key where the value in question
is located, and if not, the function should return -1. 
Below is an example of the code running, assuming that you will have debugged the described function: keyOfObjectValue:
*/
function keyOfObjectValue(object, target) {
    //iterate over the properties in object
    for (var key in object) {
        //if current value is equal to target
      if (object[key] === target) {
          //return current key
        return key;
        //otherwise
      }
    }
    //if for loop has ended, and theres no return, 
    //return -1 because we know the target value isnt present
    return -1;
  }
//test cases:
var result1 = keyOfObjectValue({cucumbers: 14, carrots: 20, peas: 400}, 20);
console.log('should log "carrots":', result1);

var result2 = keyOfObjectValue({name: 'Bruce Wayne', hero: 'Batman', city: 'Gotham'}, 'Superman');
console.log('should log -1:', result2);

//----------------------------------------------------------------------------------------------------

//Debugging (2)
//We are going to debug a function that takes in an array of numbers. This function will iterate over the array's number elements, and return a count representing the number of elements whose value is greater than 40. If there are no values above 40, then the function should return 0. Below is an example of the code running, assuming that you will have debugged the described function: getElementsAbove40:
function getElementsAbove40(numbers) {
    //create a count variable, set to 0
    var count = 0;
//iterate over the input array (numbers)
    for (var i = 0; i < numbers.length; i++) {
      //if current value is over 40
      if (numbers[i] > 40) {
          //increment count by 1
        count++;
      }
    }
  //return count
    return count;
  }
//test cases:
var result1 = getElementsAbove40([1, 42, 5, 314, 2, 89]);
console.log('should log 3:', result1);

var result2 = getElementsAbove40([1, 4, 3, 2, 6]);
console.log('should log 0:', result2);

//----------------------------------------------------------------------------------------------------

//Debugging (3)
//We are going to debug a function that takes in an array of strings, representing words in a sentence. This function should iterate over the input array and should create, and return, a resulting sentence from the words therein. Below is an example of the code running, assuming that you will have debugged the described function: createSentence:

function createSentence(words) {
    //create a result sentence, start as empty string
    var sentence = "";
    //iterate over the words array
    for (var i = 0; i < words.length; i++) {            
            //if index variable is at last value
            if (i === words.length - 1){
                //add a period to the end of the sentence
                sentence += words[i] + '.';
            //otherwise, add current word and a space
            }else{
            sentence += words[i] + ' '; 
            }
        }
        //return sentence
  return sentence;
}
//test cases:
var result1 = createSentence(['I', 'am', 'worth', 'it']);
console.log('should log "I am worth it.":', result1);

var result2 = createSentence(['My', 'problems', 'matter']);
console.log('should log "My problems matter.":', result2);