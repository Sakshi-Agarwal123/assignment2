let count, copy, remainder, sumofdigits;
for (let i = 0; i <= 100000; i++) {
    sumofdigits = 0;
    count = 0;
    copy = i;
    while (copy >= 1) {
        copy = copy / 10;
        count=count+1;
    }
    copy = i;
    while (copy >= 1) {
        remainder = Math.floor(copy % 10);
        sumofdigits = sumofdigits + Math.pow(remainder, count);
        copy = copy / 10;

    }
    if (sumofdigits == i) {
        console.log(i);
    }
}