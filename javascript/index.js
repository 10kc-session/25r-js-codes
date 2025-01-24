let input1 = document.getElementById("name");
let input2 = document.getElementById("pass");
let nameError = document.getElementById("nameError");
let passError = document.getElementById("passError");
document.getElementById("form").addEventListener("submit", (event) => {
    if (input1.value === '' || !(/^(?=.*[a-z]).{3,}$/.test(input1.value))) {
        input1.classList.add("error");
        nameError.innerHTML = "<i style = 'color : red'>username required</i>";
        event.preventDefault();
    } else {
        nameError.innerHTML = ``
        input1.classList.remove("error");
    }
    if (input2.value === '' || !(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/.test(input2.value))) {
        input2.classList.add("error");
        passError.innerHTML = "<i style = 'color : red'>password required</i>"
        event.preventDefault();
    }
    else {
        passError.innerHTML = ``;
        input2.classList.remove("error");
    }
})