let values = 0;
const recursiveFactorial = (n) => {
    if(n == 1) return 1;
    return  values = n * (recursiveFactorial(n-1));
}

const iterativeFactorial = (n) => {
    let result = 1;
    for(let i = n ; i <= n && i > 0; i--) {
        result = result * i; 
    }
    return result;
}

const iterativeFactorial2 = (n) => {
    let result = 1;
    for(let i = 2 ; i <= n; i++) {
        result = result * i; 
    }
    return result;
}

let value = recursiveFactorial(4);
//let value2 = iterativeFactorial(4);
console.log(iterativeFactorial2(5));
console.log(value);
