const plusBtn = document.querySelector('.plus-btn');
const streamBtnsList = document.querySelector('.btn-list');
const backBtn = document.querySelector('.back-btn');
const card = document.querySelector('.card');

plusBtn.addEventListener('click', () => {
  plusBtn.classList.toggle('opened');
  streamBtnsList.classList.toggle('active');
})


backBtn.addEventListener('click', (e) => {
  card.classList.add('translate-y-100vh');
    card.classList.add('scale-0');
    setTimeout(() => {
      card.classList.remove('translate-y-100vh');
      card.classList.remove('scale-0');
    }, 1500);

});
