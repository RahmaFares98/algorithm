//remove Blanks
function removeBlanks(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    return result;
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ")); // "PlayThatFunkyMusic"
console.log(removeBlanks("I can not BELIEVE it's not BUTTER")); // "IcannotBELIEVEit'snotBUTTER"


//get digit
function getDigits(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== " ") {
            result += str[i];
        }
    }
    return Number(result);
}

console.log(getDigits("abc8c0d1ngd0j0!8")); // 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); // 1357924680


//Acronyms
function acronym(str) {
    var result = "";
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            result += words[i][0].toUpperCase();
        }
    }
    return result;
}
console.log(acronym(" there's no free lunch - gotta pay yer way. ")); // "TNFL-GPYW"
console.log(acronym("Live from New York, it's Saturday Night!")); // "LFNYISN"

// Count Non-Spaces
function countNonSpaces(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            count++;
        }
    }
    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy")); // 29
console.log(countNonSpaces("Hello world !")); // 11

// Remove Shorter Strings
function removeShorterStrings(arr, minLength) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= minLength) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)); // ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)); 