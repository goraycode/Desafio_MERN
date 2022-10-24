const mainCards = document.querySelector(".cards__allcountries");

export const cards = (response) => {

    limpiarHtml(mainCards);
    response.forEach(country => {
        const { flags: { png }, name: { common }, capital, population, region } = country

        const card = document.createElement("div");
        card.className = 'card';

        const img = document.createElement("img");
        img.className = 'card__img';
        img.src = png;

        const cardInfo = document.createElement("div");
        cardInfo.className = 'card__info';

        const pCountry = document.createElement("p");
        pCountry.className = 'card__country'
        pCountry.textContent = common;
        const pCapital = document.createElement("p");
        pCapital.className = 'card__capital';
        pCapital.textContent = `Capital: ${capital}`;
        const pPopulation = document.createElement("p");
        pPopulation.className = 'card__population'
        pPopulation.textContent = `Población: ${population}`;
        const pRegion = document.createElement("p");
        pRegion.className = 'card__region text-silver';
        pRegion.textContent = region;

        const link = document.createElement("a");
        link.className = 'card__link'
        link.href = `country.html?q=${common}`;
        link.textContent = 'Ver más';

        cardInfo.appendChild(pCountry);
        cardInfo.appendChild(pCapital);
        cardInfo.appendChild(pPopulation);
        cardInfo.appendChild(pRegion);
        cardInfo.appendChild(link);

        card.appendChild(img);
        card.appendChild(cardInfo);

        mainCards.appendChild(card);

    });
}


function limpiarHtml(father) {
    while (father.firstChild) {
        father.removeChild(father.firstChild);
    }
}
