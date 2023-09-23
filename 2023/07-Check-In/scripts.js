const cardElem = document.querySelector('.js-card')
const moonElem = document.querySelector('.js-fa-moon');
const searchContainerElem = document.querySelector('.js-search-container');
const searchInputElem = document.querySelector('.js-search-input');
const btnElem = document.querySelector('.js-location-btn');
const locationOffMsgElem = document.querySelector('.js-location-off-msg');
const searchButton = document.querySelector('.js-search-btn');

let mapInstance;

let darkMode = 'off';

moonElem.addEventListener('click', () => {

    if (darkMode === 'on') {
        turnOffDarkMode();
        return;
    }

    cardElem.classList.add('card-dark-mode');
    searchContainerElem.classList.add('search-container-dark-mode');
    searchInputElem.classList.add('search-input-dark-mode');
    document.body.style.backgroundColor = '#5e7199';

    darkMode = 'on';
});

function turnOffDarkMode() {
    document.querySelector('.card-dark-mode')
        .classList.remove('card-dark-mode');

    document.querySelector('.search-container-dark-mode')
        .classList.remove('search-container-dark-mode');

    document.querySelector('.search-input-dark-mode')
        .classList.remove('search-input-dark-mode');

    document.body.style.backgroundColor = 'initial';

    darkMode = 'off';
}

btnElem.addEventListener('click', () => {

    if (mapInstance) {
        document.querySelector('.js-offline-map-img').style.display = 'block';
        locationOffMsgElem.style.display = 'block';
        btnElem.innerHTML = 'Turn on location';
        document.querySelector('.map-container').style.height = 'auto';
        document.querySelector('.map-container').classList.add('.map-container');
        document.querySelector('.map-container').style.backgroundColor = 'initial';
        mapInstance.remove();
        mapInstance = null;
        return;
    }


    if (navigator.geolocation) {
        document.querySelector('.js-offline-map-img').style.display = 'none'
        locationOffMsgElem.style.display = 'none';
        btnElem.innerHTML = 'Turn off location';
        document.querySelector('.map-container').style.height = '250px';
 
        navigator.geolocation.getCurrentPosition(function (position) {
            const { latitude, longitude } = position.coords;
            const coord = [latitude, longitude];

            const map = L.map('map').setView(coord, 13);
            mapInstance = map;
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            L.marker(coord).addTo(map)
                .bindPopup('Your location.')
                .openPopup();

        }, function (error) {
            if (error.code === 1) {
                alert("You have blocked location access. Please enable it in your browser settings to use this feature.");
            } else {
                alert('Error:', error);
            }
        });
    } else {
        alert('Geolocation is not available in this browser.');
    }
});



const searchInput = document.querySelector('.js-search-input');
const dropdownContainer = document.querySelector('.dropdown-container');

let markerInstance;

searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    if (query) {
        fetchSuggestions(query)
            .then(suggestions => {
                displayDropdown(suggestions);
            })
            .catch(error => {
                console.error('Error fetching suggestions:', error);
            });
    } else {
        hideDropdown();
    }
});

dropdownContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('dropdown-item')) {
        const selectedSuggestion = event.target.textContent;
        searchInput.value = selectedSuggestion;
        hideDropdown();
        searchLocationAndShowOnMap(selectedSuggestion);
    }
});

document.addEventListener('click', (event) => {
    if (!dropdownContainer.contains(event.target) && event.target !== searchInput) {
        hideDropdown();
    }
});

async function fetchSuggestions(query) {
    const baseUrl = 'https://nominatim.openstreetmap.org/search';
    const format = 'json';
    const limit = 5;
    const params = new URLSearchParams({
        q: query,
        format,
        limit
    });

    const suggestionsUrl = `${baseUrl}?${params.toString()}`;
    const response = await fetch(suggestionsUrl);
    const data = await response.json();

    const suggestions = data.map(item => item.display_name);
    return suggestions;
}

function createDropdownItem(text) {
    const item = document.createElement('div');
    item.classList.add('dropdown-item');
    item.textContent = text;
    return item;
}

function displayDropdown(suggestions) {
    dropdownContainer.innerHTML = '';

    suggestions.forEach(suggestion => {
        const item = createDropdownItem(suggestion);
        dropdownContainer.appendChild(item);
    });

    dropdownContainer.style.display = 'block';
}

function hideDropdown() {
    dropdownContainer.style.display = 'none';
}

function searchLocationAndShowOnMap(query) {
    const baseUrl = 'https://nominatim.openstreetmap.org/search';
    const format = 'json';
    const limit = 1;
    const language = 'en';
    const params = new URLSearchParams({
        q: query,
        format,
        limit,
        language
    });

    const geocodingUrl = `${baseUrl}?${params.toString()}`;

    fetch(geocodingUrl)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const [longitude, latitude] = [parseFloat(data[0].lon), parseFloat(data[0].lat)];

                if (mapInstance) {
                    mapInstance.setView([latitude, longitude], 13);
                    if (markerInstance) {
                        markerInstance.remove();
                    }
                    markerInstance = L.marker([latitude, longitude]).addTo(mapInstance)
                        .bindPopup('Searched location.')
                        .openPopup();
                } else {
                    const map = L.map('map').setView([latitude, longitude], 13);
                    mapInstance = map;
                    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(map);
                    markerInstance = L.marker([latitude, longitude]).addTo(mapInstance)
                        .bindPopup('Searched location.')
                        .openPopup();

                    document.querySelector('.map-container').style.display = 'block';
                }
            } else {
                console.log('No results found for the query.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
