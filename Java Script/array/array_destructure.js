// Arrays Destructing
/* 
The destructuring assignment syntax is a JavaScript
expression that makes it possible to unpack values from 
arrays, or properties from objects, into distinct variables.

In Other words, Array Destructing Is :
We Unpack whole array which is huge with data
And 
data can be values or properties
from
arrays or objects respectively

we assign it to distinct particular variables.

*/
// It basic destructure of array

// const myarr = ["value1","value2"];

// let var1= myarr[0];
// let var2= myarr[1];

// console.log(var1);
// console.log(var2);

// Other way to store rest remaining values in array

const myarr = ["value1","value2","value3","value4","value5"];
// with help of spread operator
const[var1,var2,var3,...newarr]=myarr;

// Array is Destructed and stored in variables
// and variable act similar to normal var
console.log(var1);
console.log(var2);
console.log(var3);
console.log(newarr);
