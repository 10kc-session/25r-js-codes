let data = [
    {
        "id": 1,
        "todo": "Do something nice for someone you care about",
        "completed": false,
        "userId": 152
    },
    {
        "id": 2,
        "todo": "Memorize a poem",
        "completed": true,
        "userId": 13
    },
    {
        "id": 3,
        "todo": "Watch a classic movie",
        "completed": true,
        "userId": 68
    },
    {
        "id": 4,
        "todo": "Watch a documentary",
        "completed": false,
        "userId": 84
    }
]


let options = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
}
let url = "http://localhost:5000/data/";

data.forEach(ele => {
    options.body = JSON.stringify(ele);
    fetch(url, options)
        .then(res => {
            if (res.ok) {
                console.log(res.statusText);
            }
        })
})
// for (let i = 0; i < data.length; i++) {
//     let obj = data[i];
//     options.body = JSON.stringify(obj);
//     fetch(url, options)
//         .then(res => {
//             if (res.ok) {
//                 console.log(res.statusText);
//             }
//         })
// }