const marvel=["ironman","hulk","spdr"]
const dc=["flash","batman","superman"]
//marvel.push(dc)
// console.log(marvel);

//const z=marvel.concat(dc)
//console.log(z);


//spread op
const z=[...marvel,...dc]
console.log(z);


//flat op..used for merging all sub arrays into 1 array
const s=[1,2,3,[3,2,1],4,5,[6,7,[8,9],10]]
console.log(s.flat(Infinity));

//isArray , from, of
//checking and convertng into array
console.log(Array.isArray("zaheer"));
console.log(Array.from("12.356"));
console.log(Array.from({}));



 


