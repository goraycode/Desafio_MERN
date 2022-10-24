import { cards } from "./interface.js";

export const getAllCountries = async () => {
    const url = "https://restcountries.com/v3.1/all";
    const data = await fetch(url);
    const response = await data.json();
    cards(response);
}



