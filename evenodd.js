let number=[2,3,4,5,6,100,55,0,0];
let even_number=0,odd_number=0,zero=0;
for(let i in number){
    if(number[i]==0){
        zero=zero+1;
    }
   else if(number[i]%2==0){
        even_number=even_number+1;
    }
    else {
        odd_number=odd_number+1;
    }
}
console.log("count of even numbers"+ " " +even_number);
console.log("count of odd numbers"+ " " +odd_number);
console.log("count of zeroes numbers"+ " " +zero);