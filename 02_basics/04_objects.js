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


   // *************** object  De-structure ***************
   
   //rect me backend se aapko object milta , usko de structure krke aapko values use karni padegi
   const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
   }

   // way of accesing 
   
   // course.coursename , valid , but for clean code again and again writing it is not good 

   // de -structuring 

   const {courseInstructor} = course
   console.log(courseInstructor);

   const {price : p} = course
   console.log(p);  // or bhi assan bana diya 
   //**************json */

   /* Api - putting our word on someOne's head 
     
    jo values backend se aati h (ye values json formate me aati h , sometime Array of objects ke form me aati h) ,
     un values ko aap kese likhte h - > ? 
   */
   
     // json 
     {
       "name" : "hitesh",
       "coursename" : "js hindi",
       "price" : "free"
      
     }
  
     // api.github.com/users/hiteshchoudhary 

     /* 
       js me fetch method use kar ke , factch method se ye url call krenge , 
       responece me jo JSon formate me data mill jayega 
       ab ise hum object me convert kar lenge and values ko access kr payenge 
     */
    // kai bar hume api array ke form me bhi milti h , array jiske andar object h [ {} , {} , {}]

    // random user me api - koi si bhi api utha lo 
    // json formate toll - for understanding api - formate beuty - code - tree 
    // -> you can make your own json formate 