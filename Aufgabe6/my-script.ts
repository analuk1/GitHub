const germany = "Deutschland" ;
const france = "Spanien";
const italy = "Italien";
const croatia = "Kroatien";
const forestCoverEU = 159000000;
const forestCover2021DE = 10666600;
const forestCover2011DE = 11419124;
const forestCover2021FR = 17100000;
const forestCover2011FR = 15000000;
const forestCover2021IT = 11000000;
const forestCover2011IT = 9149000;
const forestCover2021KRO = 2700000;
const forestCover2011KRO = 2260000;

let ProzentD1 = (1-forestCover2021DE/forestCoverEU)*100;
let ProzentF1 = (1-forestCover2021FR/forestCoverEU)*100;
let ProzentI1 = (1-forestCover2021IT/forestCoverEU)*100;
let ProzentKRO1 = (1-forestCover2021KRO/forestCoverEU)*100;

let ProzentD = (1-forestCover2011DE/forestCover2021DE)*100;
let ProzentF = (1-forestCover2011FR/forestCover2021FR)*100;
let ProzentI = (1-forestCover2011IT/forestCover2021IT)*100;
let ProzentKRO = (1-forestCover2011KRO/forestCover2021KRO)*100;

console.log(" Waldfläche in " + germany + " beträgt " + forestCover2021DE + "mKh." );
console.log(" Relativ zur Gesamtzahl in der EU " + ProzentD1 + " %. ");
console.log(" Waldfläche in " + germany + " betrug in 2011 " + forestCover2011DE + " mKh. " );
console.log(" Waldfläche ist in den letzten 10 Jahren um " + ProzentD + " % gesunken.");

console.log(" Waldfläche in " + france + " beträgt " + forestCover2021FR + " mKh. ");
console.log(" Relativ zur Gesamtzahl in der EU " + ProzentF1 + " %. ");
console.log(" Waldfläche in " + france + " betrug in 2011 " + forestCover2011FR + " mKh. " );
console.log(" Waldfläche ist in den letzten 10 Jahren um " + ProzentF + " % gesunken.");

console.log(" Waldfläche in " + italy + " beträgt " + forestCover2021IT + "mKh.");
console.log(" Relativ zur Gesamtzahl in der EU " + ProzentI1 + " %. ");
console.log(" Waldfläche in " + france + " betrug in 2011 " + forestCover2011IT + " mKh. " );
console.log(" Waldfläche ist in den letzten 10 Jahren um " + ProzentI + " % gesunken.");

console.log(" Waldfläche in " + croatia + " beträgt " + forestCover2021KRO + "mKh.");
console.log(" Relativ zur Gesamtzahl in der EU " + ProzentKRO1 + " %. ");
console.log(" Waldfläche in " + croatia + " betrug in 2011 " + forestCover2011KRO + " mKh. " );
console.log(" Waldfläche ist in den letzten 10 Jahren um " + ProzentKRO + " % gesunken.");


