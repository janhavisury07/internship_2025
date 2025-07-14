// Call backs In General:


function myfunc(callback){
    console.log("function is doing  task 1");
    callback();
}

function myfunc2(){
    console.log("function is doing  task 2");

}

myfunc(myfunc2);
 myfunc2();

/*
     What is callback function in JavaScript?
What is a Callback Function in JavaScript? 
A JavaScript callback is a function which is to be executed after another 
function has finished execution.
 A more formal definition would be - 
Any function that is passed as an argument to another function so that it can 
be executed in that other function is called as a callback function.

*/