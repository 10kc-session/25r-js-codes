let arr = [
    { id: 217, name: 'Name 398', email: 'email398@example.com', age: 34, address: 'Street 53' },
    { id: 445, name: 'Name 234', email: 'email234@example.com', age: 27, address: 'Street 45' },
    { id: 563, name: 'Name 56', email: 'email56@example.com', age: 43, address: 'Street 8' },
    { id: 872, name: 'Name 892', email: 'email892@example.com', age: 52, address: 'Street 41' },
    { id: 992, name: 'Name 610', email: 'email610@example.com', age: 35, address: 'Street 19' },
    { id: 139, name: 'Name 924', email: 'email924@example.com', age: 48, address: 'Street 91' },
    { id: 217, name: 'Name 398', email: 'email398@example.com', age: 34, address: 'Street 53' },
    { id: 445, name: 'Name 234', email: 'email234@example.com', age: 27, address: 'Street 45' },
    { id: 563, name: 'Name 56', email: 'email56@example.com', age: 43, address: 'Street 8' },
    { id: 872, name: 'Name 892', email: 'email892@example.com', age: 52, address: 'Street 41' },
    { id: 992, name: 'Name 610', email: 'email610@example.com', age: 35, address: 'Street 19' },
    { id: 139, name: 'Name 924', email: 'email924@example.com', age: 48, address: 'Street 91' },
    { id: 563, name: 'Name 56', email: 'email56@example.com', age: 43, address: 'Street 8' },
    { id: 872, name: 'Name 892', email: 'email892@example.com', age: 52, address: 'Street 41' },
    { id: 992, name: 'Name 610', email: 'email610@example.com', age: 35, address: 'Street 19' },
    { id: 139, name: 'Name 924', email: 'email924@example.com', age: 48, address: 'Street 91' }
]

let div = document.createElement("div");
div.className = "grid-container";
arr.forEach(obj => {
    let item = document.createElement("div");
    item.className = "item";
    for (let key in obj) {
        let p = document.createElement("p");
        p.innerText = `${key} : ${obj[key]}`;
        item.appendChild(p);
    }
    div.appendChild(item);
})

document.body.appendChild(div);