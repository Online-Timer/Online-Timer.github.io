let pret=sessionStorage.getItem("pret");

function show(t){
    let ms=t%100;
    t-=ms;
    t/=100;
    let s=t%60;
    t-=s;
    t/=60;
    let m=t%60;
    t-=m;
    t/=60;
    return f0(t)+":"+f0(m)+":"+f0(s)+"."+f0(ms);
}

function toTime(h,m,s,ms){
    return ms+s*100+m*6000+h*360000;
}

function confirm(){
    sessionStorage.setItem("pret",pret);
    window.open("Countdown.html","_self");
}
function cancel(){
    window.open("Countdown.html","_self");
}
function load(){
    transt = show(pret);
    document.getElementById("output").innerText = transt;
}
function loadtheme(){
    if(sessionStorage.getItem("theme")==="light_style.css")sty();
}
window.onload = function(){
    load();
    loadtheme();
}
function sty(){
    var Element = document.getElementById("sty");
    var themeLink = document.getElementById("theme");

    if(Element.src.includes("light.png")){
        Element.src="dark.png";
        themeLink.setAttribute("href", "light_style.css");
        sessionStorage.setItem("theme", "light_style.css");
    }
    else{
        Element.src="light.png";
        themeLink.setAttribute("href", "dark_style.css");
        sessionStorage.setItem("theme", "dark_style.css");
    }

}

function f0(t){
    if(t<10){
        return '0'+t;
    }
    return t;
}