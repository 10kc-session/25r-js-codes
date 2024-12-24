fetch("http://localhost:3000/students", {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": JSON.stringify({
        "id": "2",
        "name": "Durga"
    })
}).then(res => {
    if (res.ok) {
        console.log(res.statusText);
    } else {
        console.log("failed");
    }
}).catch(err => console.error(err));