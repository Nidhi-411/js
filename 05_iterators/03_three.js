// for of loop 
 
 const obj = "nidhu"
for (const ch of obj) {
    console.log(ch);
}

// ******************* Map *************

const map = new Map()
map.set('In' , "India")
map.set('Usa' , "united state of Amerika")
map.set('fr' , '"france')
map.set('In' , "India")

for (const key of map ) {
    console.log(key);  // key with value milegi 
}

for(const [key , val] of map )
{
    console.log(key); // key alg 
    console.log(val); // value alg
}

//******************************************** */

// objects ke liye for of loop kam nhi krta 
const myObj = {
    'game1' : "nfs",
    'game2' : "spiderman "
}
// we will use for in loop for objectcs - 04_four.js file 