let pause=true;
let time = 0;
let transt="";
let intervalId;

function f0(t){
    if(t<10){
        return '0'+t;
    }
    return t;
}
function sp(){
    if(pause){
        document.getElementById("sp").innerText = "pause";
        pause=false;
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId=setInterval(function () {
            if (!pause) {
                time++;
                load();
            }
        }, 10);
    }
    else{
        document.getElementById("sp").innerText = "resume";
        pause=true;
    }
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

function reset(){
    document.getElementById("sp").innerText = "start";
    pause=true;
    time=0;
    load();
}
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
function load(){
    transt = show(time);
    document.getElementById("output").innerText = transt;
}
function loadtheme(){
    if(sessionStorage.getItem("theme")==="light_style.css")sty();
}
window.onload = function(){
    load();
    loadtheme()
}
