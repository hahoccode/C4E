const list = [50, 30, 20, 40, 10];
for (i = 0; i < list.length - 1; i++) {
    let min = list[i];//gan min =list i
    let index = i; // gan 1 gia tri cho i
    for (let j = i + 1; j < list.length; j++) {
        if (min > list[j]) {
            min = list[j];
            index = j;// gan index bang j
        }
    }
    list[index] = list[i];
    list[i] = min;
}
console.log(list)





    // for (let i = 1; i < myNum; i++ ) {
//     let str = "";
//     for (let j = 1; j < myNum; j++) {
//         str += `$`
//     }
// }

