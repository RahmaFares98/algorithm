//https://leetcode.com/problems/reverse-integer/
function reverse(x) {
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    let sign = Math.sign(x);
    let reversed_x = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;

    if (reversed_x < INT_MIN || reversed_x > INT_MAX) {
        return 0;
    }

    return reversed_x;
}

console.log(reverse(123));           // Output: 321
console.log(reverse(-123));          // Output: -321
console.log(reverse(120));           // Output: 21
console.log(reverse(1534236469));    // Output: 0 (since it overflows)

//https://leetcode.com/problems/two-sum/description/
function twoSum(nums, target) {
    // Create an object to store the value and its index
    const numDict = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (complement in numDict) {
            return [numDict[complement], i];
        }

        numDict[num] = i;
    }

    throw new Error("No two sum solution");
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console

