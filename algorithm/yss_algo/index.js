
// var shuffle = function(num) {
//     const arr = String(num).split('');
//     let aLn = arr.length - 4;

//     for (let i = arr.length -1; i > aLn; i--) {
//         const j = Math.floor(Math.random() * (i - aLn + 1) + aLn);
//         [arr[j], arr[i]] = [arr[i], arr[j]]
//     }
//     while (arr.length > 4) {
//         arr.shift();
//     }
//     return arr.join('');
// };

var shuffle = function(num) {
    const arr = String(num).split('');
    while (arr.length > 4) {
        arr.shift();
    }
    for (let i = arr.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[j], arr[i]] = [arr[i], arr[j]]
    }

    return arr.join('');
};

console.log(shuffle(7777777773610));