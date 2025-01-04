let getData = async () => {
    try {
        let response = await fetch("http://localhost:5000/products");
        if (!response.ok) {
            throw new Error(response.status + " " + response.statusText);
        }
        let data = await response.json();
        printData(data);
    } catch (error) {
        alert("Data failed to fetch");
    }
}
function printData(data) {
    let table = document.createElement("table");

    // Head
    let thead = document.createElement("thead");
    let trhead = document.createElement("tr");
    let headings = ["id", "title", "price", "description", "category", "image"];
    headings.forEach(ele => {
        let th = document.createElement("th");
        th.innerText = ele;
        trhead.appendChild(th);
    })
    thead.appendChild(trhead);
    // End of Head

    // Body

    let tbody = document.createElement("tbody");
    data.forEach(obj => {
        let tr = document.createElement("tr");
        for (let key in obj) {
            if (key !== "rating") {
                let td = document.createElement("td");
                if (key === "image") {
                    td.innerHTML = `<img src=${obj[key]}>`
                } else {
                    td.innerText = obj[key];
                }
                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);
    })
    table.append(thead, tbody);
    document.body.appendChild(table);
}
getData();