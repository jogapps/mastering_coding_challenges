const mergeSortedArrays1 = (arr1, arr2) => {
    const mergedArray = [];
    let array1CurrentItem = arr1[0];
    let array2CurrentItem = arr2[0];
    let array1CurrentIndex = 1;
    let array2CurrentIndex = 1;
    while(array1CurrentItem || array2CurrentItem) {
        if(!array2CurrentItem ||  array1CurrentItem < array2CurrentItem) {
            mergedArray.push(array1CurrentItem);
            array1CurrentItem = arr1[array1CurrentIndex];
            array1CurrentIndex++;
        } else {
            mergedArray.push(array2CurrentItem);
            array2CurrentItem = arr2[array2CurrentIndex];
            array2CurrentIndex++;
        }
    }
    return mergedArray;

}

const mergeSortedArrays2 = (arr1, arr2) => {
    const mergedArray = [];
    
    let array1CurrentIndex = 0;
    let array2CurrentIndex = 0;
    let array1CurrentItem = arr1[array1CurrentIndex];
    let array2CurrentItem = arr2[array2CurrentIndex];
    while(array1CurrentItem || array2CurrentItem) {
        if(!array2CurrentItem ||  array1CurrentItem < array2CurrentItem) {
            mergedArray.push(array1CurrentItem);
            array1CurrentIndex++;
            array1CurrentItem = arr1[array1CurrentIndex];    
        } else {
            mergedArray.push(array2CurrentItem);
            array2CurrentIndex++;
            array2CurrentItem = arr2[array2CurrentIndex];
        }
    }
    return mergedArray;

}

const mergeSortedArrays3 = (arr1, arr2) => {
    let mergedArray = [];
    while(arr1.length && arr2.length) {
        if(arr1[0] < arr2[0]) {
            mergedArray.push(arr1.shift());
        } else {
            mergedArray.push(arr2.shift());
        }
    }

    return [...mergedArray, ...arr1, ...arr2];
}

console.log(mergeSortedArrays2([0, 3, 4], [3, 4, 5, 6, 20, 30]));