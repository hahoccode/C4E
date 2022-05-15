// tam giác vuông đối xứng

// let result = '';
// const row = 6;
// const column = 11;


// for (let i = 1; i <= row; i++) {
//     for (let j = 1; j <= column; j++) {
//         if ((j <= column - row + i) && (j >= column - row - i)) {
//             result += '*';
//             console.log(i, j)
//         }
//         else {
//             result += ' ';
//         }


//     }
//     result += "\n";
// }
// console.log(result);




//hinh tam giac can 2 chieu voi nhau

let result = '';

const column = 5;

for (let i = 0; i < column; i++) {
    for (let k = 0; k < i; k++) {
        result += " ";
    }
    for (let j = column*2-2; j > i*2-1; j--) {
        result += '*';
        console.log(i, j);
    }
    
    result += '\n';
}

for (let i = 1; i <= column; i++){
    for (let k = column; k > i; k--) {
        result += ' ';
    }
    for (j = 1; j <= i*2-1; j++) {
        result += '*';
        console.log(i, j);
    }
    result += '\n';
}


console.log(result);


// const canh = 5;
// let tri = '';
// for (let a = 1; a <= canh; a++) {
//     for (let b = 1; b <= 2 * a - 1; b++) {
//         if (a>a+b-canh){
//             tri+='*';
//             console.log(a,b);
//         }
//         else {
//             tri+='';
//         }
//     }
//     tri += "\n";
// }
// console.log(tri)




// dap an ve tam giac can

// let result=''
// const hang=5

// for(let i=1 ; i<=hang ;i++ ) {
//     for(let j=1 ; j<i; j++) {
//             result += ' '
//         }
//     for(let k=1 ; k<= (hang * 2 - (2 * i - 1)); k++) {        
//         result += '*';
//         console.log(i,k);
//     }   

//     result += '\n';
// }
// console.log(result);


