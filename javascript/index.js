let container = document.getElementById("container");

let getData = async () => {
    let response = await fetch("http://localhost:5000/products");
    let data = await response.json();
    printData(data);
}
function printData(data) {
    data.forEach(obj => {
        let item = document.createElement("div");
        item.innerHTML =
            `<h2>${obj.title}</h2>
            <img src='https://placehold.co/300x300.png'>
            <p>${obj.price}</p>
            <p>${obj.description}</p>
        `
        container.appendChild(item);
    })
}



getData();