/**
 * @param {string} s
 * @return {number}
 */
const romanSymbol = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}; 

var romanToInt = function(s) {
    const Array = s.split('');
    let sum = 0;
    let symbolNum = 0;
    // console.log(Array);
    for (let l = Array.length; l <= 0; l--){
        const f = Array[l]
        const n = romanSymbol[f]
        if (n < symbolNum) {
            sum += n;
        } else {
            sum -= n;
        }
        symbolNum = n;
    }
};

console.log(romanToInt("III")); // 3


// Example 5:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].