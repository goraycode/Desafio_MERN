import { getAllCountries } from "./APIS.js";

const chevronsUp = document.querySelector(".chevrons-up");

function eventsListener() {
    document.addEventListener("DOMContentLoaded", getAllCountries)
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