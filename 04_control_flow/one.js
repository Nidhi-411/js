
if(true )
{
  console.log(`always chalega `);
}
if(false)
{
    console.log(`kabi nhi chalega`);
}

if(2==2)
{
    console.log(`h na 2==2`);
}

const isUserLoggedIn = true;
if(isUserLoggedIn)
{
    console.log(`ha bhai h loggedin`);
}

// < , > , <= , >= , == , !=  , === , !==

if(2=="2")
{
    console.log("executed"); // == does simple checking , it does not check type
}

if(2 === "2")  // === strick checking , checks datatype too 
{
    console.log(`bhai strick check kiya h to datatype bhi dekhega , to nhi chalega`);
}

const temp = 41 ;
if(temp < 50 )
{
    console.log(`less then 50`);
}
else{
    console.log(`nhi h less then`);
}

console.log(`pr bhai temprature to h :()`); 

//******************************************* */
const score = 200 
if(score > 100)
{
    const power = "fly"
    console.log(`user power : $(power)`);
}

 // console.log(power); not accesible 

 const balance = 1000 

 if(balance > 5000) console.log("test");  // one line scop 

 if(balance < 500 )
 {
    console.log("less than 500 ");
 }
 else if(balance < 750 )
 {
    console.log("less than 750");
 }
 else {
    console.log("pata nhi ");
 }
 //************************************* */
 const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}