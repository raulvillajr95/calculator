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
const period = document.querySelector('.period')

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
    displayTextInNum = parseFloat(display.textContent)
  })
}

// Keyboard Support
window.addEventListener('keydown', () => {
  let num = window.event.key
  let numbers = ['0','1','2','3','4','5','6','7','8','9']
  if (numbers.includes(num)) {
    if (presentingNums == false) {
      display.textContent = "";
      presentingNums = true;
      display.textContent += num;
    } else if (presentingNums == true) {
  
      display.textContent += num;
    }
  } else if (num == 'Backspace') {
    backspace()
  }
})

function checkForDecimals() {
  let periods = display.textContent.split('')

  let periodCount = 0;
  
  for (let i = 0; i < periods.length; i++) {
    if (periods[i] == '.') {
      periodCount += 1;
    }
  }

  return periodCount;
}

period.addEventListener('click', () => {
  if (checkForDecimals() >= 1) {
    return;
  }
  display.textContent += ".";
})

const adi = document.querySelector('.addition')
const sub = document.querySelector('.subtraction')
const mul = document.querySelector('.multiplication')
const dvi = document.querySelector('.division')
const equ = document.querySelector('.equals')
const ce = document.querySelector('.clear')
const back = document.querySelector('.backspace')

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

    if(operation == divide && secondNum == 0) {
      display.textContent = "Error";
        setTimeout(() => {
          clear()
        }, 2000)
      return;
    }
    
    firstNum = operate(operation,firstNum,secondNum)
    operation = add
    display.textContent = firstNum;
  }
});
sub.addEventListener('click', () => {
  operatorsClicked += 1;
  presentingNums = false;

  if (operatorsClicked == 1) {
    firstNum = displayTextInNum;
    operation = subtract;
  } else if (operatorsClicked == 2) {
    secondNum = displayTextInNum

    if(operation == divide && secondNum == 0) {
      display.textContent = "Error";
        setTimeout(() => {
          clear()
        }, 2000)
      return;
    }

    firstNum = operate(operation,firstNum,secondNum)
    operation = subtract
    display.textContent = firstNum;
  }
});
mul.addEventListener('click', () => {
  operatorsClicked += 1
  presentingNums = false;

  if (operatorsClicked == 1) {
    firstNum = displayTextInNum;
    operation = multiply;
  } else if (operatorsClicked > 1) {
    secondNum = displayTextInNum

    if(operation == divide && secondNum == 0) {
      display.textContent = "Error";
        setTimeout(() => {
          clear()
        }, 2000)
      return;
    }

    firstNum = operate(operation,firstNum,secondNum)
    operation = multiply;
    display.textContent = firstNum;
  }
});
dvi.addEventListener('click', () => {
  operatorsClicked += 1
  presentingNums = false;

  if (operatorsClicked == 1) {
    firstNum = displayTextInNum;
    operation = divide;
  } else if (operatorsClicked > 1) {
    secondNum = displayTextInNum

    if(operation == divide && secondNum == 0) {
      display.textContent = "Error";
        setTimeout(() => {
          clear()
        }, 2000)
      return;
    }

    firstNum = operate(operation,firstNum,secondNum)
    operation = divide;
    display.textContent = firstNum;
  }
});

equ.addEventListener('click', () => {
  secondNum = displayTextInNum

  operatorsClicked = 0;
  presentingNums = false;

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
    if (secondNum == 0) {
      display.textContent = "Error";
      setTimeout(() => {
        clear()
      }, 2000)
    } else {
      finalAnswer = operate(divide,firstNum,secondNum)
      display.textContent = finalAnswer;
    }

    console.log(finalAnswer)
  }
})

function clear() {
  secondNum = undefined;
  operation = undefined;
  finalAnswer = undefined;
  operatorsClicked = 0;
  presentingNums = false;
  display.textContent = "0";
}
ce.addEventListener('click', () => {
  clear();
})

function backspace() {
  if (display.textContent.length > 0) {
    let displayContent = display.textContent.slice(0, -1)
    display.textContent = displayContent;
  }
}
back.addEventListener('click', () => {
  backspace()
})