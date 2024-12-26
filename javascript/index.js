/**
 *    fetch(URL , options);
 */
let options = {
    "method": "DELETE"
}
fetch("http://localhost:5000/data/")
    .then(respose => respose.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            fetch(`http://localhost:5000/data/${data[i].id}`, options)
                .then(res => {
                    if (res.ok) {
                        console.log("deleted : ", res.statusText);
                    }
                })
        }
    })