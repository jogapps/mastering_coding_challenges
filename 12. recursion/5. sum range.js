const sumRange = (num) => {
    if(num === 1) return 1;
    return value = num + sumRange(num - 1);
}

console.log(sumRange(3));

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