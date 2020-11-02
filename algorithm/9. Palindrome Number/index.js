/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xrev = Number(String(Math.abs(x)).split('').reverse().join(''));
    // const max = 2147483647;
    // const min = -2147483648;
    // if (max < xrev || xrev < min){
    //     return false;
    // } else if (x === xrev){
    //     return true;
    // } else {
    //     return false;
    // }
    if (x === xrev){
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(121));

