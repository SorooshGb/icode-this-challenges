const introElem = document.querySelector('.intro');
const addTaskBtnElem = document.querySelector('.js-add-task-btn');
const newTaskWindow = document.querySelector('.js-new-task-window');
const closeBtnElem = document.querySelector('.js-close-btn');

addTaskBtnElem.addEventListener('click', () => {
    introElem.removeAttribute('opening', '');
    introElem.setAttribute('closing', '');

    introElem.addEventListener('animationend', () => {
        introElem.removeAttribute('closing', '');
        introElem.setAttribute('closed', '');
        newTaskWindow.setAttribute('open', '');
    }, { once: true });
});

closeBtnElem.addEventListener('click', () => {
    newTaskWindow.setAttribute('closing', '');

    newTaskWindow.addEventListener('animationend', () => {
        newTaskWindow.removeAttribute('closing', '');
        newTaskWindow.removeAttribute('open', '');
        introElem.removeAttribute('closed', '');
        introElem.setAttribute('opening', '');
    }, { once: true });
});