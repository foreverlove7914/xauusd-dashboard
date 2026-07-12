async function loadPrice() {

    try {

        const url = `${BASE_URL}/price?symbol=${SYMBOL}&apikey=${API_KEY}`;

        const response = await fetch(url);

        const data = await response.json();

        if(data.price){

            document.getElementById("price").innerHTML =
                "$" + Number(data.price).toFixed(2);

            document.getElementById("trend").innerHTML =
                "🟢 LIVE";

            

        }else{

            document.getElementById("price").innerHTML =
                "API ERROR";

            console.log(data);

        }

    }catch(error){

        console.log(error);

        document.getElementById("price").innerHTML =
            "Connection Error";

    }

}

loadPrice();

setInterval(loadPrice, REFRESH_INTERVAL);
loadIndicators();
