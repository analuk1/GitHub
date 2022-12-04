window.addEventListener("load", addClickListenersDrumPad);
function playSample(soundQuelle) {
    var sound = new Audio(soundQuelle);
    sound.play();
}
function addClickListenersDrumPad() {
    document.querySelector(".pad1").addEventListener("click", function () { playSample("./sounds/A.mp3"); });
    document.querySelector(".pad2").addEventListener("click", function () { playSample("./sounds/C.mp3"); });
    document.querySelector(".pad3").addEventListener("click", function () { playSample("./sounds/F.mp3"); });
    document.querySelector(".pad4").addEventListener("click", function () { playSample("./sounds/G.mp3"); });
    document.querySelector(".pad5").addEventListener("click", function () { playSample("./sounds/H.mp3"); });
    document.querySelector(".pad6").addEventListener("click", function () { playSample("./sounds/K.mp3"); });
    document.querySelector(".pad7").addEventListener("click", function () { playSample("./sounds/laugh-1.mp3"); });
    document.querySelector(".pad8").addEventListener("click", function () { playSample("./sounds/laugh-2.mp3"); });
    document.querySelector(".pad9").addEventListener("click", function () { playSample("./sounds/S.mp3"); });
    document.querySelector(".playbutton").addEventListener("click", function () { playBeat(); });
}
var beat = [
    "./sounds/K.mp3",
    "./sounds/laugh-1.mp3",
    "./sounds/laugh-2.mp3",
];
var Sounds = [("./sounds/A.mp3"), ("./sounds/C.mp3"), ("./sounds/F.mp3"), ("./sounds/G.mp3"),
    ("./sounds/H.mp3"), ("./sounds/K.mp3"), ("./sounds/laugh-1.mp3"), ("./sounds/laugh-2.mp3"),
    ("./sounds/S.mp3")];
var beat = [Sounds[6], Sounds[7], Sounds[8]];
var zaehler = 0;
function playBeat() {
    setInterval(function () {
        playSample(beat[zaehler]);
        zaehler++;
        if (zaehler === 3) {
            zaehler = 0;
        }
    }, 500);
}
//# sourceMappingURL=my-script8.js.map