const [daysElem, hoursElem, minutesElem, secondsElem] = document.querySelectorAll('p')

const currentYear = new Date().getFullYear()
const halloweenDate = new Date(currentYear, 9, 31);

function updateCountdown() {
    const currentTime = new Date();

    // Time difference in seconds
    const timeDifference = Math.floor((halloweenDate - currentTime) / 1000);

    if(timeDifference <= 0) {
      daysElem.innerHTML = 0;
      hoursElem.innerHTML = 0;
      minutesElem.innerHTML = 0;
      secondsElem.innerHTML = 0;
      clearInterval(intervalId);
      return;
    } 

    const days = Math.floor(timeDifference / (60 * 60 * 24));
    const hours = Math.floor((timeDifference % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeDifference % (60 * 60 * 24)) % (60 * 60) / 60);
    const seconds = Math.floor(timeDifference % 60);

    daysElem.innerHTML = days;
    hoursElem.innerHTML = hours;
    minutesElem.innerHTML = minutes;
    secondsElem.innerHTML = seconds;
}

let intervalId = setInterval(updateCountdown, 1000);

updateCountdown()