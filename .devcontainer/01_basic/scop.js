var c=20
let a=9
if(true){
    let a=20
    const b=10
    var c=11
}
// console.log(a);
// console.log(c);

function one(){
    const user= "zaheer"

    function two(){
        const user1="samii"
        console.log(user);

    }
   // console.log(user1);
    two()
}
//one()

if(true){
    const web="utube"
    if(web==="utube"){
        const web1=" chrromee"
      //  console.log(web1+web);

    }
   // console.log(web1);
   //becoz only in nested if block available
}
//console.log(web);



// ********************interesting***********

console.log(addone(5))
//console.log(addtow(2))
//not callable becoz function assigned to a var
function addone(num){
    return num+num
}


const  addtow=function(num){
    return num+2
}



