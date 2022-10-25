const mainCards = document.querySelector(".cards");
const divLoad = document.querySelector(".divLoad");
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


export const getAllInfo = (response) => {

   
    divLoad.innerHTML = `   
    <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
    </div>
    `;
    setTimeout(() => {
        divLoad.innerHTML= '';
        limpiarHtml(mainCards);
        response.forEach(country => {
            const { flags: { png }, name: { common }, currencies, area, timezones, capital, population, region, subregion } = country
            const card = document.createElement("div");
            card.className = 'card-2';


            const img = document.createElement("img");
            img.className = 'card2__img';
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
            const pArea = document.createElement("p");
            pArea.className = 'card__area'
            pArea.textContent = `Área: ${area}`;
            const pRegion = document.createElement("p");
            pRegion.className = 'card__region text-silver';
            pRegion.textContent = `${region} - ${subregion}`;
            const pTimeZone = document.createElement("p");
            pTimeZone.className = 'card__region';
            pTimeZone.textContent = `Zona horaria: ${timezones[0]}`;


            const link = document.createElement("a");
            link.className = 'card2__link'
            link.href = "index.html";
            link.textContent = 'Volver';

            cardInfo.appendChild(pCountry);
            cardInfo.appendChild(pCapital);
            cardInfo.appendChild(pPopulation);
            cardInfo.appendChild(pArea);
            cardInfo.appendChild(pRegion);
            cardInfo.appendChild(pTimeZone);
            cardInfo.appendChild(link);

            card.appendChild(img);
            card.appendChild(cardInfo);

            mainCards.appendChild(card);

        });
    }, 2000);




}


function limpiarHtml(father) {
    while (father.firstChild) {
        father.removeChild(father.firstChild);
    }
}
