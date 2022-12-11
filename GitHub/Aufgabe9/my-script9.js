window.addEventListener("load", addClickListenerDrumpad);
function playSample(soundQuelle) {
    var sound = new Audio(soundQuelle);
    sound.play();
}
function addClickListenerDrumpad() {
    document.querySelector(".pad1").addEventListener("click", function () { playSample("./sounds/A.mp3"); });
    document.querySelector(".pad2").addEventListener("click", function () { playSample("./sounds/C.mp3"); });
    document.querySelector(".pad3").addEventListener("click", function () { playSample("./sounds/F.mp3"); });
    document.querySelector(".pad4").addEventListener("click", function () { playSample("./sounds/G.mp3"); });
    document.querySelector(".pad5").addEventListener("click", function () { playSample("./sounds/H.mp3"); });
    document.querySelector(".pad6").addEventListener("click", function () { playSample("./sounds/K.mp3"); });
    document.querySelector(".pad7").addEventListener("click", function () { playSample("./sounds/laugh-1.mp3"); });
    document.querySelector(".pad8").addEventListener("click", function () { playSample("./sounds/laugh-2.mp3"); });
    document.querySelector(".pad9").addEventListener("click", function () { playSample("./sounds/S.mp3"); });
    document.querySelector("#play").addEventListener("click", PlayBeat);
    document.querySelector("#remix").addEventListener("click", function () { Remix(); });
}
var beat = [
    "./sounds/K.mp3",
    "./sounds/laugh-1.mp3",
    "./sounds/laugh-2.mp3",
];
var sounds = [("./sounds/A.mp3"), ("./sounds/C.mp3"), ("./sounds/F.mp3"), ("./sounds/G.mp3"),
    ("./sounds/H.mp3"), ("./sounds/K.mp3"), ("./sounds/laugh-1.mp3"), ("./sounds/laugh-2.mp3"),
    ("./sounds/S.mp3")];
var zaehler = 0;
var beatremix;
var interval = 0;
function PlayBeat() {
    if (document.getElementById("play").classList.contains("fa-play")) {
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-stop");
        interval = setInterval(myBeat, 350);
    }
    else {
        document.getElementById("play").classList.remove("fa-stop");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(interval);
    }
    function myBeat() {
        playSample(beat[zaehler]);
        zaehler += 1;
        if (zaehler > (beat.length - 1))
            zaehler = 0;
    }
}
function Remix() {
    document.querySelector("#remix").addEventListener("click", function () {
        beatremix = setInterval(function () {
            playSample(beat[zaehler]);
            zaehler = Math.floor(Math.random() * 9);
        }, 300);
    });
}
//# sourceMappingURL=my-script9.js.map