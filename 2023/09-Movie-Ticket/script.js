const movies = [
  {
      id: 0,
      name: 'Wonder Woman',
      score: 8.1,
      image: 'https://cdn.vox-cdn.com/thumbor/iaSZloqp7mlgXxj1oCFwLriUhpk=/0x0:2048x1280/920x613/filters:focal(883x142:1209x468):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55016749/2017_The_Wonder_Woman_Gal_Gadot_wide.0.jpg',
      length: '2h 21min',
      des: 'Before she was Wonder Woman. She was Diana, princess of the Amazons, trained warrior. When a pilot crashes and tells of conflict in the outside world, she leaves home to fight a war, discovering her full powers and true destiny.'
  },
  {
      id: 1,
      name: 'Guardians of the Galaxy Vol. 3',
      score: 8,
      image: 'https://people.com/thmb/TRdwqKjfPYWpNOSe0pAFqqeLqpc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x492:961x494):format(webp)/Marvel-Studios-Guardians-of-the-Galaxy-Volume-3-Official-Trailer-01-120122-3b52642d616b4971af5dec2fed483bdd.jpg',
      length: '2h 30min',
      des: 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.'
  },
  {
      id: 2,
      name: 'Barbie',
      score: 7.4,
      image: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/07/rev-1-BAR-00362HighResJPEG-161c750-bf849b2-e1690197084134.jpg?quality=90&webp=true&resize=1000,667g',
      length: '1h 54min',
      des: 'Barbie suffers a crisis that leads her to question her world and her existence.'
  },
  {
      id: 3,
      name: 'The Batman',
      score: 7.8,
      image: 'https://i0.wp.com/batman-news.com/wp-content/uploads/2022/02/The-Batman-2022-Official-Images-31.jpeg?resize=696%2C464&quality=80&strip=info&ssl=1',
      length: '2h 56min',
      des: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement."
  },
  {
      id: 4,
      name: 'The Flash',
      score: 6.8,
      image: 'https://www.guide4moms.com/wp-content/uploads/2023/06/The-Flash-2023-2-768x385.jpg',
      length: '2h 24min',
      des: 'Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.'
  }
];

const swiperWrapperElem = document.querySelector('.swiper-wrapper');
let swiperHTML = '';

movies.forEach(movie => {
  swiperHTML += `
      <div class="swiper-slide" data-movie-id=${movie.id}>
          <div class="img-wrapper">
              <img src="${movie.image}">
          </div>
      </div>
  `;
});

swiperWrapperElem.innerHTML = swiperHTML;



const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false
  },
  centeredSlides: true,
  slidesPerView: 1.4,
  spaceBetween: -20,
  centeredSlides: true,
},);

let slideChangeTimeout;

swiper.on('slideChange', function () {
  clearTimeout(slideChangeTimeout);

  slideChangeTimeout = setTimeout(function () {
    const activeIndex = swiper.realIndex;

    renderMovieDetails(activeIndex);
  }, 100); 
});




function renderMovieDetails(activeIndex) {
  const movie = movies[activeIndex];
  document.querySelector('.js-movie-title').innerHTML = movie.name;
  document.querySelector('.js-movie-score').innerHTML = movie.score;
  document.querySelector('.js-movie-length').innerHTML = movie.length;
  document.querySelector('.js-movie-description').innerHTML = movie.des;
}
