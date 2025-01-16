let input = document.getElementById("text");
let error = document.getElementsByClassName("error-message")[0];
input.addEventListener("input", () => {
    console.log(input.value);
    if (input.value.length <= 3) {
        error.innerText = "Should be more than 3"
        error.classList.add("error-message");
    } else {
        error.innerText = "";
        error.classList.remove("error-message");
    }
})