const userEmail = []  // empty array is a truthy value

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

/*************************** 
 * 
 *  falsy values

 false, 0, -0, BigInt 0n, "", null, undefined, NaN

* truthy values
 "0", 'false', " ", [], {}, function(){}
 */

   if (userEmail.length === 0) {      // empty array agr truthy value h ,then how to check karenge ki array empty 
    console.log("Array is empty");
 }

const emptyObj = {}
                        // empty object is also a truthy value 
if (Object.keys(emptyObj).length === 0) {  // checking is object empty 
    console.log("Object is empty");
}

//***************************************** 
// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1);  // 5

// val1 = null ?? 10
// console.log(val1);  // 10 

// val1 = undefined ?? 15
// console.log(val1)  // 15

val1 = null ?? 10 ?? 20
console.log(val1);   // 10 

//**********************************************************
 // Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")