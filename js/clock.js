const today = document.querySelector("h2#today");
const clock = document.querySelector("h2#clock");

function getDate() {
    const now = new Date();    
    const year = String(now.getFullYear()).padStart(4, "0");
    const month = now.getMonth();
    const realMonth = String(month + 1).padStart(2, "0");
    const date = String(now.getDate()).padStart(2, "0");
    today.innerText = `${year}/${realMonth}/${date}`;
    
}

function getClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getDate();
getClock();
setInterval(getClock, 1000);