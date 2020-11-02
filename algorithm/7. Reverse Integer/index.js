var reverse = function(x) {
    const xrev = Number(String(Math.abs(x)).split('').reverse().join(''));
    const max = 2147483647;
    const min = -2147483648;
    if (max < xrev || xrev < min){
        return 0;
    } else if (x >= 0){
        return xrev;
    } else {
        return xrev * -1;
    }
};
console.log(reverse(-123));