window.addEventListener("DOMContentLoaded", () => {
    // console.log("Init");

    fetch("./tweets.json", {
        method: "GET"
    }).then(response => {
        console.log(response);
        if (response.ok && response.status >= 200 && response.status < 400) {
            return response.json();
        } else {
            throw new Error(response.statusText);
        }
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err)
    });

    // console.log("After fetch");
})