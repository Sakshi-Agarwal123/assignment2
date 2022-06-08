// Fibonacci numbers

let firstFibonnacciNumber1=0,secondFibonaccinumber2=1,fibonacciNumber; //Use descriptive variable names
console.log(firstFibonnacciNumber1);
console.log(secondFibonaccinumber2);
while(firstFibonnacciNumber1+secondFibonaccinumber2<=50000){
fibonacciNumber=firstFibonnacciNumber1+secondFibonaccinumber2;
console.log(fibonacciNumber);
firstFibonnacciNumber1=secondFibonaccinumber2;
secondFibonaccinumber2=fibonacciNumber;
}

