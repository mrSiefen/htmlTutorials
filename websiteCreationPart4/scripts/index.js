window.setInterval(updateHeader, 1000);
window.setInterval(rotateImage, 17);
window.setInterval(fadingHeader, 50);

var ang = 0;
var opacity = 1;
var opacityIncr = -0.01;
var elmoGif = document.getElementById('elmoGif');
var rHead = document.getElementById('rainbowHeader');
var fHead = document.getElementById('fadingHeader');

function updateHeader(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    if(((x + y + z)/3) < 126){
        rHead.style.color = "white";
    }
    else{
        rHead.style.color = "black";
    }
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    rHead.style.background = bgColor;
}

function rotateImage(){
    elmoGif.style.transform = "rotate(" + ang + "deg)";
    ang++;
    //console.log(ang);
}

function fadingHeader(){
    if (opacity <= 0 && opacityIncr == -0.01){
        opacityIncr = 0.01;
    }
    else if (opacity >= 1 && opacityIncr == 0.01){
        opacityIncr = -0.01;
    }
    opacity += opacityIncr;
    fHead.style.backgroundColor = "rgba(109,109,109," + opacity + ")";
}