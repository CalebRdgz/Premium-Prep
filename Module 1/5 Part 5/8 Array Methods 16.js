// getLongestWordOfMixedElements
// Write a function called "getLongestWordOfMixedElements".
// Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.
// Notes:
// If the array is empty, it should return an empty string ("").
// If the array contains no strings; it should return an empty string.
function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length === 0){
        return '';
    }
    
    var strings = [];
    
    for (var i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'string'){
            strings.push(arr[i]);
        }
    }
    
    if (strings.length === 0){
        return '';
    }
    
    var longest = strings[0];
    
    for (var i = 1; i < strings.length; i++){
        if (longest < strings[i]){
            longest = strings[i];
        }
    }
    return longest;
  }
//test cases:
var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'

// getLargestNumberAmongMixedElements
// Write a function called "getLargestNumberAmongMixedElements".
// Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.
// Notes:
// The array might contain values of a type other than numbers.
// If the array is empty, it should return 0.
// If the array contains no numbers, it should return 0.
function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length === 0){
          return 0;
      }
      
      var nums = [];
      
      for (var i = 0; i < arr.length; i++){
          if (typeof arr[i] === 'number'){
              nums.push(arr[i]);
          }
      }
      
      if (nums.length === 0){
          return 0;
      }
      
      var largest = nums[0];
      
      for (var i = 1; i < nums.length; i++){
          if (largest < nums[i]){
              largest = nums[i];
          }
      }
      return largest;
  }
//test cases:
var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5