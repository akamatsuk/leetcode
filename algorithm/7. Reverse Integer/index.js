var reverse = function(x) {
    const xrev = Number(String(Math.abs(x)).split('').reverse().join(''));
    if (x >= 0){
        return xrev;
    } else {
        return xrev * -1;
    }
};
console.log(reverse(123));