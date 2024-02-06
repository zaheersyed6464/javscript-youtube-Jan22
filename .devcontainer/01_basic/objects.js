//singleton
//object literals 

//adding symbol to object
const sym=Symbol("key")

const z={
    name: "Zaheer" ,
    age: 20 ,
    lcation: "mangl",
    loggedIn: ["monday"],
    "fullname": "syed zaheer quadri" ,
    email:"zaheersyed@gmail.com",
    [sym]:"mykey"

}

console.log(z.name);
console.log(z["email"]);

//but u cannot acces full name by "." oper
//console.log(z.full name);
console.log(z["fullname"]);
console.log(z[sym]);


 //modify
 z.name="sami"
 //Object.freeze(z)
 z.name="zami"
console.log(z);


//fucntions
z.greet=function(){
    console.log("hello");
}
console.log(z.greet);
console.log(z.greet());

//batex
z.greet2=function(){
    console.log(`hello ${this.name}`);
}
console.log(z.greet2());

//imp-dont use "." to acces use"[]'