let result = '';
const column = 10;

for (let i = 1; i <= column / 2; i++) {
    for (let j = 1; j <= column; j++)
        if ((j === column / 2 + i) || (j === column / 2 - i + 1)) {
            result += '*';
        } else {
            result += ' ';
        }
    result += '\n';
}

for (let i = column / 2 +1; i <= column; i++) {
    for (j = 0; j <= column; j++)
        if ((j === column / 2 + 1 - i) || (j === column / 2 + i - 2)) {
            result += '*';
            console.log(i, j);
        } else {
            result += ' ';
        }
    result += '\n';
}
// for (let i = 1; i <= column; i++) {
//     for (j = 1; j <=column; j++)
//         if ((j === column / 2 - 5 + i) || (j === column / 2 - i + 1 + 5)) {
//             result += '*';
//             console.log();
//         } else {
//             result += ' ';
//         }
//     result += '\n';
// }
// for (i = column / 2 + 1; i <= column; i++) {
//     for (j = 1; j > column; j--) {
//         if ((j === 1 + i - column / 2) || (j === column / 2 + i - 1)) {
//             result += '*';
//         } else {
//             result += ' ';

//         }
//         result += '\n';
//     }

// }
console.log(result);