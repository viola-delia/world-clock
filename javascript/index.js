//Los Angeles
function updateTime() {
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
//let losAngelesDateElement = document.querySelector("#los-angeles .date");
//Can also be written:
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format("H:mm:ss [<small>]A[</small>]")}`

//Rome
let romeElement = document.querySelector("#rome");
let romeDateElement = romeElement.querySelector(".date");
let romeTimeElement = romeElement.querySelector(".time");
let romeTime = moment().tz("Europe/Rome");

romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
romeTimeElement.innerHTML = `${romeTime.format("H:mm:ss [<small>]A[</small>]")}`

}
}


//Change the city in the container
function updateCity(event) {
    let cityTimeZone = event.target.value;
if (cityTimeZone === "current") {
  cityTimeZone = moment.tz.guess();
}

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("H:mm ")}<small>${cityTime.format("A")}</small></div>
        </div>`;
}


updateTime();
setInterval(updateTime, 1000);

// Select the select menu
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
