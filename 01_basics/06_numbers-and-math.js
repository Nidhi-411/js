const score = 400 
console.log(score); // op -> 400

const balance = new  Number(100); // new object jo ki Number type ka h 
console.log(balance); // op -> [Number: 100] 

// *********Mthods in Number********* 

console.log(balance.toString());
console.log(balance.toString().length);

 console.log(balance.toFixed(2)); // 2 -> 100.00, 1 -> 100.0 , 3 -> 100.000
 
 // toPrecision() // returns a string 
 const otherNumber = 23.987643 ;
 console.log(otherNumber.toPrecision(3)); // 3 -> 23.9  , 2-> 24 , 1 -> 2e+ // Priority decimal k phle 
 // if you want to explore code and run :()

 const hundereds = 1000000;
 console.log(hundereds.toLocaleString()); // gives in us standers 1,000,000
 console.log(hundereds.toLocaleString('en-IN')); // gives in Indian statders 10,00,000

 // +++++++++++++++++++++ Math +++++++++++++++++++++++++++++++
 console.log(Math); // op -> Object {Math} {}
 console.log(Math.abs(-4));
 console.log(Math.round(4.6));
 console.log(Math.ceil(4.2)); // gives 5 , ceil mtlb top
 console.log(Math.floor(4.9)) // gives 4 , flore mtlb bottom 
 console.log(Math.min(3 ,4 ,1, 5, 4));
 console.log(Math.max(3, 4, 3, 5 ,8 ));

 // random method 
 console.log(Math.random()); // value always comes between 0<= value <= 1 

 console.log(Math.random()*10); // value always comes between 0 <= value <= 9 

 console.log((Math.random()*10)+1); // now you are sure that values will come 1 <= value <= 9 
  
 console.log(Math.floor((Math.random()*10)+1)); // now the values will not be in decimal 
 
  // trick ___________if you want numbers in range 10 - 20 

  const min = 10 ;
  const max = 15 ;

  console.log(Math.floor(Math.random()*(max-min+1)) + min );
