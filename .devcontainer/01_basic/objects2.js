const tinder=new Object();
tinder.id="1234"
tinder.name="zaheer"
console.log(tinder);

const insta ={
    email:"zah@.com",
    naam:{
        fullname:{
            firstname:"sami",
            lastname:"shaik"
        }
    }
}
console.log(insta.naam.fullname.lastname);

//combaining 2 objs
const ob1={1:"A"}
const ob2={2:"b"}
const ob3={ob1,ob2}
 
console.log(Object.assign({},ob1,ob2));

console.log({...ob1,...ob2});

console.log(ob3);


//imp
console.log(Object.keys(insta));
console.log(Object.values(insta));
console.log(Object.entries(insta));

//to check the variable
console.log(insta.hasOwnProperty('naam'));