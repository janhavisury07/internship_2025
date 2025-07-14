// for loop in array

let fruits=["apple","mango","orange"];
console.log(fruits);

let fruitsUpper = [];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i].toUpperCase());
    fruitsUpper.push(fruits[i].toUpperCase());
}

console.log(fruitsUpper);
