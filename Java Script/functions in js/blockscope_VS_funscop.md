# Block Scope Vs Function Scope


// let and const are block scoped

// var is function scoped

{
    // here let is block scoped

    let firstChar = "afafafafa";

    // similar in case of const

    const  name_var = "adadad";
   
}

- In Case of Let : variable
- console.log(firstChar);
- uncaught reference error :firstchar is not defined
- cannot access firstChar as it is blockscoped
- and declared as let
- Similarly:
- In Case of const : variable
console.log(name_var);
- uncaught reference error :firstchar is not defined
- cannot access firstChar as it is block scoped
- and declared as const

