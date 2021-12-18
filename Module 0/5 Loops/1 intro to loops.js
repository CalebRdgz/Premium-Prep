//What are Loops?
//When it comes to programming, few things are more fundamental than loops
//Consider the following scenario: You wish to log the numbers 1 through 5 to the console.
//We could of course, write this code:

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
//While this does work, it is rather inefficient
//Perhaps the idea is not immediately obvious with only 5 lines of code, but consider the case of needing to list something about 13,987 users
//One can quickly gather that this makes the above example appear woefully insufficient

//Here is a quick look at a for loop doing the same thing:
for (var num = 1; num <= 5; num++) {
  console.log(num);
}

//Do not worry about understanding how this works, as we will spend significant time in the upcoming lessons do just that.

//Iteration vs. Loops (From Stack Overflow)
//Iteration is the number of time(s) a loop can be executed
//At the beginning of your coding journey, iterating and looping will be interchangeable
//They are not exactly the same idea, but:
//We will loop over the array, and
//We will iterate over the array,
//Both mean essentially the same thing

//Infinite Loops
//Both while and for loops need a stop condition to stop running
//If you fail to account for this, you will create an infinite loop
//Do not panic, as this happens to all first-timers
//Simply quit your window/browser and come back