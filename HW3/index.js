function isCorrectFunc(func) {
    let funcArray = ['add', 'sub', 'mult', 'div'];
    return funcArray.indexOf(func) + 1;
}

function inputFunction() {
    let func = prompt('What is function you want will do? (add, sub, mult, div)');
    while(!isCorrectFunc(func)) {
        func = prompt('Error: please, use correct variants: add, sub, mult, div');
    }

    return func;
}

function inputNumber() {
    let number = Number(prompt('Please, input number'));

    while(isNaN(number)) {
        number = Number(prompt('Error, please, input number again'));
    }

    return number;
}

let flag = true;

while(flag) {
    let func = inputFunction();
    let firstNumber = inputNumber();
    let secondNumber = inputNumber();

    switch(func) {
        case 'add':
            alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
            break;
        case 'sub':
            alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
            break;
        case 'mult':
            alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            break;
        default:
            alert(`${firstNumber} * ${secondNumber} = ${firstNumber / secondNumber}`);
    }

    flag = confirm('Do you want continue?');
}

