let pret=sessionStorage.getItem("pret");
let a = show(pret).split(/[:.]/).map(Number);
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
    pret=toTime(a[0],a[1],a[2],a[3]);
    sessionStorage.setItem("pret",pret);
    window.open("Countdown.html","_self");
}
function cancel(){
    window.open("Countdown.html","_self");
}
function load(){
    transt = show(pret);
    document.getElementById("output").innerText = transt;
    document.getElementById("0").innerText = f0(a[0]);
    document.getElementById("1").innerText = f0(a[1]);
    document.getElementById("2").innerText = f0(a[2]);
    document.getElementById("3").innerText = f0(a[3]);
}
function loadtheme(){
    if(sessionStorage.getItem("theme")==="light_style.css")sty();
}

function checka(a,b){
    if(a[3]>=60){
        a[2]++;
        a[3]=0;
    }
    if(a[2]>=60){
        a[1]++;
        a[2]=0;
    }
    if(a[1]>=60){
        a[0]++;
        a[1]=0;
    }
    if(a[0]>=100){
        return b;
    }
    if(a[3]<=-1){
        a[2]--;
        a[3]=59;
    }
    if(a[2]<=-1){
        a[1]--;
        a[2]=59;
    }
    if(a[1]<=-1){
        a[0]--;
        a[1]=59;
    }
    if(a[0]<=-1){
        return b;
    }
    return a;
}

window.onload = function(){
    load();
    loadtheme();
    const b1 = document.getElementById("0")
    const b2 = document.getElementById("1")
    const b3 = document.getElementById("2")
    const b4 = document.getElementById("3")

    b1.addEventListener('wheel', (event) => {
        event.preventDefault();
        let b=a.slice();
        a[0]-=parseInt(event.deltaY/100);
        a=checka(a,b);
        load();
    });
    b2.addEventListener('wheel', (event) => {
        event.preventDefault();
        let b=a.slice();
        a[1]-=parseInt(event.deltaY/100);
        a=checka(a,b);
        load();
    });
    b3.addEventListener('wheel', (event) => {
        event.preventDefault();
        let b=a.slice();
        a[2]-=parseInt(event.deltaY/100);
        a=checka(a,b);
        load();
    });
    b4.addEventListener('wheel', (event) => {
        event.preventDefault();
        let b=a.slice();
        a[3]-=parseInt(event.deltaY/100);
        a=checka(a,b);
        load();
    });
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
