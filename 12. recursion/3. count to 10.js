const countToTen = (n) => {
    console.log(n);
    if(n - 1 > 0) {
        countToTen(n - 1);
    }
}

const sumToTen = (n) => {
    if(n == 1) return 1;
    return fib = n + sumToTen(n - 1);
}

const countDown = (n) => {
    if(n <= 0) {
        console.log("Done...");
        return;
    }
    console.log(n);
    n--;
    countDown(n);
}

const countUp = (n) => {
    let count = 0;
    const count2 = (val) => {
        if(val > n ) {
            console.log("Done");
            return;
        }
        console.log(val);
        val++;
        count2(val);
    }
    count2(count);
}


// console.log(countToTen(10));
// console.log(sumToTen(3));
countUp(10);