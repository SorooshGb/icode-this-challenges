const hoursTensElem = document.querySelector('.js-hours-tens');

const hoursOnesElem = document.querySelector('.js-hours-ones');

const minutesTensElem = document.querySelector('.js-minutes-tens');

const minutesOnesElem = document.querySelector('.js-minutes-ones');

const secondsTensElem = document.querySelector('.js-seconds-tens');

const secondsOnesElem = document.querySelector('.js-seconds-ones');

startCountdown();

function startCountdown() {
    let hours = 18;
    let minutes = 24;
    let seconds = 59;

    hoursTensElem.innerHTML = Math.floor(hours / 10);
    hoursOnesElem.innerHTML = hours % 10;

    minutesTensElem.innerHTML = Math.floor(minutes / 10);
    minutesOnesElem.innerHTML = minutes % 10;

    secondsTensElem.innerHTML = Math.floor(seconds / 10);
    secondsOnesElem.innerHTML = seconds % 10;


    setInterval(() => {
        // Increment the secondsPassed counter within the interval
        let secondsPassed = 1;

        // Calculate new time values
        seconds -= secondsPassed;

        if (seconds < 0) {
            seconds += 60;
            minutes -= 1;
        }

        if (minutes < 0) {
            minutes += 60;
            hours -= 1;
        }

        // Update the HTML elements
        hoursTensElem.innerHTML = Math.floor(hours / 10);
        hoursOnesElem.innerHTML = hours % 10;

        minutesTensElem.innerHTML = Math.floor(minutes / 10);
        minutesOnesElem.innerHTML = minutes % 10;

        secondsTensElem.innerHTML = Math.floor(seconds / 10);
        secondsOnesElem.innerHTML = seconds % 10;

    }, 1000);
}