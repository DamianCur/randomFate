const input = document.querySelector("input");
const add = document.querySelector(".add");
const clean = document.querySelector(".clean");
const showAdvice = document.querySelector(".showAdvice");
const showOptions = document.querySelector(".showOptions");
const h1 = document.querySelector("h1");

const options = ["walcz", "przemyśl to jeszcze raz"];


const addAdvice = (e) => {
    e.preventDefault();
    let newOption = input.value;
    if (newOption.length === 0) {
        alert("Uzupełnij pole");
        return
    }

    for (option of options) {
        if (option === newOption) {
            alert("Już to dodałeś");
            input.value = "";
            return
        }
    }
    options.push(newOption);
    input.value = "";
}

const cleanOptions = (e) => {
    e.preventDefault();
    options.length = 0;
    h1.textContent = "";
    alert("Poprawnie zresetowano wprowadzone dane.");
}

const showContent = (e) => {
    e.preventDefault();


    alert(`Oto Twoje dostępne możliwości: ${options.join(", ")}`);
}

const randomAdvice = (e) => {
    e.preventDefault();
    const index = Math.floor(Math.random() * options.length);
    h1.textContent = options[index];


}














showAdvice.addEventListener("click", randomAdvice);
showOptions.addEventListener("click", showContent);
clean.addEventListener("click", cleanOptions);
add.addEventListener("click", addAdvice);