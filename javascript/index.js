async function fetchData() {
    let res = await fetch("http://localhost:5000/products");
    let products = await res.json();
    displayData(products);
}
function displayData(products) {
    let grid_container = document.querySelector(".grid-container");
    grid_container.innerHTML = products.map(product => {
        return `<h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
        <button class = "editButton" onclick="editData('${product.id}')">Edit</button>
        <button class="deleteButton" onclick="deleteData('${product.id}')">Delete</button>`
    }).join('');
}

async function editData(id) {
    try {
        let response = await fetch(`http://localhost:5000/products/${id}`);
        let product = await response.json();
        let feilds = ["title", "price", "description", "category", "image"];
        feilds.forEach(feild => document.getElementById(feild).value = product[feild]);
        document.getElementById("id").value = product.id;
        document.getElementById("rate").value = product.rating.rate;
        document.getElementById("count").value = product.rating.count;
    } catch (error) {
        alert("Something Went Wrong");
        console.error(error);
    }
}
async function submit() {
    let id = document.getElementById("id").value;
    const obj = {
        "title": document.getElementById("title").value,
        "price": document.getElementById("price").value,
        "description": document.getElementById("description").value,
        "category": document.getElementById("category").value,
        "image": document.getElementById("image").value,
        "rating": {
            "rate": document.getElementById("rate").value,
            "count": document.getElementById("count").value
        }
    }
    const URL = "http://localhost:5000/products";
    let url = id ? `${URL}/${id}` : URL;
    let methodValue = id ? "PUT" : "POST";
    await fetch(url, {
        "method": methodValue,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(obj)
    })
    fetchData();
}


async function deleteData(id) {
    let confirm = window.confirm("Do you really want to delete ? ");
    if (confirm) {
        let response = await fetch(`http://localhost:5000/products/${id}`, { "method": "DELETE" });
        try {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            alert("Data Deleted");
            fetchData();
        } catch (error) {
            alert("Something Went Wrong");
            console.error(error);
        }
    }
    else {
        alert("Aborted");
    }
}

document.addEventListener("DOMContentLoaded", fetchData);