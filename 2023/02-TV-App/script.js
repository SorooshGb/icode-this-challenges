const categoryItems = document.querySelectorAll('#categories li');

document.querySelector('#categories li:nth-of-type(3)')
  .classList.add('category-is-selected');

categoryItems.forEach((categoryItem) => {
  categoryItem.addEventListener('click', () => {
    checkPreviousBtn();
    categoryItem.classList.add('category-is-selected');
  });
});

function checkPreviousBtn() {
  const previousBtn = document.querySelector('.category-is-selected');
  if (previousBtn) {
    previousBtn.classList.remove('category-is-selected');
  }
}

const userMediaData= [{
  image: 'https://i.etsystatic.com/39539775/r/il/58e024/5143976522/il_794xN.5143976522_4pyy.jpg',
  name: 'Vikings',
  season: '4',
  epNum: '8',
  epName: 'Portage ',
  length: '50',
  watched: '10',
}, {
  image: 'https://wallpapers.com/images/hd/hd-tyrion-of-game-of-thrones-6g1hl195mu72sjkt.webp',
  name: 'Game of thrones',
  season: '6',
  epNum: '1',
  epName: 'The Red Woman',
  length: '55',
  watched: '41',
}, {
  image: 'https://wallpaperaccess.com/full/1104249.jpg',
  name: 'The Big Bang Theory',
  season: '9',
  epNum: '12',
  epName: 'Viewing Party',
  length: '23',
  watched: '4',
}, {
  image: 'https://wallpaperaccess.com/full/8376790.jpg',
  name: 'The Boys',
  season: '3',
  epNum: '1',
  epName: 'Payback',
  length: '55',
  watched: '54',
}, {
  image: 'https://wallpaperaccess.com/full/5311573.jpg',
  name: 'Rick and Morty',
  season: '6',
  epNum: '5',
  epName: 'Final DeSmithation',
  length: '21',
  watched: '20',
}, {
  image: 'https://wallpaperaccess.com/full/2924772.jpg',
  name: 'Breaking Bad',
  season: '5',
  epNum: '14',
  epName: 'Ozymandias ',
  length: '49',
  watched: '49',
}];

let mediaGridContentHTML = '';

userMediaData.forEach((media) => {

  const percentageWatched = (media.watched / media.length) * 100;
  // Generate the HTML for the progress bar
  const progressBarHTML = `
    <div class="progress-bar" style="width: ${percentageWatched}%"></div>
  `;

  mediaGridContentHTML += `
  <div class="media">
    <img src="${media.image}" alt="">
    <h3>${media.name}</h3>
    <p>${media.epName} S${media.season}, Ep${media.epNum}</p><p>${(media.length - media.watched)} min. left</p>
    <div>${progressBarHTML}</div>
  </div>
`;

});

if (mediaGridContentHTML !== '') {
  document.querySelector('.media-grid').innerHTML = mediaGridContentHTML;
} else {
  document.querySelector('.media-grid').innerHTML= 'No Content';
}
