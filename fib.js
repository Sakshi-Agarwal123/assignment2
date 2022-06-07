// Fibonacci numbers

let number1=0,number2=1,temp;
console.log(number1);
console.log(number2);
while(number1+number2<=5000){
temp=number1+number2;
console.log(temp);
number1=number2;
number2=temp;
}

