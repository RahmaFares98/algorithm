function reverse(x) {
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;

    var sign = Math.sign(x);// returns the sign of the number x. It will be 1 for positive numbers, -1 for negative numbers, and 0 for zero.


    var reversed_x = parseInt(Math.abs(x).toString().split('').reverse().join('')) * sign;
console.log(reversed_x)
    if (reversed_x < INT_MIN || reversed_x > INT_MAX) {
        return 0;
    }

    return reversed_x;
}
console.log(reverse(123));           
console.log(reverse(-123));        
console.log(reverse(120));           
console.log(reverse(1534236469));    
