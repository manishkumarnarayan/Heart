let c=["red","#9D6381","hotpink","aqua","#B5D99C"]
let i=0
let color=c[i];
let out = "";
let s = " I <3 u";
let l = 0;
function co() {
    i++;
    if (i>c.length-1) {
        i=0
    }
    if (l<s.length) {
        if (s[l]==" ") {
            l++;
            out+=" ";
        }
        out+=s[l];
        l++;
    }
    else{
        l=0;
        out="";
    }
    color=c[i]
    document.getElementById("text").innerHTML = out;
    document.getElementById("col1").style.backgroundColor = color;
    document.getElementById("col2").style.backgroundColor = color;
    document.getElementById("col").style.backgroundColor = color;
}