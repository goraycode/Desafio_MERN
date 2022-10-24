import { cards } from "./interface.js";

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
    cards(response);
}



export const getRegion = async (region) => {
    const url = `https://restcountries.com/v3.1/region/${region}`;
    const data = await fetch(url);
    const response = await data.json();
    cards(response);
}
