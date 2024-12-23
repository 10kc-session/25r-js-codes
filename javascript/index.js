//  fetch(URL , options)

const URL = "https://fakestoreapi.com/products";

fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log("Error"));


function print() {
    setTimeout(() => {
        console.log("Settimeout")
    }, 1000);
    return new Promise((resolve, _) => {
        resolve("Success");
    })
}
print().then(res => console.log(res));
