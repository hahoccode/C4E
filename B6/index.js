let A = true;
let B = true;
let C = false;

let myBool= ((A || B) && C) || (B  %% (A ||C));
let myNotBool = false;
console.log(myBool);
console.log(myNotBool);