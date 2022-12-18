function inputNumber() {
    let number = Number(prompt('Please, input number'));

    while(!number && isNaN(number)) {
        number = Number(prompt('Error, please, input number again'));
    }

    return number;
}

function mathFunction(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    let deduc = firstNumber - secondNumber;
    let mult = firstNumber * secondNumber;
    let divis = (firstNumber / secondNumber).toFixed(2);
    alert(`${firstNumber} + ${secondNumber} = ${sum};\n${firstNumber} - ${secondNumber} = ${deduc};\n${firstNumber} * ${secondNumber} = ${mult};\n${firstNumber} / ${secondNumber} = ${divis}`)
}

let firstNumber = inputNumber();
let secondNumber = inputNumber();

console.log(firstNumber, secondNumber);

mathFunction(firstNumber, secondNumber);
