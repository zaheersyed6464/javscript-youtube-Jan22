 const score=402.9234
 console.log(score);

 const score1=new Number(score);
 console.log(score1);
 
 console.log(score1.toString().length);
 console.log(score1.toFixed(2));

 console.log(score1.toPrecision(4));


 const hun=100000000
 console.log(hun.toLocaleString() );

 console.log((Math.random()*10)+1);
 console.log(Math.floor(Math.random()*10)+1);


 const min=10
 const max=20
  console.log(Math.floor(Math.random()*(max-min+1))+min);