/* 
    Syntax   
 
 switch (key) {
    case value:
        
      break;

    default:
        break;
}  */ 

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// NOte -  break is nessasary after each case , agr nhi lagaya to sare case chal jayeng niche ke ,expect defould
const monthno = 2

switch (monthno) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}