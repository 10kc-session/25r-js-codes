function getWeather() {
    let city = document.getElementById("cityName");
    showWeather(city.value);
}
function displayData(result) {
    let loader = document.getElementById("loader");
    loader.style.display = "none";
    let item = document.getElementById("showW   eather");
    item.innerHTML =
        `<p>City : ${result.name}</p>
        <p>Temp : ${result.main.temp}°F</p>
        `
}
async function showWeather(city) {
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b126d85474mshe64f1aa4d8742e9p19b32ajsn2a2e19b22508',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const result = await response.json();
        displayData(result);
    } catch (error) {
        console.error(error);
    }
}
