 const a=8
 if(a%2==0){
    console.log("true");
 }
//  console.log("zah");
if(a===8)console.log("true"),console.log("false"),console.log("yes");
//""=falsee
//[]=true
// 0,-0,BigInt,null,undefined,NaN=false
//"0",'false',"  ",{},function(){}=true
const obj={}
if(Object.keys(obj).length==0){
    console.log("obj is empty");
}