async function fetchData() {
    let response = await fetch("https://fakestoreapi.com/products");
    let products = await response.json();
    localStorage.setItem("products", JSON.stringify(products));
}

function displayCategories() {
    let products = JSON.parse(localStorage.getItem("products"));
    let category = products.map(product => product.category);
    let set = new Set(category);
    let categoryArr = Array.from(set);
    let btnContainer = document.getElementById("btn-container");
    categoryArr.forEach(category => {
        let button = document.createElement("button");
        button.textContent = category;
        button.onclick = () => {
            filterData(category);
        }
        btnContainer.appendChild(button);
    })
}

function filterData(category) {
    // let cat = window.prompt("Enter the category");
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let filteredData = products.filter(product => product.category === category);
    displayData(filteredData);
}

function displayData(products) {
    let container = document.getElementById("container");
    container.innerHTML = ``;
    if (products.length === 0) {
        container.innerHTML = "No Data Avaialable";
    } else {
        products.forEach((product, index) => {
            let item = document.createElement("div");
            item.innerHTML = `
                <img src = ${product.image}>
                <h3>Title : ${product.title}</h3>
                <p>Description : ${product.description} </p>
                <p>Price : ${product.price}</p>
                <p><b>Catergory</b> : ${product.category}</p>
                <button onclick = deleteData(${index})>Delete</button>
            `
            container.appendChild(item);
        });
    }
}

function deleteData(index) {
    let products = JSON.parse(localStorage.getItem("products"));
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    displayData(products);
}

window.onload = () => {
    let products = JSON.parse(localStorage.getItem("products")) || []
    if (products.length === 0) {
        fetchData();
    } else {
        displayData(products);
        displayCategories();
    }
};