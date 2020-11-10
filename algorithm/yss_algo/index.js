
var shuffle = function(num) {
    const arr = String(num).split('');
    let aLn = arr.length - 4;

    for (let i = arr.length -1; i > aLn; i--) {
        const j = Math.floor(Math.random() * (i - aLn + 1) + aLn);
        [arr[j], arr[i]] = [arr[i], arr[j]]
    }
    while (arr.length > 4) {
        arr.shift();
    }
    return arr.join('');
};

console.log(shuffle(7777777773610));