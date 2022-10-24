import { getAllCountries, getCountry } from "./APIS.js";

const chevronsUp = document.querySelector(".chevrons-up");
const form = document.querySelector(".form");

const eventsListener = () => {
    document.addEventListener("DOMContentLoaded", getAllCountries)
    form.addEventListener("submit", readCountry);
}

const readCountry = (e) => {
    e.preventDefault();
    const search = document.querySelector("#search");

    if (!search.value.length) return;

    getCountry(search.value);
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