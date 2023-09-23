const appIconElem = document.querySelector('.js-app-icon');
const profileTabElem = document.querySelector('.js-profile-tab');
const navbarElem = document.querySelector('.js-navbar');
const notifBellElem = document.querySelector('.js-notif-bell-container');
const commentsElem = document.querySelector('.js-comments');

appIconElem.addEventListener('click', handleAppIconClick);
notifBellElem.addEventListener('click', handleNotifBellClick);

let isCommentsOpen = false;

function handleAppIconClick() {
    toggleElements();
}

function handleNotifBellClick() {
    isCommentsOpen = !isCommentsOpen;
    toggleElements();
    if (isCommentsOpen) {
        setTimeout(() => {
            document.addEventListener('click', closeComments);
        }, 1000);
    } else {
        document.removeEventListener('click', closeComments);
    }
}

function toggleElements() {
    appIconElem.classList.toggle('app-icon-clicked');
    profileTabElem.classList.toggle('profile-tab-open');
    navbarElem.classList.toggle('navbar-open');
    notifBellElem.classList.toggle('notif-bell-container-animate');
    if (isCommentsOpen) {
        commentsElem.classList.add('comments-open');
        notifBellElem.removeEventListener('click', handleNotifBellClick);
        appIconElem.removeEventListener('click', handleAppIconClick);
    } else {
        commentsElem.classList.remove('comments-open');
        notifBellElem.addEventListener('click', handleNotifBellClick);
        appIconElem.addEventListener('click', handleAppIconClick);
    }
}

function closeComments(event) {
    if (!commentsElem.contains(event.target)) {
        isCommentsOpen = false;
        toggleElements();
        document.removeEventListener('click', closeComments);
    }
}
