import { getAllInfoCountry } from "./APIS.js";

const eventListeners = () => {
    document.addEventListener("DOMContentLoaded", showCountry);
}

const showCountry = () => {
    const parametersURL = new URLSearchParams(window.location.search);
    const q = parametersURL.get("q");
    getAllInfoCountry(q);
}


eventListeners();