function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,0);
    // const meridim = hours >= 12 ? "PM" : "AM"
    // hours = hours % 12||12
    const mins = now.getMinutes().toString().padStart(2,0);
    const secs = now.getSeconds().toString().padStart(2,0);
    const time=`${hours}: ${mins}: ${secs}`
     document.getElementById("clock").textContent = time

}
updateClock();
setInterval(updateClock, 1000)
