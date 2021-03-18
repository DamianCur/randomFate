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
    console.log(newOption);
    if (newOption.length === 0) {
        alert("Uzupełnij puste pole.");
        return
    }

    for(newOption of options) {
        if (newOption === input.value) {
            alert("Już to dodałeś");
            return
        }
    }
    

    options.push(newOption);
    input.value = "";
}

const cleanOptions = (e) => {
    e.preventDefault();
    options.length = "";
    alert("Poprawnie zresetowano możliwości.")
}

const showContent = (e) => {
    e.preventDefault();
    alert(`Oto Twoje dodane możliwości: ${options}.`)
}


const randomAdvice = (e) => {
    e.preventDefault();
    if(options.length ===0) {
        alert("Dodaj możliwości.");
    }

    const index = Math.floor(Math.random() * options.length);
    h1.textContent = options[index];
    
}




showAdvice.addEventListener("click", randomAdvice);
showOptions.addEventListener("click", showContent);
clean.addEventListener("click", cleanOptions);
add.addEventListener("click", addAdvice);