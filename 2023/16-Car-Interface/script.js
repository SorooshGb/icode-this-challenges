const tachometer = document.querySelector('.tachometer');
const innerCircle = document.querySelector('.inner-circle');
const lines = document.querySelectorAll('.line');
const randomLines = document.querySelectorAll('.random-line');
const needles = document.querySelectorAll('.needle');
const numbers = document.querySelectorAll('.number');
const acceptBtn = document.querySelector('.accept-btn');
const declineBtn = document.querySelector('.decline-btn');

updateTransformOrigin();

function updateTransformOrigin() {
    const tachometerRadius = tachometer.offsetWidth / 2;
    const innerCircleRadius = innerCircle.offsetWidth / 2;
    lines.forEach(line => line.style.transformOrigin = `${tachometerRadius}px 0`);
    numbers.forEach(number => number.style.transformOrigin = `${innerCircleRadius}px 0`);
    randomLines.forEach(randomLine => randomLine.style.transformOrigin = `${tachometerRadius}px 0`)
    needles.forEach(needle => needle.style.transformOrigin = `${tachometerRadius}px 0`);
}

const resizeObserver = new ResizeObserver(updateTransformOrigin);
resizeObserver.observe(tachometer);


let lineDegree = -26
let count = 0;
lines.forEach(line => {
    line.style.transform = `rotate(${lineDegree}deg)`;
    lineDegree += 7.25;
    count++;

    // Resetting the lineDegree at the count of 33 so that the styles 
    // will start to apply to the next set of lines in the next circle
    if (count === 33) {
        lineDegree = -26;
    }
});


count = 0;
let numberDegree = -21;

numbers.forEach(number => {
    number.style.transform = `rotate(${numberDegree}deg)`;
    numberDegree += 28.8;
    count++;

    if (count === 9) {
        numberDegree = -21;
    }
});


count = 0;
let counterDegree = 21;
const numbersInside = document.querySelectorAll('.number span');

numbersInside.forEach(number => {
    number.style.transform = `rotate(${counterDegree}deg)`;
    counterDegree -= 28.8;
    count++;

    if (count === 9) {
        counterDegree = 21;
    }
});

const callerWrapper = document.querySelector('.caller-img-wrapper');
const callerId = document.querySelector('.caller-id');
const callBtnsElem = document.querySelector('.call-btns');
const telephoneIcon = document.querySelector('.telephone-icon');
acceptBtn.addEventListener('click', () => {
    callerId.innerHTML = 'Connected';
    callBtnsElem.innerHTML = 'to Robert';
    callerWrapper.style.animationPlayState = 'paused';
    document.querySelector('.caller-img ').style.display = "none";
    telephoneIcon.classList.add('accepted');
    telephoneIcon.addEventListener('click', hangUp)
});

declineBtn.addEventListener('click', () => {
    document.querySelector('.caller-overlay').remove();
    callerWrapper.style.animationPlayState = 'paused';
    callerId.innerHTML = 'Call';
    callBtnsElem.innerHTML = 'Rejected';
    setTimeout(() => {
        hangUp();
    }, 3500);
});

function hangUp() {
    callerWrapper.remove();
    callerId.remove();
    callBtnsElem.remove();
    document.querySelector('.caller').classList.add('call-finished');
}

