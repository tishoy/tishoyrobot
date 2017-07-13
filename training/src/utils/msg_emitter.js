fetch("http://localhost:3008/post", {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: "tishoy", aaa: 3 })
}).then(function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    else {
        return Promise.reject(new Error(response.statusText));
    }
}).then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data)
    // return response.json();
}).catch(function (e) {
    console.log(e);
    console.log("Oops, error");
});