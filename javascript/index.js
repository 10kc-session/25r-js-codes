let arr = [
    { id: 217, name: 'Name 398', email: 'email398@example.com', age: 34, address: 'Street 53' },
    { id: 445, name: 'Name 234', email: 'email234@example.com', age: 27, address: 'Street 45' },
    { id: 563, name: 'Name 56', email: 'email56@example.com', age: 43, address: 'Street 8' },
    { id: 872, name: 'Name 892', email: 'email892@example.com', age: 52, address: 'Street 41' },
    { id: 992, name: 'Name 610', email: 'email610@example.com', age: 35, address: 'Street 19' },
    { id: 139, name: 'Name 924', email: 'email924@example.com', age: 48, address: 'Street 91' },
    { id: 204, name: 'Name 538', email: 'email538@example.com', age: 58, address: 'Street 22' },
    { id: 399, name: 'Name 867', email: 'email867@example.com', age: 29, address: 'Street 39' },
    { id: 873, name: 'Name 124', email: 'email124@example.com', age: 41, address: 'Street 18' },
    { id: 510, name: 'Name 634', email: 'email634@example.com', age: 55, address: 'Street 30' }
]

let header = document.createElement("header");
header.className = "header";

let navArr = ["Home", "About us", "Menu", "Projects", "Contact"];

navArr.forEach(data => {
    let nav = document.createElement("nav");
    nav.innerText = data;
    header.appendChild(nav);
});

document.body.appendChild(header);
