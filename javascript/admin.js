async function fetchData() {
    let response = await fetch("http://localhost:3000/students/");
    let students = await response.json();
    displayData(students);
}
function displayData(students) {
    let container = document.getElementById("grid-container");
    container.innerHTML = '';
    // let item = document.createElement("div");
    // item.className = "item";
    // item.innerHTML = students.map(student => {
    //     return `
    //     <p>ID : ${student.id}</p>
    //     <p>${student.name}</p>
    //     <button id = 'deleteBtn-${student.id}'>Delete</button>
    //     <button id = 'editBtn-${student.id}'>Edit</button>
    //     `
    // }).join("");

    students.forEach((student) => {
        let item = document.createElement("div");
        item.innerHTML = `
            <p>ID : ${student.id}</p>
            <p>${student.name}</p>
            <button id = 'deleteBtn-${student.id}'>Delete</button>
            <button id = 'editBtn-${student.id}'>Edit</button>
            `
        container.appendChild(item);

        let deleteBtn = document.getElementById(`deleteBtn-${student.id}`);
        let editBtn = document.getElementById(`editBtn-${student.id}`);
        deleteBtn.onclick = () => {
            deleteData(student.id);
        }
        editBtn.onclick = () => {
            editData(student.id);
        }
    })
}
async function deleteData(id) {
    let response = await fetch(`http://localhost:3000/students/${id}`, { "method": "DELETE" });
    try {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        alert("Deleted Successfully");
        fetchData();
    } catch (error) {
        alert("Something Went Wrong");
        console.error(error);
    }
}

async function editData(id) {
    let studentId = document.getElementById("id");
    let name = document.getElementById("name");
    let image = document.getElementById("image");
    let response = await fetch(`http://localhost:3000/students/${id}`);
    try {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        let student = await response.json();
        studentId.value = student.id;
        name.value = student.name;
        image.value = student.img;
    } catch (error) {
        console.error(error)
    }
}


async function saveData() {
    let studentId = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let image = document.getElementById("image").value;

    let obj = {
        "name": name,
        "img": image
    }

    let studentMethod = studentId ? "PUT" : "POST";
    let URL = studentId ? `http://localhost:3000/students/${studentId}`
        : `http://localhost:3000/students/`;

    let response = await fetch(URL, {
        "method": studentMethod,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(obj)
    })
    try {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        alert("Data Updated Succesfully");
        fetchData();
    } catch (error) {
        console.error(error);
    }

}
document.addEventListener("DOMContentLoaded", fetchData);