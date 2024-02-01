let user={
    email:"zaheer@gmail",
    num:9347
}
//heap
let user1=user
user1.email="syed@gmail.com"
console.log(user.email);
console.log(user1.email);
//stack
let z="zaheer"
let s=z
s="sami"
console.log(z);
console.log(s);