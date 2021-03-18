const input = document.querySelector("input");
const add = document.querySelector(".add");
const clean = document.querySelector(".clean");
const showAdvice = document.querySelector(".showAdvice");
const showOptions = document.querySelector(".showOptions");

const options = ["walcz", "przemyśl to jeszcze raz"];

const addAdvice = (e) => {
    e.preventDefault();
   const userInput = input.value;
   options.push(userInput);
   input.value = "";
}

const cleanOptions = (e) => {
    e.preventDefault();
    options.length = "";
    alert("Poprawnie zresetowano możliwości.")
}






clean.addEventListener("click" , cleanOptions);
add.addEventListener("click", addAdvice);