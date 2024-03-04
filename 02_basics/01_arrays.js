// arrays 

// ()  parenthesis , [] brackets , {} curly braces
const arr = [0, 1 ,2 ,3, 4, 5]
const anotherarr = [0, 1 ,2 ,3, 4, 5,true , "hitesh"] 
// you can go to mdn doc for further info 
// in js arrays are - resizable , mix of all datatypes , 0-indexed , shalo copy 

/* shallo copy - shallo copy of an object is copy whose properties share the same references , 
  means - original array me bhi change honge

  Deep copy - properties do not share the same reference 
  */
console.log(arr[3]) ; 

// ++++++++++++++++++++++++++ Methods +++++++++++++++++++++++++++++++

arr.push(6) ; // adds value at last of array 
arr.push(7);
arr.pop()   // removes last value 

arr.unshift(9);  // adds value at first of array 
arr.shift()       // removes first value

arr.includes(9) // gives true or false

arr.indexOf(6) // returns index of parameterized element 

const myArr = [ 'ho' , 9 , 'oy' , "teri"]
const str = myArr.join() // adds the array as String and return it 

console.log(str , typeof str);

// ++++++++++++++ slice , splice ++++++++++

 const ar = [0,1,2,3,4,5];
 console.log("A " , ar);
 const my1 = ar.slice(1,3);
 console.log(my1);
 console.log(ar);

 const my2 = ar.splice();
 console.log(my2);
 console.log(ar);

 // slice - return slice without including last range , but do not make change in original array
 // splice - includes last range , but changes the Original array

 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Array methods 

 const frnd = [ "saru" , "tonu"]
 const czn = [ "shibu" , "Pinka"]

  //frnd.push(czn);  // gives - [ saru , tonu , [shibu , pinka]]
  //console.log(frnd);

  const all1 =  frnd.concat(czn) 
  console.log(all1); // gives  - [ saru , tonu , shibu , pinka]

 // better way , via using it you can merge more then tow arrays 
  // split ...
  const all2 = [...frnd, ...czn]
 console.log(all2);

 const arrarr = [1,2,3,4,[4,53,4] , 8 , 9 ,[7 , 9 , [3, 2]], 2 ,4 ];
 const arrusefull = arrarr.flat(Infinity) // in arg we have to give the depth , infinity means jitni h wha tk
 console.log(arrusefull);


 console.log(Array.isArray("Hitesh") ); // gives true or false

 console.log(Array.from("Hitesh")); // return arrys ['h' , 'i' , 't' , ......]
 
 console.log(Array.from({name : "hitesh"})); // will give empty array , bcz we have not mention to create
                                              // array with wich values ?

 let score1 = 100;
 let score2 = 200 ;
 let score3 = 300;

 console.log(Array.of(score1,score2,score3));







