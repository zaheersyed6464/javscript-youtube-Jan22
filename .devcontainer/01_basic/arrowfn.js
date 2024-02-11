const zah={
    web:"zaheer",
    age:20,
    extra:function(){
        console.log(`${this.web},welocme`);
        console.log(this);
    }

}
zah.extra()
// zah.web="sami"
// zah.extra()

console.log(this);

function chai(){
    const user="zaheer"
   
       // console.log(this.user);
   
}
chai()

//arrow =>function

const tea=() =>{
    const age=20
    console.log(this);
}
// tea()

const add=(num,num1)=>{
    return num+num1
}
// console.log(add(2,2))

const add1=(num,num1)=>num+num1
console.log(add(2,2))

const naam=(num1,num2)=>({user:"zaheer"})
console.log(naam(1,1));

const arr=[1,2,3,4,5]
arr.forEach()
l

 
