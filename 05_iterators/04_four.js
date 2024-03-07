
// for in loop 

const obj = {
  js : "javaScript",
  cpp : "c++",
  game : "spiderman"
}

for(const key in obj)
{
    console.log(key); // key alg 
    console.log(obj[key]); // value alg
    console.log(`${key} shortcut is for ${obj[key]}`);
}

