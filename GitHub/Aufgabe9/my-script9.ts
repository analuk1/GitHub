



window.addEventListener("load", addClickListenerDrumpad);

function play(soundQuelle: string): void {
    var sound: HTMLAudioElement = new Audio(soundQuelle);
    sound.play();
}

function addClickListenerDrumpad(): void {
    document.querySelector(".pad1").addEventListener("click", function (): void { playSample("./sounds/A.mp3"); });
    document.querySelector(".pad2").addEventListener("click", function (): void { playSample("./sounds/C.mp3"); });
    document.querySelector(".pad3").addEventListener("click", function (): void { playSample("./sounds/F.mp3"); });
    document.querySelector(".pad4").addEventListener("click", function (): void { playSample("./sounds/G.mp3"); });
    document.querySelector(".pad5").addEventListener("click", function (): void { playSample("./sounds/H.mp3"); });
    document.querySelector(".pad6").addEventListener("click", function (): void { playSample("./sounds/K.mp3"); });
    document.querySelector(".pad7").addEventListener("click", function (): void { playSample("./sounds/laugh-1.mp3"); });
    document.querySelector(".pad8").addEventListener("click", function (): void { playSample("./sounds/laugh-2.mp3"); });
    document.querySelector(".pad9").addEventListener("click", function (): void { playSample("./sounds/S.mp3"); });
    document.querySelector(".play").addEventListener("click", function (): void { playBeat(); });
    document.querySelector(".shuffle").addEventListener("click", function (): void  { remix(); });
}

var beat: string[] = [
    "./sounds/K.mp3",
    "./sounds/G.mp3",
    "./sounds/H.mp3"
];

var alleToene: string[] = [
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

var playing: boolean = false;

var intervalId: number;

function playSample(soundQuelle: string): void {
    play(soundQuelle);
}

function playBeat(): void {
    if (playing == false) {
        startBeat();
    } else {
        stopBeat();
    }
}

function startBeat(): void {
    playing = true;
    var zaehler: number = 0;
    intervalId = setInterval(function (): void  {
        play(beat[zaehler]);
        zaehler = zaehler + 1;
        if (zaehler == beat.length) {
            zaehler = 0;
        }
    }, 500);
}
var i: number = 0;

function stopBeat(): void {
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

function remix(): void {
    playing = true;
    var zaehler: number = 0;
    var toeneTotal: number = 3;
    let i: number = 0;
    while (i < toeneTotal) {
    var item: string = alleToene[Math.floor(Math.random() * alleToene.length)];
    alleToene.push(item);
    i = i + 1;
    }
    intervalId = setInterval(function (): void {
    play(alleToene[zaehler]);
    zaehler = zaehler + 1;
    if (zaehler == alleToene.length) {
    zaehler = 0;
    }
    }, 500);
}