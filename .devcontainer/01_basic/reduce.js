const a=[1,2,3,4]

// const b=a.reduce(function(acc,curval){
//     console.log(`acc=${acc} curval=${curval}`);
//     return acc+curval
// },10 /*it is acc value*/)
const b=a.reduce((i,j)=>i+j,10)


console.log(b);