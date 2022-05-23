function getInput(question = "nhap vao so cua ban: ") {
    let inputStr = prompt(question)
    return inputStr;
}

// arrow function

const askQuestion = (question = " nhap so cua ban: ") => {
    console.log("askQuestion");
    let inputStr = prompt(question);
    return inputStr;
}
//--------------------------
let caculatar = {
    a: 10,
    b: 20,
    sum: function () {
        console.log(this.a + this.b);
    },
    sub: () => {
        console.log(this.a + this.b);
    }
}
askQuestion()
caculatar.sum();
caculatar.sub();