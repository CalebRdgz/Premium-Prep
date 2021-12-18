//The problem at hand
//Let us consider the case of wanting to write a function that:
//Takes in an array of numbers
//Returns a new array containing the even numbers from the input array
//Steps to this Pattern
//The steps for creating this basic algorithm look like this:

//Identify the inputs and write a function definition with those inputs
//How many are there?
//What are their types?
function filterEvenElements(numbers) {
  // input is (1) array of numbers
}

//Identify the output
//What will the function return when the input is normal?
//When/what will the function return when the input is empty?
function filterEvenElements(numbers) {
  // if input in empty, what do we return? (edge case)
  if (numbers.length === 0) {
    return [];
  }
  // output is new array of even numbers
}

//Define the result variable (accumulator) and return it
//Initialize it to whatever the output is in the empty case
function filterEvenElements(numbers) {
  // edge case
  if (numbers.length === 0) {
    return [];
  }

  // define result variable
  var evenNumbers = [];

  // return result variable
  return evenNumbers;
}

//Determine how to iterate
//How many times are you going to iterate?
function filterEvenElements(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  var evenNumbers = []; //new empty evenNumbers array

  // we will iterate over the entire input array
  for (var i = 0; i < numbers.length; i++) {

  }

  return evenNumbers;
}

//Alter the accumulator evenNumbers, using the information from the loop numbers[i]
function filterEvenElements(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  var evenNumbers = [];

  for (var i = 0; i < numbers.length; i++) {
    // check if current number is even
    if (numbers[i] % 2 === 0) {
      // add to evenNumbers array
      evenNumbers.push(numbers[i]); //push the current even numbers to the new evenNumbers array
    }
  }

  return evenNumbers;
}
//test cases:
var output = filterEvenElements([1,2,3,4,5,6]);
console.log(output); // -> [2,4,6]

//----------------------------------------------------------------------------------------------------

//filterOddElements:
function filterOddElements(array){
    //create new oddNumbers array (result array)
    var oddNumbers = [];
        for (var i = 0; i < array.length; i++){
            //if current value is odd
            if (array[i] % 2 !== 0){
                //add current value to result array (oddNumbers)
                oddNumbers.push(array[i]);
        }
    }
    return oddNumbers;
}

var output = filterOddElements([1, 2, 3, 4, 5, 6]);
console.log(output) // -> [1, 3, 5]

//----------------------------------------------------------------------------------------------------

//computeSumOfAllElements:
function computeSumOfAllElements(numbers){
    //If input array is empty, your function should return 0
    if (numbers.length === 0){
        return 0;
    }
    //create sum variable, set to 0
    var sum = 0;

    //iterate over numbers using for loop
    for (var i = 0; i < numbers.length; i++){
      //reassign sum to be sum plus current value
      sum += numbers[i];
    }
    
    
    //return sum variable
    return sum;
}
//test cases:
var result1 = computeSumOfAllElements([1, 2, 3]);
console.log('should log 6:', result1);

var result2 = computeSumOfAllElements([]);
console.log('should log 0:', result2);

//----------------------------------------------------------------------------------------------------

//Generate Average of Elements:
function computeAverageOfNumbers (numbers){
  //If input array is empty, your function should return 0.
  if (numbers.length === 0){
    return 0;
  }
  var avg = 0;
  for (i = 0; i < numbers.length; i++){
    avg += numbers[i];
  }
  avg /= numbers.length;
  return avg;
}