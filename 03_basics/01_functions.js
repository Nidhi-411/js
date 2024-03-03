// function - block of code 

// function - keyword , function name - sayMyName , function - scop/deffination
function sayMyName()
{
    console.log("N");
    console.log("I");
    console.log("D")
    console.log("H");
    console.log("I");
}

sayMyName()  // execution 

sayMyName // referece only  , sirf uska pata bata rhe , baki op - nothing 

function addTwoNumbers (number1 , number2) // fn def ke time wale parameter 
{
    console.log( number1+number2 );
}

addTwoNumbers(3 ,4);   // 7     // call krte time jo pass krte h wo arguments 
addTwoNumbers(3 , "4"); // 34 -string
addTwoNumbers(3 ,"a");  // 3a - stirng 
addTwoNumbers(3 ,null);  // 3 - number

const res = addTwoNumbers(3 ,4);
console.log(res); //  it will give undefined bcz we have not returned anything 

function addTwoNumbers2 (number1 , number2) // fn def ke time wale parameter 
{
     let result =  number1+number2 ;
     return result;
     console.log("kabhi nhi chalega");  // return ke bad ki line ni chalti
}

const result = addTwoNumbers2(4 ,5 );
console.log(result);


function loginUserMsg( username)
{
    return `${username} just logged in `
}

loginUserMsg("nidhu"); // fun execute hoga , baki op print kuch nhi hoga 
console.log(loginUserMsg("nidhu")); // ye print krega 
console.log(loginUserMsg()); //  op -> undefined just logged in  , for dealing with udefine --->

function loginUserMsg2( username)
{   
    if(!username) // (username === undefine) ,here undefine is considered as false and ! for making true
     {
        console.log("argument are not given properly ");
        return ;
     }
    return `${username} just logged in `
}

console.log(loginUserMsg2());  // argument are not given properly
console.log(loginUserMsg2("Saru")); //Saru just logged in

// ******* if you want , ki asi koi value aaye hee nhi , to default value de do 
function loginUserMsg3( username = "Rao")
{   
    // if value is undefined or empty it will give default Rao
    return `${username} just logged in `
}

console.log(loginUserMsg3()); // op ->  "Rao just logged in"
console.log(loginUserMsg3("")); // op -> "  just logged in"

// *******function vidio 2  
function calculateCartPrice( ...num)  // jb kitne arg me aayege pata hee nhi ho tb 
{
      return num;
}

console.log(calculateCartPrice(300 , 200 , 100 , 220 , 400  , 330 , 435 )); // op -> as array of all this

/* rest operator - ...   , 3 dot ko hee rest operator bola jata h or isi ko spread operator bhi bola jata
    and iske use case pr depend krnta h , when to call it spread , and when to call it spread     */

    function calculateCartPrice2( val1 , val2 , ...num)  
{
      return num;
} 

console.log(calculateCartPrice2(322 , 400 , 33 ,2 , 333 ,898 ));  // op ->  [ 33, 2, 333, 898 ] 

// ********** how to pass objects in 
 const user = {
    username : "hitesh",
    prices : 199
 } 

 function handleObject (anyobject)
 {
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
 }

handleObject( user)
handleObject(
    {
       username : "niyati",
       pricef : "399"  
    }
)

//******** how to pass array in function 
 
  const myNewArray = [200 , 400 , 100 , 600 ]

  function returnSecondValue( getArray )
  {
     return getArray; 
  }

  console.log(returnSecondValue(myNewArray)); 

  console.log(returnSecondValue([8900 , 7800 , 2300 , 8900]));

  function returnSecondValue2 ( getArray )
  {
     return getArray[1]; 
  }

 console.log(returnSecondValue2(myNewArray));

 