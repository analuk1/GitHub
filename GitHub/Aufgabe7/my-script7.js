const germany = "Deutschland";
const france = "Frankreich";
const italy = "Italien";
const croatia = "Kroatien";
const forestCoverEU2021 = 159000000;
const forestCoverEU2011 = 190000000;
const forestCover2021DE = 10666600;
const forestCover2011DE = 11419124;
const forestCover2021FR = 17100000;
const forestCover2011FR = 15000000;
const forestCover2021IT = 11000000;
const forestCover2011IT = 9149000;
const forestCover2021KRO = 2700000;
const forestCover2011KRO = 2260000;
let ProzentD1 = (forestCover2021DE / forestCoverEU2021) * 100;
let ProzentF1 = (forestCover2021FR / forestCoverEU2021) * 100;
let ProzentI1 = (forestCover2021IT / forestCoverEU2021) * 100;
let ProzentKRO1 = (forestCover2021KRO / forestCoverEU2021) * 100;
let ProzentEU1 = (forestCoverEU2021 / forestCoverEU2021) * 100;
let ProzentD = (1 - forestCover2011DE / forestCover2021DE) * 100;
let ProzentF = (1 - forestCover2011FR / forestCover2021FR) * 100;
let ProzentI = (1 - forestCover2011IT / forestCover2021IT) * 100;
let ProzentKRO = (1 - forestCover2011KRO / forestCover2021KRO) * 100;
let ProzentEU = (1 - forestCoverEU2011 / forestCoverEU2021) * 100;
const waldflächegesamt = document.querySelector("#waldflachegesamt");
const waldflächegesamttext = document.querySelector("#waldflachegesamttext");
const relativ = document.querySelector("#relativ");
const relativtext = document.querySelector("#relativtext");
const waldfläche = document.querySelector("#waldflache");
const waldflächetext = document.querySelector("#waldflachetext");
const senkung = document.querySelector("#senkung");
const senkungtext = document.querySelector("#senkungtext");
document.querySelector("#germany").addEventListener("click", function () {
    changeTo(forestCover2021DE, ProzentD1, forestCover2011DE, ProzentD, "styleDE");
});
document.querySelector("#france").addEventListener("click", function () {
    changeTo(forestCover2021FR, ProzentF1, forestCover2011FR, ProzentF, "styleFR");
});
document.querySelector("#italy").addEventListener("click", function () {
    changeTo(forestCover2021IT, ProzentI1, forestCover2011IT, ProzentI, "styleIT");
});
document.querySelector("#croatia").addEventListener("click", function () {
    changeTo(forestCover2021KRO, ProzentKRO1, forestCover2011KRO, ProzentKRO, "styleKRO");
});
document.querySelector("#croatia").addEventListener("click", function () {
    changeTo(forestCover2021KRO, ProzentKRO1, forestCover2011KRO, ProzentKRO, "styleKRO");
});
document.querySelector("#europe").addEventListener("click", function () {
    changeTo(forestCoverEU2021, ProzentEU1, forestCoverEU2011, ProzentEU, "styleEU");
});
function changeTo(forestCover2021, Prozent1, forestCover2011, Prozent, style) {
    waldflächegesamt.innerHTML = forestCover2021.toString() + "Ha";
    waldflächegesamttext.innerHTML = "Waldfläche in 2021";
    relativ.innerHTML = Prozent1.toFixed(2).toString() + "%";
    relativtext.innerHTML = "Relativ zur Gesamtzahl in der EU";
    waldfläche.innerHTML = forestCover2011.toString() + "Ha";
    waldflächetext.innerHTML = "Waldfläche in 2011";
    senkung.innerHTML = Prozent.toFixed(2).toString() + "%";
    senkungtext.innerHTML = "Senkungsrate gesamt zwischen 2011 und 2021";
    document.getElementById("chart").className = style;
}
//# sourceMappingURL=my-script7.js.map