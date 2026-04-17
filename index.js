document.addEventListener("DOMContentLoaded", () => {
    let a = "";
    let b = "";
    let c = "";
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        a = document.querySelector("#message").value;
        for (let j = 0; j < a.length; j++) {
            b+=String.fromCharCode(a[j].charCodeAt(0)+1)
        }
        const url = new URL(window.location.href);
        let path = url.pathname;
        if (path.endsWith("index.html")) {
            path = path.substring(0, path.lastIndexOf("index.html"));
        }
        if (!path.endsWith("/")) {
            path += "/";
        }
        url.pathname = path + "heart.html";
        url.hash = b;
        c = url.href;
        document.querySelector("#link").innerHTML = 'Click to copy the link';
        document.querySelector(".link-container").classList.add("active");
    });
    document.querySelector("#link").addEventListener("click", () => {
        navigator.clipboard.writeText(c);
        document.querySelector("#link").innerHTML = "Copied! Now you send that copied link to anyone with the message";
        setTimeout(() => {
            document.querySelector("#link").innerHTML = 'Click to copy the link';
        }, 10000);
    });
});