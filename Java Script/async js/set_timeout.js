/*
The setTimeout() method calls a function after a number of milliseconds.
1 second = 1000 milliseconds.

The setTimeout() is executed only once.
If you need repeated executions, use setInterval() instead.


What is setTimeout?
setTimeout() global function. The global setTimeout() method sets a timer
which executes a function or specified piece of code once the timer expires


How does setTimeout () work?
The setTimeout( ) method defers the execution of the JavaScript statements
 in the string code for delay milliseconds. Once the specified number of 
 milliseconds has elapsed, the statements in code are executed normally. 
 Note that they are executed only once.


Use the clearTimeout() method to prevent the function from starting.



*/

// Example

console.log("start Script");

const id = setTimeout(()=>{
    console.log("inside Timeout Function");
},0);


for(let i = 1; i< 10000; i++){
    console.log("....");
}

console.log("settime out id is ",id);
console.log("clearing time out ");
clearTimeout(id);
console.log("Script Ends");
