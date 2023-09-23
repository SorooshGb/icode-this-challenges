const card = document.querySelector('.card');
const vacuumButton = document.querySelector('.js-bell');
const actionBtns = document.querySelectorAll('.js-action-btn');

vacuumButton.addEventListener('click', () => {
    if (card.classList.contains('card-sucked-in')) {
        card.style.animation = 'reverse-squish 1s';

        card.addEventListener('animationend', () => {
            card.classList.remove('card-sucked-in');
            card.style.animation = '';
        }, { once: true});
        
    } else {
        card.classList.add('card-sucked-in');
    }
});

actionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.innerHTML === 'Decline') {
            document.querySelector('.js-action-buttons-container').innerHTML = 'Declined!';
        } else {
            document.querySelector('.js-action-buttons-container').innerHTML = 'Accepted!';
        }
    });
});