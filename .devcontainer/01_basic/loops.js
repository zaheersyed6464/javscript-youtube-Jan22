 const array=[1,2,3,4,5,6]
 for (let index = 0; index < array.length; index++)
 {
    const element = array[index];
    if (element%2==0) {
      if(element==2){
       
        
        continue;
      }console.log(`${element}`);
     
    }
    
    
 }
 let s=1;
 do{
    console.log(`${s}`);
    s++;
 }while(s<10);
