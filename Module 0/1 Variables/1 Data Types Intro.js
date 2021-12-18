//A quick comment about comments
//Comments are sections of code that the computer ignores
//It is mainly for you, or other human programmers
//They can describe what your code does, or:
//They can describe what the code you will write should do (pseudocode)

// comments can be a single line, and are denoted by "//"
/*
  We can also allow our comments to take up
  multiple lines.
  There are lots of reasons why this might be the case
  In order to create a multiline comment, we place "/", and ""*" before our
  multiline comment, and "*", and "/" afterwards.
*/

//----------------------------------------------------------------------------------------------------

//An Initial glance at Functions
//Consider this piece of code that you ran in the console during the previous set of challenges:

//var elements = document.getElementsByClassName("title");
//document.getElementsByClassName("title") is an example of calling a function
//In this case, it grabs any "elements", or components from a webpage that have class name of "title", and saves them in a variable called elements
//By and large, the approach outlined by this course is to learn JavaScript by building an understanding of functions.

//Functions are the prime mechanism with which you will be manipulating data
//They tend to range from extremely simple use cases (scenarios in which you would use the function or program) as in simply "returning" what was inputted (functions typically take inputs and have outputs), to somewhat more complex use cases (take for example our "call" to document.getElementsByClassName("title"))

//----------------------------------------------------------------------------------------------------

//Coding Challenges
//Each subsequent lesson will be accompanied by coding challenges
//You will face a great deal of these
//They are an effective way to solidify your knowledge
//One question that jumps out for a great deal of beginners when they see their first coding challenge is "What does it mean by 'Run Tests'?" Let us take a glance at a quick example function:

// this function has one simple operation: it returns 1
function returnOne() {
  return 1;
}

// this part is similar to what happens when you click 'Run Tests'
var result = returnOne();
console.log(result); // should log 1 to the console