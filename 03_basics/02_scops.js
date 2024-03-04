
 // global scop .......
  const aa = 1 
   let a = 300
 
 var c =30  // block scop ka kam nhi krta
//  {} ->  jb function ke sath , ya if else ke sath aata tb uska scop hota h

if(true)

 {  //block scop 
    let a =10            
    const b = 500
     var c = 300
     var oii = 21522
      console.log("Inner :  " , a  );
  }

//console.log(a);
//console.log(b);
 console.log(c);
 console.log(oii); // ye to automatic bahar aa  gya 
 console.log(a);
 
 let array = [1 ,2 ,3]
 for(let i = 0 ; i< array.length ; i++ )
 {
    const element = array[i]; 
 }


 // nested scop 

 function one (){
  const username = "nidhi"

  function two() {
    const website = "youtube"
    console.log(username);
  }
  // console.log(website) // not accesable , ce 

  two()
 }

one()


if(true)
{
  const username = "hitesh"
  if(username === "hitesh")
  {
    const website = " YT";
    console.log(username + website);
  } 

  // console.log(website); // not accacible 
}

 // console.log(username); // not accacible 


 //++++++++++++++++++++++++++ Intresting +++++++++++++++++++++++++++++++++
 
   addone(5)  // fn ko declare krne k phle call kr skte h 

 function addone( num )      // this is a  function 
 {
     return num+1
 }


 // addtwo(4)  // fn / exp ko delare krne k phle access nhi kar skte 

 const addtwo =  function(num)  {             // this is also a  function but sometime it is called expration 
  
  return num+2; 
 }

 addtwo(4);  // after declaration you can access