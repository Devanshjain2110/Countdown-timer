const newYear = "1 Jan 2023";

const monthsElement = document.getElementById('months')
const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')

function countdown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();

    const seconds  = ( newYearsDate - currentDate)/1000;

    const months =Math.floor(seconds/3600/ 24/365);
    const days =Math.floor(seconds/3600/ 24);
    const hours =Math.floor(seconds/3600)%24;
    const minutes =Math.floor(seconds/60)%60;
    const second =Math.floor(seconds%60);

  monthsElement.innerHTML = months
  daysElement.innerHTML = days
  hoursElement.innerHTML = hours 
  minutesElement.innerHTML = minutes
  secondsElement.innerHTML =second
    console.log(months,days,hours,minutes,second)
}

countdown();

setInterval(countdown, 1000)