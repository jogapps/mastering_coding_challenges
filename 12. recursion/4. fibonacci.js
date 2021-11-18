let fib = [];
const fibonacci = (n) => {
    if(n == 1) return null;
    return fib.push(fibonacci(n ) + fibonacci(n - 1));
}

console.log(fibonacci(6));


const factorial = (num) => {
    if(num === 1) return 1;
    return value = num * factorial(num - 1);
}

const factorial2 = (num) => {
    let value = 1;
    for(let i = num; i <= num && i > 0; i--) {
        value = value * i;
    }
    return value;
}

const factorial3 = (num) => {
    let value = 1;
    for(let i = 2; i <= num; i++) {
        value = value * i;
    }
    return value;
}

console.log(factorial2(3));