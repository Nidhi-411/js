const user = {
    username : "nidhi",
    price : 999 , 
    
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website `);
         // this - refer krta h current contaxt ko 
         console.log(this); 
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


console.log(this);  // gives {}   ,  bcz we are in node environment , 
// this refer to empty object , qki abhi koi contax hee nhi h 

//** but in inspect , console , when we write "console.log(this)"  -> window  */ 

//********************************************************* */

function chai1(){
    console.log(this);  // gives a lot of stuff 
}

chai1()

function chai2()
{
    let username = "nidhu"
    console.log(this.username); // gives undefined 
}

chai2()

 const chai3 = function (){
 
    let username = "nidhu"
    console.log(this.username); // gives undefined 
}

chai3()

const chai4 = () => {
  let username = "nidhu"
  console.log(this);  // gives {}
  console.log(this.username); // gives undefined
}

chai4() 

// arrow fn syntax        ( ) => {}

const addTwo = (num1 , num2) => {  // basic arrow function
    return num1+num2
}

 console.log(addTwo(3 ,4))

 //  another arrow fn - implicit returned  () => ()

 const addTwo2 = (num1 , num2) => num1 +num2 
 
 // const addTwo2 = (num1 , num2) => (num1 + num2)  // same bat h 
 // const addTwo2 = (num1 , num2) => { return num1 + num2 }  // same bat h

 console.log(addTwo2(3 ,5));

 // object return krna ho tb 
 const addTwo3 = () => ({username : " nidhu "}) // to () lgana hee padega 




