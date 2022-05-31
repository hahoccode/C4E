let a = prompt("");
let b = prompt("");
function viewSnt() {
    let flag;
    for (i = a + 1; i <= b; i++) {
        flag = 1;
        for (let j = 2; j < i / 2; j++) {
            if (i%j==0){
                flag=0;
                break;
            }
        }
        if (flag==1){
            console.log(i);
        }
    }

}
viewSnt()