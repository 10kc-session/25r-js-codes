let btn = document.getElementById("btn");
btn.addEventListener("click", async () => {
    console.log("getting the data");
    let response = await fetch("http://localhost:5000/products");
    try {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
    let data = await response.json();
    displayData(data);
})

function displayData(data) {
    let container = document.getElementsByClassName("container")[0];
    data.forEach(function (obj, index) {
        let item = document.createElement("div");
        item.innerHTML = `
                <img src='${obj.image}'>
                <p>${obj.title}</p>
                <p>${obj.description}</p>
                <button id = "btn-${index}">Remove Element</button>
        `;
        // let button = document.createElement("button");
        // button.innerText = "Remove";
        // button.onclick = () => {
        //     item.remove();
        // }
        // item.appendChild(button);
        container.appendChild(item);
        let button = document.getElementById(`btn-${index}`);
        button.onclick = () => {
            item.remove();
        }
    }
    )
}
function deleteData(arr, index, item) {
    console.log(item);
}