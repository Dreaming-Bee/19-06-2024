// function calc(operator) {
//     let number1 = document.getElementById("number01").value;
//     let number2 = document.getElementById("number02").value;
//     number1 = Number(number1);
//     number2 = Number(number2);
//     console.log(typeof number1);
//     console.log(typeof number2);
//     let lblOutPut = document.getElementById("outPut");
//     let op;
//     switch (operator) {
//         case "+":
//             op = number1 + number2;
//             break;
//         case "-":
//             op = number1 - number2;
//             break;
//         case "*":
//             op = number1 * number2;
//             break;
//         case "/":
//             op = number1 / number2;
//             break;
//     }
//     lblOutPut.innerHTML = op;
// }
const customer ={
    name : "saman",
    age : 12,
    run: function(){
         console.log("run............");
    }
}

customer.run();

function sample(){
    console.log("hello...")
}

let sample = function (){
    console.log("hello...")
}

let sample = ()=>{
    console.log("hello...")
}

let sample = ()=>console.log("hello...");

let numbers = [10,34,45,65,12,23,987,567,345,23,43,19];

console.log(numbers.sort());