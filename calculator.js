'use strict'

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const list = document.getElementById("list");


let addition = () => {
    let num1 = document.getElementById("x").value;
    let num2 = document.getElementById("y").value;
    let result = parseFloat(num1)+parseFloat(num2);
    let child = document.createElement(`li`);
    let text = document.createTextNode(`${num1} + ${num2} = ${result}`);
    child.appendChild(text)
    list.appendChild(child);
}

let subtraction = () => {
    let num1 = document.getElementById("x").value;
    let num2 = document.getElementById("y").value;
    let result = parseFloat(num1)-parseFloat(num2);
    let child = document.createElement(`li`);
    let text = document.createTextNode(`${num1} - ${num2} = ${result}`);
    child.appendChild(text)
    list.appendChild(child);
}

let multiplication = () => {
    let num1 = document.getElementById("x").value;
    let num2 = document.getElementById("y").value;
    let result = parseFloat(num1)*parseFloat(num2);
    let child = document.createElement(`li`);
    let text = document.createTextNode(`${num1} x ${num2} = ${result}`);
    child.appendChild(text)
    list.appendChild(child);
}

let division = () => {
    let num1 = document.getElementById("x").value;
    let num2 = document.getElementById("y").value;
    let result = parseFloat(num1)/parseFloat(num2);
    let child = document.createElement(`li`);
    let text = document.createTextNode(`${num1} / ${num2} = ${result}`);
    child.appendChild(text);
    list.appendChild(child);
}


add.onclick = () => addition();
subtract.onclick = () => subtraction();
multiply.onclick = () => multiplication();
divide.onclick = () => division();


