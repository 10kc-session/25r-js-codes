async function getData() {
    try {
        let response = await fetch("http://localhost:5000/products", { method: "GET" });
        if (!response.ok) {
            throw new Error("Data Not Found");
        }
        let data = await response.json();
        printData(data);
    } catch (error) {
        alert("Data failed to fetch");
    }
}

function printData(data) {
    // creating a table tag
    let table = document.createElement("table");

    // Heading

    // creating a thead tag to store heading
    let thead = document.createElement("thead");

    // creating a heading row to append to thead
    let trhead = document.createElement("tr");

    // reducing boiler plate with array and forEach 
    let headings = ["id", "title", "price", "description", "category", "image"];
    headings.forEach(ele => {
        let th = document.createElement("th");
        th.innerText = ele;
        trhead.appendChild(th);
    });
    // Appending trhead to thead tag to display headings    
    thead.appendChild(trhead);

    // Body
    // creating tbody tag to store the data
    let tbody = document.createElement("tbody");

    // iterating over data came for api using forEach 
    data.forEach(obj => {
        let tr = document.createElement("tr");
        for (let key in obj) {
            // Skipping Rating Object from the Real Object
            if (key !== "rating") {
                let td = document.createElement("td");
                if (key === "image") {
                    let img = document.createElement("img");
                    img.src = obj[key];
                    td.appendChild(img);
                } else {
                    td.innerText = obj[key];
                }
                // appending td to tr
                tr.appendChild(td);
            }
        }
        // appending tr to tbody , which is having data 
        tbody.appendChild(tr);
    })

    // appending thead and tbody to table tag 
    table.append(thead, tbody);

    // appending table to body tag to display data
    document.body.appendChild(table);
}
getData();