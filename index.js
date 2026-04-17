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
        c = window.location.href;
        c = c.substring(0,c.indexOf("index.html"))+"heart.html#"+b;
        console.log(window.location.href)
        console.log(window.location.origin)
        console.log(window.location.pathname)
        console.log(window.location.search)
        console.log(window.location.hash)
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