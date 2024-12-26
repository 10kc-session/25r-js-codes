/**
 *    fetch(URL , options);
 */
let options = {
    "method": "PATCH",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": JSON.stringify({
        "id": "4",
        "name": "donkey"
    })
}
fetch("http://localhost:5000/data/4", options)
    .then(resp => {
        if (resp.ok) {
            console.log(resp.statusText);
        }
    }).catch(err => console.error(err));