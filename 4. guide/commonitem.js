// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// for example [1, 2, 3, ,4] and [6, 7, 8] return false
// while ["good", "boy", "girl"] and ["girl", "women", "ladies"] return true

const commonItems = (arr1, arr2) => {
    for (let item1 of arr1) {
        for(let item2 of arr2) {
            if(item1 === item2) return true;
        }
    }
    return false;
}

//console.log(commonItems([1, 2, 3, 4, 10], [6, 7, 8])); 0(a * b)

const commonItems2 = (arr1, arr2) => {
    let objectFromFirstArray = {};
    
    arr1.forEach(element => {
        if(!objectFromFirstArray[element]) objectFromFirstArray[element] = true;
    });

    for(let item of arr2) { 
        if(objectFromFirstArray[item]) return true; 
    }

    return false;
} // o(a + b)

function commonItems3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
  } // o(a + b)

console.log(commonItems3([8, 6, 1, 2, 3, 4, 10, 2 ], [6, 7, 8])); 
