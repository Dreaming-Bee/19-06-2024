function calc(operator) {
    let number1 = document.getElementById("number01").value;
    let number2 = document.getElementById("number02").value;
    number1 = Number(number1);
    number2 = Number(number2);
    console.log(typeof number1);
    console.log(typeof number2);
    let lblOutPut = document.getElementById("outPut");
    let op;
    switch (operator) {
        case "+":
            op = number1 + number2;
            break;
        case "-":
            op = number1 - number2;
            break;
        case "*":
            op = number1 * number2;
            break;
        case "/":
            op = number1 / number2;
            break;
    }
    lblOutPut.innerHTML = op;
}
