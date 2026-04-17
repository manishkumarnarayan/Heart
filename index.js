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
        console.log(window.location.href)
        c = c+"heart.html#"+b; 
        /*
        soooooooooo it won't work on live server 
        but it works on github host/pages 
        because turns out window.location.href
        returns url with index.html 
        when hosted with live server locally 
        whereas when we deploy it via github 
        same funtions returns url without index.html.
        So if you have to run it on local live server replace line 13 with 
        c = c.substring(0,c.indexOf("index.html"))+"heart.html#"+b; 
        */
        console.log(c)
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