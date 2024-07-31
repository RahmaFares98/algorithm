//reverse 
function reverseArray(arr) {
    var left = 0;
    var right = arr.length - 1;

    while (left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
        console.log(arr)
    }

    return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]


//rotate
function rotateArr(arr, shiftBy) {
    var len = arr.length;
    shiftBy = ((shiftBy % len) + len) % len; // To handle negative shifts and shifts larger than array length

    function reverse(subArr, start, end) {
        while (start < end) {
            var temp = subArr[start];
            subArr[start] = subArr[end];
            subArr[end] = temp;
            start++;
            end--;
        }
    }
    // Reverse the whole array
    reverse(arr, 0, len - 1);
    // Reverse the first part
    reverse(arr, 0, shiftBy - 1);
    // Reverse the second part
    reverse(arr, shiftBy, len - 1);
    return arr;
}

console.log(rotateArr([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArr([1, 2, 3, 4, 5], -2)); // [3, 4, 5, 1, 2]


//filter
function filterRange(arr, min, max) {
    var writeIndex = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[writeIndex] = arr[i];
            writeIndex++;
        }
    }

    arr.length = writeIndex;
    return arr;
}
console.log(filterRange([1, 2, 3, 4, 5, 6, 7], 3, 6)); // [3, 4, 5, 6]
console.log(filterRange([10, 20, 30, 40, 50], 15, 45)); // [20, 30, 40]

//Concat
function arrConcat(arr1, arr2) {
    var result = [];
    var i;

    for (i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }

    for (i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }

    return result;
}

// Test cases
console.log(arrConcat(['a', 'b'], [1, 2])); // ['a', 'b', 1, 2]
console.log(arrConcat([3, 4], [5, 6]));     // [3, 4, 5, 6]
