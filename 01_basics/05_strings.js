"use strict"
const name = "nidhu"
const repocount = 2

//console.log(name + repcount + "hai");
// not recommanded 

// better is 
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// we used here back ticks `` and here the concept is  String Interpolation - "we make placeholders and inject our variables"

const gameName = new String("Nidhu_uu") // another way of declaring string 
console.log(gameName);
// insepect , got to console and make a string with new keyword then write the var name then 
// you can seee all the functions that we can apply on it 
console.log(gameName.length);
console.log(gameName.toUpperCase()); // it do not changes the real value object h qki copy mili thi primitive value
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4); // if you will give negative , it will consider it as 0 (-8,4) to 0-4
console.log(newString);

const anotherStirng = gameName.slice( -8 , 7); // Nidhu_u  
console.log(anotherStirng);

const newStringOne = "    hell ooo    "
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20' , '-'));
console.log(url.includes('sundar'));    // true or false 


console.log(gameName.split('_'))

 