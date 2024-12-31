/**
 *  Error Handling
 *  ---------------
 *      try , catch , finally , throw
 */
function division(val1, val2) {
    try {
        if (val2 === 0) {
            throw new Error("Zero is Not Allowed");
        } else {
            console.log(val1 / val2);
        }
    } catch (err) {
        console.error(err.message);
    }
}
// division(10, 0);

// var x = function () {
//     console.log(y);
// };
// try {
//     x();
// } catch (error) {
//     console.error(error.message);
// }
// console.log("Executed");


// let promise = new Promise((resolve, reject) => {
//     reject("Rejected");
// });
// promise
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

// fetch("http://localhost:5000/data/1")
//     .then(response => {
//         if (!response.ok) {
//             throw `data failed to fetch ${response.status + " " + response.statusText} `
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(err => console.error(err.message));

let deleteDataByName = async (name) => {
    try {
        let response = await fetch("http://localhost:5000/data");
        if (response.ok) {
            let data = await response.json();
            data.forEach(async obj => {
                if (obj.name === name) {
                    let response = await fetch(`http://localhost:5000/data/${obj.id}`, {
                        "method": "DELETE"
                    })
                    if (response.ok) {
                        console.log("data deleted");
                    }
                } else {
                    console.log("user not available");
                }
            });
        } else {
            throw new Error(response.status + "  " + response.statusText);
        }
    } catch (error) {
        console.error(error.message);
    }

}
deleteDataByName("Nikitha");



