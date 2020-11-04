/**
 * @param {string} s
 * @return {number}
 */
const romanSymbol = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}; 

var romanToInt = function(s) {
    const Array = s.split('');
    let sum = 0;
    let num = 0;
    let l = Array.length
    
    while (l--){
        const f = Array[l]
        const n = romanSymbol[f]
        if (num <= n) {
            sum += n;
        } else {
            sum -= n;
        }
        num = n;
    }
    return sum;
};

console.log(romanToInt("MCMXCIV"));


// Example 5:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
