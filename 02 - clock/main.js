const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
    
function setTime() {
    const now = new Date();
    secondHand.style.transform = `rotate(${(~~now.getSeconds() / 60)*360 + 90}deg)`;
    minuteHand.style.transform = `rotate(${(~~now.getMinutes() / 60)*360 + 90}deg)`;
    hourHand.style.transform = `rotate(${(~~now.getHours() / 60)*360 + 90}deg)`;
};

setTime();
setInterval(setTime,1000);

