function fact(number){
    if(number==0||number==1){
        return 1;
    }
    else{
        return number*fact(number-1);
    }
}
let factorial;
let number=[4,3,2,10];
for(let i in number)
{
     factorial = fact(number[i]);
     console.log(factorial);
}
