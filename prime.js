let number=[4,5,7,12,3,1,2];
let flag;
for(let i in number){
    flag=false;
    for(let j=2;j<=Math.sqrt(number[i]);j++){
    if(number[i]%j==0){
        flag = true;
        break;
    }}
    if(flag==true){
        console.log(number[i], "Number is not prime")
    }
    else if(number[i]==1){
        console.log(number[i], "Number is neither prime nor composite")
    }
    else{
        console.log(number[i], "Number is prime")
    }
} 

