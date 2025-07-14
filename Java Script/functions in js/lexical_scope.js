// ################# Lexical Scope ##################################
/*

Lexical scoping in JavaScript
JavaScript uses lexical scoping to resolve the variable 
names when a function is created inside another function.
It determines the function's parent scope by looking at
where the function was created instead of where it was
invoked.

*/ 

// ################# Example #################
const myvar = "value1";

function myApp(){
     
    function myfunc(){
        // const myvar= "value59";
        console.log("inside myFunc",myvar);
    }
    
    console.log(myvar);
    myfunc();
}

myApp();
