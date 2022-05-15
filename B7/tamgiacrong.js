//tam giác rỗng

let result ='';
let column = 8;

for (let i = 1; i <= column; i++) {
    for (let j = 1; j <= i; j++) {
        if (j-i== 0|| j==1 || i==column ) {
            result+='*';
            console.log(i,j)
        } else {
            result+=' ';
        }
    }       
    result += '\n' ;
}

console.log(result);
