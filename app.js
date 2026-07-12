async function loadPrice() {

    try {

        const url = `${BASE_URL}/price?symbol=${SYMBOL}&apikey=${API_KEY}`;

        const response = await fetch(url);

        const data = await response.json();

        if(data.price){

        

loadPrice();

setInterval(loadPrice, REFRESH_INTERVAL);
loadIndicators();
