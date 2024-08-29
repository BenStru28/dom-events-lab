/*
As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0. */

/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector("#calculator");
const display = document.querySelectorAll(".display")[0];
const operationTypes = ["+", "-", "*", "/"];
/*-------------------------------- Variables --------------------------------*/
let operation = "";
let currentOperator = "";
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", function (event) {
  if (event.target.innerText == "C") {
    clearCalculator();
    return;
  }
  if (event.target.classList.contains("number")) {
    operation = operation + event.target.innerText;
  }
  if (event.target.innerText == "+") {
    if (hasOperator()) {
      clearCalculator();
      return;
    }
    operation = operation + event.target.innerText;
    currentOperator = "+";
  }
  if (event.target.innerText == "-") {
    if (hasOperator()) {
      clearCalculator();
      return;
    }
    operation = operation + event.target.innerText;
    currentOperator = "-";
  }
  if (event.target.innerText == "*") {
    if (hasOperator()) {
      clearCalculator();
      return;
    }
    operation = operation + event.target.innerText;
    currentOperator = "*";
  }
  if (event.target.innerText == "/") {
    if (hasOperator()) {
      clearCalculator();
      return;
    }
    operation = operation + event.target.innerText;
    currentOperator = "/";
  }

  if (event.target.innerText == "=") {
    const numbers = operation.split(currentOperator);
    const firstNumber = parseInt(numbers[0]);
    const secondNumber = parseInt(numbers[1]);
    let value = 0;
    switch (currentOperator) {
      case "+":
        value = firstNumber + secondNumber;
        break;
      case "-":
        value = firstNumber - secondNumber;
        break;
      case "*":
        value = firstNumber * secondNumber;
        break;
      case "/":
        value = firstNumber / secondNumber;
        break;
    }
    display.innerText = value;
    return;
  }
  display.innerText = operation;
});

/*-------------------------------- Functions --------------------------------*/

function hasOperator() {
  return operationTypes.some(function (x) {
    return operation.includes(x);
  });
}

function clearCalculator() {
  display.innerText = "0";
  operation = "0";
}
