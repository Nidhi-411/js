let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toTimeString());

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// if you want to declare specific date 
let myCreatedDate = new Date(2023 , 0 , 23)
console.log(myCreatedDate.toLocaleDateString());

let myCreatedDate2 = new Date(2023 , 0 , 23 , 5, 3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14"); // arg formate - YYYY-MM-DD
console.log(myCreatedDate3.toLocaleString()); 

// *******timestamps*****

let myTimeStamp = Date.now() //
console.log(myTimeStamp);  // 1-jan-1997 se abhi tk miliseconds very long digit value in milisecond 
              // op is - 1709036305918 , ye current date ka h 

// for created date 
console.log(myCreatedDate.getTime());  // this will give miliseconds from 1-jan-1997 to your created specific date
// and using this you can easily comapare this with current date , 
// * usefull for many projects , in comparition of time, like quize desingn , pools desingn 

console.log(Math.floor(Date.now()/1000)); // if you want to show in seconds 


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // gives month 2 
console.log(newDate.getDate()); // 27 date is 27 
console.log(newDate.getDay()); // 2 for tueseday
weekday
// costmizing the formate of toLocaleSstring 
 

// not explained much , do it later 

console.log( newDate.toLocaleString('default', {
  weekday : "long"
}));


 
              
