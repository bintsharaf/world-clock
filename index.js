function updateTimeZone() {
    
    //Lagos
    let lagosElement = document.querySelector("#lagos");
    if (lagosElement) {
        let lagosDate = lagosElement.querySelector(".date"); 
        let lagosTime = lagosElement.querySelector(".time");
        let lagosTimeZone = moment().tz("Africa/Lagos");

        lagosDate.innerHTML = lagosTimeZone.format("MMMM Do YYYY");
        lagosTime.innerHTML =  lagosTimeZone.format("h:mm:ss  [<small>]A[</small>]"); 
    
    }
   
    //Riyadh
    let riyadhElement = document.querySelector("#riyadh");
    if (riyadhElement) {
        let riyadhDate = riyadhElement.querySelector(".date");
        let riyadhTime = riyadhElement.querySelector(".time");
        let riyadhTimeZone = moment().tz("Asia/Riyadh");

        riyadhDate.innerHTML = riyadhTimeZone.format("MMMM Do YYYY");
        riyadhTime.innerHTML =  riyadhTimeZone.format("h:mm:ss  [<small>]A[</small>]");
    }
     

}
updateTimeZone();
setInterval(updateTimeZone, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div 
        class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date" id="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                
                <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/">All cities</a>
    `;
}


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);




