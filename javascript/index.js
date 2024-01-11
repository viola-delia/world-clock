//Los Angeles
function updateLosAngelesTime() {
let losAngelesElement = document.querySelector("#los-angeles");
//let losAngelesDateElement = document.querySelector("#los-angeles .date");
//Can also be written:
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format("H:mm:ss [<small>]A[</small>]")}`
}
updateLosAngelesTime();
setInterval(updateLosAngelesTime, 1000);

//Rome
function updateRomeTime() {
let romeElement = document.querySelector("#rome");
let romeDateElement = romeElement.querySelector(".date");
let romeTimeElement = romeElement.querySelector(".time");
let romeTime = moment().tz("Europe/Rome");

romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
romeTimeElement.innerHTML = `${romeTime.format("H:mm:ss [<small>]A[</small>]")}`
}
updateRomeTime();
setInterval(updateRomeTime, 1000);