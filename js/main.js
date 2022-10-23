

async function getAPI() {
    const url = "https://restcountries.com/v3.1/all";
    const data = await fetch(url);
    const response = await data.json();
    console.log(response)
}

getAPI();