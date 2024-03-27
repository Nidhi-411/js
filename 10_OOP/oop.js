const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); // op {} empty object 


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);


/* jese hee new keyword use hota h , sbse phle ek empty object create hota h jisko instance
bola jata h , 

- step 1 new object create hota h 

- step 2 constructur fun call hota h new keyword ke karan 

- step 3  this keyoword ke andar sare arg wgera inject ho jate h 

- step 4 you got all things in function 

*/ 


// read about -   instanceOf method 