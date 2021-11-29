const collectOddValues = (arrays) => {
    let oddArray = [];

    const collectOdd = (values) => {
        if (values.length === 0) return;
        if (values[0] % 2 != 0) {
            oddArray.push(values[0]);
        }
        // values.shift();
        // collectOdd(values);

        collectOdd(values.slice(1));
    }

    collectOdd(arrays);
    return oddArray;
}

const collectOddValues2 = (arrays) => {
    let oddArray = [];

    if (arrays.length === 0) return oddArray;
    if (arrays[0] % 2 != 0) {
        oddArray.push(arrays[0]);
    }

    return oddArray = oddArray.concat(collectOddValues(arrays.slice(1)));
}

const collectOddValues3 = (arrays) => {
    let oddArray = [];
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] % 2 !== 0) oddArray.push(arrays[i]);
    }
    return oddArray;
}

//console.log(collectOddValues([1, 3, 2, 4, 5, 6, 7, 8]));
console.log(collectOddValues2([1, 3, 2, 4, 5, 6, 7, 8]));