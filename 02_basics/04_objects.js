const tinderUser1 = new Object() // Singleton object 
console.log(tinderUser1);  // op -> {}

const tinderUser = {} // non singleton object 
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Samy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    
    fullname : {
         userfullname : {
            firstname : "nidhu",
            lastname : "yadav"
         }
    }
}
// accesing values 
console.log(regularUser.fullname.userfullname.firstname);

// combining objects 
const obj1 = { 1 : "a" , 2 : "b"}
const obj2 = {3:"c" , 4 : "d"}

const obj3 = { obj1 , obj2} 
console.log(obj3);

 const obj4 = Object.assign({} , obj1 , obj2)  // first param (target obje , source1 obj , source2 obje.......)
 console.log(obj4)                             // mdn doc 

 const obj5 = {...obj1, ...obj2} 
 console.log(obj5); 

 //*********when values comes from databse  - comes in the form of array of objects
 const users = [
     {
         id :1 ,
      email : "agef@gmail.com"
     } ,

      {
        id : 2,
        email : "dkfeoifnd"
      } ,

      { 
        id :1 ,
        email : "agef@gmail.com"
       }
  ]

  // loop throgh krna h to .map lgakr , aage dekhenge 

    console.log(users[1].email)


    // methods usefull 
   console.log(tinderUser);
   console.log(Object.keys(tinderUser)); // return array 
   console.log(Object.values(tinderUser)); // returs array 
   console.log(Object.entries(tinderUser)); // 2 d array , key , value

   console.log(tinderUser.hasOwnProperty( "isLoggedIn")); // gives true or false
    
   // more over go to inspect , console , make an object there and check all the methods available 