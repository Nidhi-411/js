const accountId = 144553 // mtlb you can not change it
let accountEmail = "nidhi@88.goggle.com" 
//way of declaring variable ,we can change it's value ,  prefer it over var bcz scop, 
var accountpassword = "12345"
/*
 prefer not to use var 
 becouse of issue in block scop and functional scop
*/
accountcity = "Jaipur" // we can declare variable like this , but not good way , do not use

let accountState
console.log(accountState); // op - undefined 

// accountId = 2 // not allowed 
accountEmail = "ni@a.com"
accountpassword = "212121"
accountcity = "Indore"

console.log(accountId); 

console.table([ accountId, accountEmail, accountpassword, accountcity])