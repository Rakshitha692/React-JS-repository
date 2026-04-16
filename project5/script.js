document.getElementById("load-btn").addEventListener("click",() => {
    document.getElementById("status").innerText = "Loading...";
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve
        }, 2000);
        });
        promise.then((data) => {
            document.getElementById("status").innerText = data;
        });
    });

