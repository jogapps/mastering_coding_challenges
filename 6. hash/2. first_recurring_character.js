const firstRecurringCharacter = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[i] == arr[j]) return arr[i];
        }
    }
    return null;
} // 0(n ^ 2")

const firstRecurringCharacter2 = (arr) => {
    let recurringObject = {}; 
    for(let i = 0; i < arr.length; i++) {
        if(!recurringObject[arr[i]]) {
            recurringObject[arr[i]] = 1;
        } else return arr[i];
    }
} // 0(n)

console.log(firstRecurringCharacter2([1, 4, 5, 5, 4, 5, 5]));