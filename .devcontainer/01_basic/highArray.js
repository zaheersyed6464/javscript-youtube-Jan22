// let arr=10
// arr=3
// console.log(arr);

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
    console.log(i.namee);
})