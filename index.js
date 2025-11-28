
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
updateTimeZone();
setInterval(updateTimeZone, 1000);


