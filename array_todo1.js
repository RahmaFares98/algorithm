
// Push Front
function pushFront(arr, value) {
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = value;
    return arr;
}

console.log(pushFront([5,7,2,1], 8)); // [8,5,7,2,1]
console.log(pushFront([929], 7)); // [7,929]


// Pop Front
function popFront(arr) {
    if (arr.length == 0) return undefined;
    const front = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];//  [0,5,10,15] arr[0]=arr[1] arr[0] become 5 in first example

    }
    arr.length = arr.length - 1;
    console.log(arr); // arr [...]
    return front; // const if not will give me undifined 
    
}

console.log(popFront([0,5,10,15])); // 0, with [5,10,15] printed in the function
console.log(popFront([4,5,7,9])); // 4, with [5,7,9] printed in the function

// Insert At
function insertAt(arr, index, value) {
    for (var i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
        console.log(arr)
    }
    arr[index] = value; //extend the array
    return arr;
}

console.log(insertAt([300,4300,5], 2, 311)); // [100,200,311,5]
console.log(insertAt([91,323,7], 1, 42)); // [9,42,33,7]


//  Remove At
function removeAt(arr, index) {
    if (index < 0 || index >= arr.length) return undefined;
    const removedValue = arr[index];
    for (var i = index + 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.length = arr.length - 1;

    console.log(arr);
    return removedValue;
}

console.log(removeAt([1000,3,204,77], 1)); // 3, with [1000,204,77] printed in the function
console.log(removeAt([8,20,55,44,98], 3)); // 44, with [8,20,55,98] printed in the function

//  Swap Pairs
function swap(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}
console.log(swap([1,2,3,4])); // [2,1,4,3]
console.log(swap(["Brendan",true,42])); // [true,"Brendan",42]


// BONUS: Remove Duplicates
function removeDupes(arr) {
    if (arr.length == 0) return arr;
    var writeIndex =1;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) {
            arr[writeIndex] = arr[i];
            console.log(arr)
            writeIndex++;
        }
    }
    arr.length = writeIndex;
    return arr;
}

console.log(removeDupes([-2,-2,3.14,5,5,10])); // [-2,3.14,5,10]
console.log(removeDupes([9,19,19,19,19,19,29])); // [9,19,29]



