let fib = [];
const fibonacci = (n) => {
    if(n == 1) return null;
    return fib.push(fibonacci(n ) + fibonacci(n - 1));
}

console.log(fibonacci(6));