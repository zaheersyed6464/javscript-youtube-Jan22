// let arr=10
// arr=3
// console.log(arr);


/* 
const a=b.filter(() => {})
const a=b.foreach(()=> {})
const a=b.amp(() => {})
*/

// const arr=[1,2,3,4,5]
const arr="zah eerr"
for (const i of arr) {
    if(i==" "){continue;}
    // console.log(i);
}

const map= new Map()
map.set("IN","INDIA")
map.set("USA","AMERICA")
map.set("FR","france")

// console.log(map);
for (const [i,value] of map) {
    // console.log(i,':-',value);
}

const myObj={
    naam:'zaheer',
    age:20,
    btech:'3d yr'
}

for (const i in myObj) {
    // console.log(i,myObj[i]);
}
const arr1=[1,2,3,4,5]

arr1.forEach(function (i){
    // console.log(i);
})

arr1.forEach((i)=>{
//console.log(i);
}  )

function print(i) {
  //  console.log(i);
}

arr1.forEach(print)


const a=[
    {namee:"zaheer",
agee:20
},
    {namee:"sami",
    agee:10},
    {namee:"zaami",
    agee:30}
]

a.forEach((i)=>{
    // console.log(i.namee);
})


const b=a.forEach((i)=>{
    // console.log(i);
})
// console.log(b);
//foreach==> it returns undefined at finall


//filter
const num=[1,2,3,4,5,6,7,8,9]
const c=num.filter((i)=>
//i>5
    // if(i>5){
    //     console.log(i);
    // }
    //if we want to write in{} then it has scope so use return keyword
    {return i>5}
)
// console.log(c);

const d=[]
num.forEach((i)=>{
    if(i>4){
        d.push(i)
    }
})
// console.log(d);

//chainig********
const num1=[1,2,3,4,5,6,7,8,9]

const z=num1.map((i)=>i*10)
.filter((i)=>i>=50)
.map((i)=>i==90)
console.log(z);


