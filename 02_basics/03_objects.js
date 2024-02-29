// Objects 
/* there are two ways to declare - 
   1. as constructor - via this method we got a SingleTon object

   2. as literal -  we do not get SingleTon object , it may have multiple instances 

*/

// SingleTon - >    code -  Object.create; // we will talk about it later 

// Object Literals 

const JsUser = {
    name : "Nidhu",
    age : 20 ,
    location : "Khargone",
    email : "safdfd@gdod.com",
     isLogedIn : true,
     LastLoginDays : ["Monday" , "SaterDay"],
     "full name" : "Nidhi Yadav"
}

// Accesing the values 
  
 console.log(JsUser.name);  // 1st way 
 console.log(JsUser["name"]); // 2nd way 

 console.log(JsUser["full name"]); //  one way only
 
 // changing the values 

 JsUser.age = 40
 JsUser["full name"] = "Nidhu yadav yadav"
 console.log(JsUser["full name"]);
 console.log(JsUser.age);

 // freez the object , so that key and values can not be modified and add 

 Object.freeze(JsUser);  
 JsUser.age = 20 // will not change 
 console.log(JsUser.age);  // op - 40 

 // *** if interviewer ask you - add Symbol as a key into any object 

 const sym = Symbol("key1")
 const sym2 = Symbol("key2")
 const obj ={
    [sym] : "mykey1" ,
    sym2 : "mykey2"
 }
 console.log(obj[sym]); // this key is Symbol , and the way of declaing it is with  [] , and accesing also

 console.log(obj.sym2); // this key is not Symbol , it will be considered as String 
 console.log(typeof obj.sym2); // string
 console.log(typeof obj.sym); // undefine but when we directly print object

 console.log(obj); // { sym2: 'mykey2', [Symbol(key1)]: 'mykey1' }

 // ******** adding function into our object 
 obj.greeting = function()
 {
    console.log("hello js user");
 }
 
 console.log(obj.greeting); //op -> [Function (anonymous)]  //we just got referece of function,fn din't executed

console.log(obj.greeting()); //  hello js user 
                             // undefined  , why undefined is printed , we will see it later
  
                             
  obj.name = "nidhu"                           
 obj.greeting2 = function()
 {
    console.log(`hello js user ${this.name}`);
 }  
 
 console.log(obj.greeting2());

