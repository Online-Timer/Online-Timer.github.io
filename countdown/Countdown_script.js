let pause=true;
let pret = 30000; //10ms (ms instead of 10ms)
let time = pret;
let transt="";
let sr=false;
let intervalId;

function f0(t){
    if(t<10){
        return '0'+t;
    }
    return t;
}
function sp(){
    if(pause){
        sr=true;
        document.getElementById("cr").innerText = "reset";
        document.getElementById("sp").innerText = "pause";
        pause=false;
        if (intervalId) {
            clearInterval(intervalId);
        }
        intervalId=setInterval(function () {
            if (!pause && time > 0) {
                time--;
                load();
            }
        }, 10);
    }
    else{
        document.getElementById("sp").innerText = "resume";
        pause=true;
    }
}
function reset(){
    if(sr){
        sr=false;
        document.getElementById("cr").innerText = "change";
        document.getElementById("sp").innerText = "start";
        pause=true;
        time=pret;
        load();
    }
    else{
        window.open("../change/Change.html","_self");
    }
}
function sty(){
    var Element = document.getElementById("sty");
    var themeLink = document.getElementById("theme");

    if(Element.src.includes("light.png")){
        Element.src="../images/dark.png";
        themeLink.setAttribute("href", "../style/light_style.css");
        sessionStorage.setItem("theme", "light_style.css");
    }
    else{
        Element.src="../images/light.png";
        themeLink.setAttribute("href", "../style/dark_style.css");
        sessionStorage.setItem("theme", "dark_style.css");
    }

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
// function toTime(h,m,s,ms){
//     return ms+s*100+m*6000+h*360000;
// }
function load(){
    transt = show(time);
    document.getElementById("output").innerText = transt;
    if(sessionStorage.getItem("pret")===null)sessionStorage.setItem("pret",pret);
    pret=sessionStorage.getItem("pret");
}
function loadtheme(){
    if(sessionStorage.getItem("theme")==="light_style.css")sty();
}
window.onload = function(){
    load();
    loadtheme();
    sr=true;
    reset()
}
