window.addEventListener("load", addClickListenerDrumpad);
function play(soundQuelle) {
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
    document.querySelector(".play").addEventListener("click", function () { playBeat(); });
    document.querySelector(".shuffle").addEventListener("click", function () { remix(); });
}
var beat = [
    "./sounds/K.mp3",
    "./sounds/G.mp3",
    "./sounds/H.mp3"
];
var alleToene = [
    "./sounds/A.mp3",
    "./sounds/C.mp3",
    "./sounds/F.mp3",
    "./sounds/G.mp3",
    "./sounds/H.mp3",
    "./sounds/K.mp3",
    "./sounds/laugh-1.mp3",
    "./sounds/laugh-2.mp3",
    "./sounds/S.mp3"
];
var playing = false;
var intervalId;
function playSample(soundQuelle) {
    play(soundQuelle);
}
function playBeat() {
    if (playing == false) {
        startBeat();
    }
    else {
        stopBeat();
    }
}
function startBeat() {
    playing = true;
    var zaehler = 0;
    intervalId = setInterval(function () {
        play(beat[zaehler]);
        zaehler = zaehler + 1;
        if (zaehler == beat.length) {
            zaehler = 0;
        }
    }, 500);
}
var i = 0;
function stopBeat() {
    if (document.querySelector(".play i").classList.contains("fa-play")) {
        document.querySelector(".play i").classList.add("fa-stop");
        document.querySelector(".play i").classList.remove("fa-play");
    }
    else {
        document.querySelector(".play i").classList.remove("fa-stop");
        document.querySelector(".play i").classList.add("fa-play");
    }
    clearInterval(intervalId);
    playing = false;
}
function remix() {
    playing = true;
    var zaehler = 0;
    var toeneTotal = 3;
    let i = 0;
    while (i < toeneTotal) {
        var item = alleToene[Math.floor(Math.random() * alleToene.length)];
        alleToene.push(item);
        i = i + 1;
    }
    intervalId = setInterval(function () {
        play(alleToene[zaehler]);
        zaehler = zaehler + 1;
        if (zaehler == alleToene.length) {
            zaehler = 0;
        }
    }, 500);
}
//# sourceMappingURL=my-script9.js.map