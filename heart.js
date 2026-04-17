let c = ["red", "#9D6381", "hotpink", "aqua", "#B5D99C"]
let i = 0
let color = c[i];
let out = "";
let  a = "I wanna say something i love you <3";
let value = window.location.hash.substring(1).replaceAll("%20", " ");
a = ""
for (let j = 0; j < value.length; j++) {
    a+=String.fromCharCode(value[j].charCodeAt(0)-1)
}
let s = a + " ";
let l = 0;
function word() {
    let w = "";
    while (s[l] != " ") {
        w += s[l];
        l++;
    }
    l++;
    return w;
}
function co() {
    i++;
    if (i > c.length - 1) {
        i = 0
    }
    if (l < s.length) {
        out += word() + " ";
    }
    else {
        l = 0;
        out = word() + " ";
    }
    color = c[i]
    document.getElementById("text").innerHTML = out;
    document.getElementById("col1").style.backgroundColor = color;
    document.getElementById("col2").style.backgroundColor = color;
    document.getElementById("col").style.backgroundColor = color;
}