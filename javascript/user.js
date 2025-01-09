async function getData() {
    let response = await fetch("http://localhost:3000/students/");
    try {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        let students = await response.json();
        let container = document.getElementsByClassName("container")[0];
        students.forEach(student => {
            let item = document.createElement("div");
            item.innerHTML = `
                <img src = '${student.img}'>
                <p>${student.name}</p>
            `
            container.appendChild(item);
        });
    } catch (error) {
        console.error(error);
    }
}
document.addEventListener("DOMContentLoaded", getData);