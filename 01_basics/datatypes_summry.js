// on the basis of storing the data , and the way of accesing them datatypes are catagrised in 2

// #primitiv  -> call by value

// 7 - String , Number , Boolean , null ,undefined , Symbol , BigInt 
 const score = 100 
 const scoreValue = 100.3 
 const isLogedIn = true
 const outSideTemp = null
 let userEmail ;

 const id = Symbol('123') // it will return unique Symbol
 const anotherId = Symbol('123') // it will return unique symbol 
 console.log(id == anotherId);

 const bigNumber = 4345478958952394203n // last me n likh diya mtlb ye bigNumber me ho jayga

// # Reference type {non primitive} -> call by reference

// Array , Object , Functions 
const heros = ["shaktiman" , "naagraj" , "doga"];

let myObj = {
    name : "hitesh",
    age:22
}

const myFunction = function()
{
    console.log("Hello world");
}

console.log(typeof myFunction);
console.log(typeof myobj);
console.log(typeof heros);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// stack (primitives) 