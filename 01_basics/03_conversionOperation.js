/*let score = undefined

console.log(typeof score)
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)  */

// note
// "33" => number => 33
// "33abc" => number => Nan // not a number
// ture => number => 1 , false => number => 0
// null => number => 0
// undefined => number => Nan // not a number

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log( booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false // for empty string it gives false;
// "nidhu" => true

let someNumber = 33 

let stringNumber = String(someNumber)
console.log( typeof stringNumber);
console.log(stringNumber);

//********************************* Operations ****************************
let value = 3
let negValue = -value
//console.log(negValue);
/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // 2 ki power 2 
console.log(2**3); // 2 ki power 3
console.log(2/3);
console.log(2%3); */

let str1 = "hello"
let str2 = "nidhu"

let str3 = str1+str2
console.log(str3); // op "hellonidhu"

console.log("1"+2); // op "12"
console.log(1+"2"+2); // op "122"
console.log(1+2+"2"); // op "32"
console.log(3+4*5%3); // do not use complicated things qustion solving nhi dev krna h yha
console.log((3+4)*5 %3); // use brackets and write clear code 

console.log(true); // op true
console.log(+true); // op 1 , increament to hua nhi pr value aa gya
console.log(+false);// op 0 , value print hui 
// console.log(ture+);  // gives error , same in false
console.log(+"");  // op 0 aayga 

// tricky conversion have no sence , we should study operater prcidence but just only for exams 

// Readability *** high preference do 

let num1 , num2 , num3 // this op is used somewher 
num1 = num2 = num3 = 2+2   // pr readability nhi h , make sure to write readable code 

let gameCounter = 100
gameCounter++
console.log(gameCounter)
++gameCounter
console.log(gameCounter);  // prefix and postfix , same as in java , 
// prefix phle increment ho jaygi 
// postfix bad me increment hogi 

// Link to study ecma script 