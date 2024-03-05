// Immediately inovoked function expression 

// reasone - 1 . app jese hee start ho wese hee , chal jaye 
//            2. global variables 

 // global scop ke  variables ya jo bhi declaration h uske polution ko hatane ke liye iife concept use kiya

 
(    function chai()
{
    console.log("db connected ");
}
)(); // semicolon lagana jruri h , taki agr aap aage koi or iife banaye to problem na aaye , agr ek hee h to dikkt nhi h  

// syntax  -      ()();  // first parenthesis fn def ko wrap krne ko , 2nd is execution parenthesis 

(
    ()=>{
        console.log(`db ho gya connect`);
    }
)();

// argumet krna ho to 
(
    (name)=>{
        console.log(`db connected two ${name}`);
    }
)("nidhu");

// named iife and unnamed iife 
// parameter pass krna 
// 2 iife likhna ek file me 