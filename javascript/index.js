function saveData() {
    let input = document.querySelector("input");
    let arr = JSON.parse(localStorage.getItem("name")) || [];
    arr.push(input.value);
    localStorage.setItem("name", JSON.stringify(arr));
    input.value = ''
    displayData();
}
function displayData() {
    let container = document.getElementsByClassName("container")[0];
    container.innerHTML = ``;
    let arr = JSON.parse(localStorage.getItem("name"));
    if (arr === null) {
        container.innerHTML = "no data available";
    } else {
        arr.forEach(name => {
            let p = document.createElement("p");
            p.innerText = name;
            container.appendChild(p);
        })
    }
}
window.onload = displayData;