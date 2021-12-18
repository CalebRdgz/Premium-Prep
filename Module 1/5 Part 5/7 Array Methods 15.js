// Write a function called "findShortestWordAmongMixedElements".
// Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.
// Notes:
// If there are ties, it should return the first element to appear in the given array.
// Expect the given array to have values other than strings.
// If the given array is empty, it should return an empty string.
// If the given array contains no strings, it should return an empty string.
function findShortestWordAmongMixedElements(arr) {
    // your code here
    if (arr.length === 0){
          return '';
      }
      
      var strings = [];
      
      for (var i = 0; i < arr.length; i++){
          if (typeof arr[i] === "string"){
              strings.push(arr[i]);
          }
      }
      if (strings.length === 0){
          return '';
      }
      
      var shortest = strings[0];
      
      for (var i = 1; i < strings.length; i++){
          if (strings[i].length < shortest.length){
              shortest = strings[i];
          }
      }
      return shortest;
  }
//test cases:
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

// findSmallestNumberAmongMixedElements
// Write a function called "findSmallestNumberAmongMixedElements".
// Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.
// Notes:
// If the given array is empty, it should return 0.
// If the array contains no numbers, it should return 0.
function findSmallestNumberAmongMixedElements(arr) {
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
    
    var smallest = nums[0];
    
    for (var i = 1; i < nums.length; i++){
        if (nums[i] < smallest){
            smallest = nums[i];
        }
    }
    return smallest;
  }
//test cases:
var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4