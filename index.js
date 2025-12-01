
function updateTimeZone() {
    let lagosElement = document.querySelector("#lagos");
    let lagosDate = lagosElement.querySelector(".date");
    let lagosTimeZone = moment().tz("Africa/Lagos");
    lagosDate.innerHTML = lagosTimeZone.format("MMMM Do YYYY");
    let lagosTime = lagosElement.querySelector(".time");
    lagosTime.innerHTML =  lagosTimeZone.format("h:mm:ss  [<small>]A[</small>]"); 
    
    //Riyadh
    let riyadhElement = document.querySelector("#riyadh");
    let riyadhDate = riyadhElement.querySelector(".date");
    let riyadhTimeZone = moment().tz("Asia/Riyadh");
    riyadhDate.innerHTML = riyadhTimeZone.format("MMMM Do YYYY");
    let riyadhTime = riyadhElement.querySelector(".time");
    riyadhTime.innerHTML =  riyadhTimeZone.format("h:mm:ss  [<small>]A[</small>]"); 

}


function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = 
    `<div class="city" id="lagos">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date" id="date">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
                </div>
                
                <div class="time" id="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
            </div>`
}
updateTimeZone();
setInterval(updateTimeZone, 1000);
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);




