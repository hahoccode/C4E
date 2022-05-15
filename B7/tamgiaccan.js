// hinh tam giac can nguoc

let result=''
const hang=11


for(let i=1 ; i<=hang ;i++ ) {
    for(let j=hang ; j>i; j--) {
            result += " ";
            console.log(i,j);
        }
    for(let k=1 ; k<= i; k++) {        
        result += ' *'
    }   
    result += '\n';
}
console.log(result);