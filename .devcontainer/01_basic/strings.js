let naam="zaheer"
let age=21

console.log(`my name is ${naam} and my age ${age}`);

const game=new String('z-a-h-e-e-r');
console.log(game[0]);
//position of char in string
console.log(game.indexOf('e'));
// to get sub string
const game1=game.substring(1,3)
console.log(game1);
const game2=game.slice(-5,4)
console.log(game2);
//for removing space use trim
//for replacing value in strings
const n='www.zaheersyed6464.com'
console.log(n.replace('6464','quadri'));
console.log(n.includes('6464'));


//convert strings to arrays
const g=game.split('-')
console.log(g);
 