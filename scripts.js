function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a/b;
}
function operate(operation, num1, num2) {
  return operation(num1, num2)
}

const display = document.querySelector('.display')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')

const allNumbers = [one, two, three, four, five, six, seven, eight, nine, zero]

let firstNum;
let secondNum;

let displayTextInNum;

let presentingNums = false;
for (let i = 0; i < allNumbers.length; i++) {
  let num = allNumbers[i].textContent
  allNumbers[i].addEventListener('click', () => {
    if (presentingNums == false) {
      display.textContent = "";
      presentingNums = true;
      display.textContent += num;
    } else if (presentingNums == true) {
      display.textContent += num;
    }

    displayTextInNum = parseInt(display.textContent)
  })
}

const adi = document.querySelector('.addition')
const sub = document.querySelector('.subtraction')
const mul = document.querySelector('.multiplication')
const dvi = document.querySelector('.division')
const equ = document.querySelector('.equals')

let operation;
let finalAnswer;

let operatorsClicked = 0;
adi.addEventListener('click', () => {
  operatorsClicked += 1;
  presentingNums = false;

  if (operatorsClicked == 1) {
    firstNum = displayTextInNum;
    operation = add;
  } else if (operatorsClicked > 1) {
    secondNum = displayTextInNum
    firstNum = operate(operation,firstNum,secondNum)
    operation = add
    display.textContent = firstNum;
  }

  console.log("firstNum", firstNum)
  console.log("secondNum", secondNum)
  console.log("operation", operation)
  console.log("finalAnswer", finalAnswer)
  console.log("operatorsClicked", operatorsClicked)
});
sub.addEventListener('click', () => {
  operatorsClicked += 1;
  presentingNums = false;

  if (operatorsClicked == 1) {
    firstNum = displayTextInNum;
    operation = subtract;
  } else if (operatorsClicked == 2) {
    secondNum = displayTextInNum
    firstNum = operate(operation,firstNum,secondNum)
    operation = subtract
    display.textContent = firstNum;
  }

  console.log("firstNum", firstNum)
  console.log("secondNum", secondNum)
  console.log("operation", operation)
  console.log("finalAnswer", finalAnswer)
  console.log("operatorsClicked", operatorsClicked)
});
mul.addEventListener('click', () => {
  operatorsClicked += 1
  presentingNums = false;

  if (operatorsClicked == 1) {
    firstNum = displayTextInNum;
    operation = multiply;
  } else if (operatorsClicked > 1) {
    secondNum = displayTextInNum
    firstNum = operate(operation,firstNum,secondNum)
    operation = multiply;
    display.textContent = firstNum;
  }

  console.log("firstNum", firstNum)
  console.log("secondNum", secondNum)
  console.log("operation", operation)
  console.log("finalAnswer", finalAnswer)
  console.log("operatorsClicked", operatorsClicked)
});
dvi.addEventListener('click', () => {
  operatorsClicked += 1
  presentingNums = false;

  if (operatorsClicked == 1) {
    firstNum = displayTextInNum;
    operation = divide;
  } else if (operatorsClicked > 1) {
    secondNum = displayTextInNum
    firstNum = operate(operation,firstNum,secondNum)
    operation = divide;
    display.textContent = firstNum;
  }

  console.log("firstNum", firstNum)
  console.log("secondNum", secondNum)
  console.log("operation", operation)
  console.log("finalAnswer", finalAnswer)
  console.log("operatorsClicked", operatorsClicked)
});

equ.addEventListener('click', () => {
  secondNum = displayTextInNum
  if (operation == add) {
    finalAnswer = operate(add,firstNum,secondNum)
    display.textContent = finalAnswer;

    console.log(finalAnswer)
  } else if (operation == subtract) {
    finalAnswer = operate(subtract,firstNum,secondNum)
    display.textContent = finalAnswer;

    console.log(finalAnswer)
  } else if (operation == multiply) {
    finalAnswer = operate(multiply,firstNum,secondNum)
    display.textContent = finalAnswer;

    console.log(finalAnswer)
  } else if (operation == divide) {
    finalAnswer = operate(divide,firstNum,secondNum)
    display.textContent = finalAnswer;

    console.log(finalAnswer)
  }

  console.log("firstNum", firstNum)
  console.log("secondNum", secondNum)
  console.log("operation", operation)
  console.log("finalAnswer", finalAnswer)
  console.log("operatorsClicked", operatorsClicked)
})