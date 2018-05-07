const search = document.querySelector('.search');
const list = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities = data);

const dataMatching = (regex) => {
    return cities.filter(city => {
        return city.city.match(regex) || city.state.match(regex);
    });
};

const listRefresh = () => {
    if (search.value.length === 0) {
        list.innerHTML = `
        <li>
          <span class="name">I am waiting for your request...</span>
        </li>`
        return;
    }
    const regex = new RegExp(search.value,'gi');
    let matchedArray = dataMatching(regex);
    let newListHTML = matchedArray.map(elem => {
        const cityName = elem.city.replace(regex, `<span class="hl">${elem.city.match(regex)}</span>`);
        const stateName = elem.state.replace(regex, `<span class="hl">${elem.state.match(regex)}</span>`);
        return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${elem.population}</span>
        </li>
      `;
    }).join('');
    list.innerHTML = newListHTML;
};

search.addEventListener('change',listRefresh);
search.addEventListener('keyup',listRefresh);
