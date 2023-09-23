const tabs = document.querySelectorAll('.tabs li');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        turnOffPrevious();
        tab.classList.add('tab-active');
        switchTab(tab);
    });
});

function switchTab(tab) {
    const currentCat = tab.innerText;
    document.querySelector('.js-new-media h2').innerHTML = `New ${currentCat}`;
    renderMedia(currentCat.toLowerCase());
}

function turnOffPrevious() {
    const activeTab = document.querySelector('.tab-active');
    if (activeTab) {
        activeTab.classList.remove('tab-active');
    }
}


const media = [
    {
        id: 1,
        img: 'https://media.contentapi.ea.com/content/dam/eacom/NFSNL/images/2018/03/nfsnl_Youtube_thumbnail_TU19_1280x720.jpg.adapt.1456w.jpg',
        name: 'Need for Speed & trade; No Limits',
        rating: 4,
        section: 'new',
        cat: 'games'
    },
    {
        id: 2,
        img: 'https://m.media-amazon.com/images/I/91l0gLl2IQL.jpg',
        name: "June's Journey",
        rating: 3,
        section: 'new',
        cat: 'games'
    },
    {
        id: 3,
        img: 'https://assetsio.reedpopcdn.com/Batman-Enemy-Within-Header-01.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp',
        name: 'Batman: The Enemy Within',
        rating: 3,
        section: 'new',
        cat: 'games'
    },
    {
        id: 4,
        img: 'https://staticg.sportskeeda.com/editor/2023/03/112d7-16781866130065-1920.jpg',
        name: 'Clash of Clans',
        rating: 4,
        section: 'recommendation',
        cat: 'games'
    },
    {
        id: 5,
        img: 'https://learningworksforkids.com/wp-content/uploads/Super-Mario-Run-icon.png',
        name: 'Super Mario Run',
        rating: 3,
        section: 'recommendation',
        cat: 'games'
    },
    {
        id: 6,
        img: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/FruitNinjaTeaser.jpg?v=0.2-c5b5b387',
        name: 'Fruit Ninja',
        rating: 3,
        section: 'recommendation',
        cat: 'games'
    },
    {
        id: 7,
        img: 'https://learningworksforkids.com/wp-content/uploads/1365168103_1069.jpg',
        name: 'Sonic Dash',
        rating: 3,
        section: 'recommendation',
        cat: 'games'
    },
    {
        id: 8,
        img: 'https://images.ctfassets.net/vfkpgemp7ek3/1240004181/8b1fdb1ab8330de77e0f8ecf1f5757c1/call-of-duty-mobile-hero-a.jpg?w=1920',
        name: 'Call of Duty Mobile',
        rating: 4,
        section: 'recommendation',
        cat: 'games'
    },
    {
        id: 9,
        img: 'https://learningworksforkids.com/wp-content/uploads/AB-Evolutions.png',
        name: 'Angry Birds Evolution',
        rating: 3,
        section: 'recommendation',
        cat: 'games'
    },
    {
        id: 10,
        img: 'https://cdnb.artstation.com/p/assets/images/images/025/269/313/large/lab-cave-fg2-diggy-s-adventure-labcave.jpg?1585236965',
        name: "Diggy's Adventure",
        rating: 4,
        section: 'trending',
        cat: 'games'
    },
    {
        id: 11,
        img: 'https://mobimg.b-cdn.net/v2/fetch/70/7028a54748e8f9dd0e0b9d4aaa4a3d9a.jpeg?w=500&q=40',
        name: "Chaves Adventures",
        rating: 3,
        section: 'trending',
        cat: 'games'
    },
    {
        id: 12,
        img: 'https://media.contentapi.ea.com/content/dam/eacom/pvz/pvz2/images/2021/09/pvz3-article-thumbnail-image.jpg.adapt.crop16x9.431p.jpg',
        name: "Plants vs. Zombies 2",
        rating: 3,
        section: 'trending',
        cat: 'games'
    },
    {
        id: 13,
        img: 'https://images.macrumors.com/t/lOzTEJY6qVK12eOIhkVjFJfHQ0Y=/800x0/article-new/2022/08/telegram-app-icon.jpg?lossy',
        name: "Telegram",
        rating: 5,
        section: 'new',
        cat: 'apps'
    },
    {
        id: 14,
        img: 'https://www.callbell.eu/wp-content/uploads/2019/01/Senza-nome-2.png',
        name: "Whatsapp",
        rating: 4,
        section: 'new',
        cat: 'apps'
    },
    {
        id: 14,
        img: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/09/delete-instagram-920x507.jpg',
        name: "Instagram",
        rating: 4,
        section: 'new',
        cat: 'apps'
    },
    {
        id: 14,
        img: 'https://pwestpathfinder.com/wp-content/uploads/2023/05/image1-1.png',
        name: "Metallica",
        rating: 5,
        section: 'new',
        cat: 'music'
    },
    {
        id: 15,
        img: 'https://i0.wp.com/global-uploads.webflow.com/5e235b1105541e20386fd864/5e359cc41212676f8ab69b5d_cover_FINAL_small.jpg?resize=816%2C9999&ssl=1',
        name: "Nightwish",
        rating: 5,
        section: 'new',
        cat: 'music'
    },
    {
        id: 16,
        img: 'https://www.xsnoize.com/wp-content/uploads/2020/05/daisies-art.jpg',
        name: "Katy Perry",
        rating: 4,
        section: 'new',
        cat: 'music'
    },
    {
        id: 16,
        img: 'https://wallpaperaccess.com/full/8376790.jpg',
        name: "The Boys",
        rating: 4,
        section: 'new',
        cat: 'movies&tv'
    },
    {
        id: 17,
        img: 'https://wallpaperaccess.com/full/5311573.jpg',
        name: "Rick and Morty",
        rating: 4,
        section: 'new',
        cat: 'movies&tv'
    },
    {
        id: 17,
        img: 'https://i0.wp.com/apollohou.com/wp-content/uploads/img_9027.jpg?w=1280&ssl=1',
        name: "Oppenheimer",
        rating: 4,
        section: 'new',
        cat: 'movies&tv'
    },
];

renderMedia('games');

function assignRating(rating) {
    let starsHTML = '';

    for (let i = 0; i < rating; i++) {
        starsHTML += `
      <i class="filled-rating fa-solid fa-star"></i>
    `;
    }

    for (let i = 0; i < (5 - rating); i++) {
        starsHTML += `
      <i class="fa-solid fa-star"></i>
    `;
    }

    return starsHTML;
}


function renderMedia(category) {
    let newMediaHTML = '';
    let recommededMediaHTML = '';
    let trendingMediaHTML = '';

    media.forEach(item => {
        if (item.section === 'new' && item.cat == category) {
            newMediaHTML += `
        <div class= "media" data-media-id=${item.id}>
            <img src="${item.img}">
            <div class="media-second-row">
                <p class="media-title">${item.name}</p>
                <div class="rating">
                    ${assignRating(item.rating)}
                </div>
            </div>
        </div>
        `;
        }

        if (item.section === 'recommendation' && item.cat == category) {
            recommededMediaHTML += `
        <div class= "media" data-media-id=${item.id}>
            <img src="${item.img}">
            <div class="media-second-row">
                <div class="rating">
                  ${assignRating(item.rating)}
                </div><p>Free</p>
                <p class="media-title">${item.name}</p>
            </div>
        </div>
      `;
        }

        if (item.section === 'trending' && item.cat == category) {
            trendingMediaHTML += `
        <div class= "media" data-media-id=${item.id}>
            <img src="${item.img}">
            <div class="media-second-row">
                <p class="media-title">${item.name}</p>
                <div class="rating">
                ${assignRating(item.rating)}
                </div>
            </div>
        </div>
      `;
        }
    });

    document.querySelector('.js-new-media-grid').innerHTML = newMediaHTML;
    document.querySelector('.js-recommended-media-grid').innerHTML = recommededMediaHTML;
    document.querySelector('.js-trending-media-grid').innerHTML = trendingMediaHTML;
}