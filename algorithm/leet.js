//https://leetcode.com/problems/valid-palindrome/description/
function isPalindrome(s) {
    var left = 0;
    var right = s.length - 1;

    function isAlphanumeric(char) {
        return (char >= 'a' && char <= 'z') || 
               (char >= 'A' && char <= 'Z') || 
               (char >= '0' && char <= '9');
    }

    function toLowerCase(char) {
        if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode(char.charCodeAt(0) + 32);
        }
        return char;
    }

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }

        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        if (toLowerCase(s[left]) !== toLowerCase(s[right])) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome(" ")); // Output: true
