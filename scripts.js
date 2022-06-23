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

for (let i = 0; i < allNumbers.length; i++) {
  let num = allNumbers[i].textContent
  allNumbers[i].addEventListener('click', () => {
    display.textContent += num;
    
    let displayTextInNum = parseInt(display.textContent)
    console.log(displayTextInNum)
  })
}