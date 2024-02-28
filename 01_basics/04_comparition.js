console.log(2!=1); // ture
// < , > ,<= , >= , ==  , this will give predectable output

// At the time of comparition make sure that datatype of both vlues should be same
console.log("2" > 1); // otherwise it will give unpredictable values
// js will auto change "2"-> 2 and then 2 > 1 true  
console.log("02" >1)



console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null >= 0 ); // ture

// ******The reasone is that an equality check == and comparison > , < , >= , <= workds differently 

// comparision convers the null to a number , treating as 0 , That's why(3) null >= 0 ture , 0 >= 0 
                                                                //     (1)  null > 0 false , 0 >= 0 

console.log(undefined == 0 );
console.log(undefined > 0)
 console.log(undefined <= 0) ;  // in all cases it gives false
 
 // Note  - clean code is our priority , so do not make confusive comparison ,(null ,undefined,diffdatatype)

 // === Strict check , it checks values as well as data type
 console.log("2"===2); // false 