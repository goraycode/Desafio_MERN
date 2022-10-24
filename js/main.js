import { getAllCountries, getCountry, getRegion } from "./APIS.js";

const chevronsUp = document.querySelector(".chevrons-up");
const form = document.querySelector(".form");
const region = document.querySelector("#region");

const eventsListener = () => {
    document.addEventListener("DOMContentLoaded", getAllCountries)
    form.addEventListener("submit", readCountry);
    region.addEventListener("change", readRegion);
}

const readCountry = (e) => {
    e.preventDefault();
    const search = document.querySelector("#search");

    if (!search.value.length) return;

    getCountry(search.value);
}

const readRegion = (e) => {
    const value = e.target.value;
    getRegion(value);
}



const classToChevronsuP = () => {
    window.addEventListener("scroll", () => {
        const scrollPY = window.scrollY;

        chevronsUp.classList.add("hidden");
        if (scrollPY > 2000) {
            chevronsUp.classList.add("show");
        } else {
            chevronsUp.classList.remove("show");
            chevronsUp.classList.add("hidden");
        }
    })
};




eventsListener();
classToChevronsuP();