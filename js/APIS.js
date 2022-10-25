import { cards, getAllInfo, messageError } from "./interface.js";

export const getAllCountries = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const data = await fetch(url);
    const response = await data.json();
    cards(response);
}

export const getCountry = async (country) => {

    const url = `https://restcountries.com/v3.1/name/${country}`;
    const data = await fetch(url);
    const response = await data.json();

    if (data.status === 200) {

        cards(response);
    } else {
        messageError();
    }

}

export const getRegion = async (region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    const data = await fetch(url);
    const response = await data.json();
    cards(response);
}

export const getAllInfoCountry = async (country) => {
    const url = `https://restcountries.com/v3.1/name/${country}`;
    const data = await fetch(url);
    const response = await data.json()
    const results = response.filter(c => c.name.common === country);
    getAllInfo(results);
}