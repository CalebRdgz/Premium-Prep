//average
//Write a function called "average".
//Given two numbers, "average" returns their average.
function average(num1, num2) {
    // your code here
    var sum = num1 + num2;
    var average = 0.5 * sum;
    return average;
  }
//test cases:
var output = average(4, 6);
console.log(output); // --> 5

//computeAreaOfATriangle
//Write a function called "computeAreaOfATriangle".
//Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.
function computeAreaOfATriangle(base, height) {
    // your code here
    var area = .5 * base * height;
    return area;
  }
//test cases:
var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12

//cube
//Write a function called "cube".
//Given a number, "cube" returns the cube of that number.
function cube(num) {
    // your code here
    return num**3;
  }
//test cases:
var output = cube(3);
console.log(output); // --> 27

//square
//Write a function called "square".
//Given a number, "square" should return the square of the given number.
function square(num) {
    // your code here
    return num**2;
  }
//test cases:
var output = square(5);
console.log(output); // --> 25

