function zaheer(){
    console.log("z");
    console.log("a");
}
//zaheer()

function add(number1,number2){
   // console.log(number1+number2);
//  const n= number1+ number2
//  return  n
return number1+number2
}
//add("1","2")
const m =add(1,2)
//console.log(m);


function login(user ){//is user="zah"
    if(!user)
    {
       console.log( `please enter name`);
    }
    else{
    return `${user} just logged`
    }
}
console.log(login("zaheer"))