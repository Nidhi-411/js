
// creating a promise

const promiseOne = new Promise(function(resolve , reject){
    // do an async task 
    // DB calls , cryptography  , networkCall
    setTimeout( function(){
        console.log(' Async task is complete');
        resolve();
    }, 1000)
 })

 // consumint a promise

 promiseOne.then(function(){
    console.log("Promise consuuummed ");
 })

 //  promise creation and cusumption together 

 new Promise( function(resolve , reject){
   setTimeout( function(){
    console.log("Async task 2 ");
    resolve();
   }, 1000)
 }).then(function(){
     console.log("Asynce two resolved ..... ");
 })

 // 

 const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({ username : "chai " , email : " hi@hum.com"}) // then ke call back me ye obj return hoga
    } , 1000)
 })

 promiseThree.then(function(user){
    console.log(user);
 })

 // 

 const promiseFour = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = false;
        if(!error)
        {
            resolve( {username : "nidhu", passWord : "123"});
        }
        else{
             reject('Error : Something Went Wrong')
        }
    } , 1000 )
 })

 promiseFour.then((user)=>{
    console.log(user);
    return user.username;
 }).then((username)=>{
    console.log(username);
 })

 // 
 const promise4 = new Promise(function(resolve, reject){

    setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve( {username : "nidhu", passWord : "123"});
        }
        else{
             reject('Error : Something Went Wrong')
        }
    } , 1000 )
 })

 promise4.then((user)=>{
    console.log(user);
    return user.username;
 }).then((username)=>{
    console.log(username);
 }).catch(function(error){
    console.log(error);
 }).finally(()=>{
    console.log("The promise is either reolved or rejected");
 })

 // 
 // promise creation 
 const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true;
        if(!error)
        {
            resolve( {username : "javascript", passWord : "123"});
        }
        else{
             reject('Error : js Went Wrong')
        }
    } , 1000 )
 })
 // promise consume via using async , await 

  async  function consumepromiseFive(){
    try{
          const response = await promiseFive 
          console.log(response);
    }
    catch(error){
       console.log(error);
    }
  }

  consumepromiseFive() // call to krna pdega 

  //
  // api ke sath deal krna , ye sb use kha krna h 
  async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // fetch return a promise 
     const data = await response.json(); // response ko Json formate me laye , or isme bhi time lgta to await
     console.log(data); // or ye sbse phle chalega kyu socho ?  

    } catch (error) {
       console.log("E : ", error ) 
    }
  }

  getAllUsers();

  // api , .then().catch() 

  fetch('https://api.github.com/users/hiteshChoudhary')
  .then( (response) => {
     return response.json()
  })
  .then( (data) =>{
    console.log(data); // ye sari upr ki chijo se bhi phle print hoga
  } )
  .catch( (error)=> console.log(error))
  
  


